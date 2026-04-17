import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import Razorpay from 'razorpay';
import crypto from 'crypto';

admin.initializeApp();
const db = admin.firestore();

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID || '',
  key_secret: process.env.RAZORPAY_KEY_SECRET || '',
});

// Create Razorpay order
export const createOrder = functions.https.onRequest(async (req, res) => {
  res.set('Access-Control-Allow-Origin', '*');
  if (req.method === 'OPTIONS') { res.status(204).send(''); return; }

  const { amount, description } = req.body as { amount: number; description: string };
  const order = await razorpay.orders.create({
    amount, // paise
    currency: 'INR',
    receipt: `polymind_${Date.now()}`,
    notes: { description },
  });
  res.json({ orderId: order.id });
});

// Verify payment + record purchase in Firestore
export const verifyPayment = functions.https.onRequest(async (req, res) => {
  res.set('Access-Control-Allow-Origin', '*');
  if (req.method === 'OPTIONS') { res.status(204).send(''); return; }

  const { paymentId, orderId, signature, userId, moduleId } = req.body as {
    paymentId: string; orderId: string; signature: string;
    userId: string; moduleId: string | 'lifetime';
  };

  // Verify signature
  const secret = process.env.RAZORPAY_KEY_SECRET || '';
  const body = `${orderId}|${paymentId}`;
  const expectedSig = crypto.createHmac('sha256', secret).update(body).digest('hex');
  if (expectedSig !== signature) {
    res.status(400).json({ error: 'Invalid signature' });
    return;
  }

  // Record in Firestore
  await db.collection('users').doc(userId).collection('purchases').add({
    moduleId,
    paymentId,
    orderId,
    amount: req.body.amount,
    purchasedAt: admin.firestore.FieldValue.serverTimestamp(),
  });

  // Update user document
  if (moduleId === 'lifetime') {
    await db.collection('users').doc(userId).set(
      { hasLifetimeAccess: true },
      { merge: true }
    );
  } else {
    await db.collection('users').doc(userId).set(
      { purchasedModules: admin.firestore.FieldValue.arrayUnion(moduleId) },
      { merge: true }
    );
  }

  res.json({ success: true });
});

// Razorpay checkout options
interface RazorpayOptions {
  orderId: string;          // from backend
  amount: number;           // in paise (₹99 = 9900, ₹999 = 99900)
  currency: 'INR';
  description: string;
  userName: string;
  userEmail: string;
  onSuccess: (paymentId: string, orderId: string, signature: string) => void;
  onFailure: (error: unknown) => void;
}

declare global {
  interface Window {
    Razorpay: new (options: Record<string, unknown>) => { open(): void };
  }
}

export async function openRazorpayCheckout(options: RazorpayOptions): Promise<void> {
  const rzp = new window.Razorpay({
    key: import.meta.env.VITE_RAZORPAY_KEY_ID || '',
    amount: options.amount,
    currency: options.currency,
    order_id: options.orderId,
    name: 'Polymind',
    description: options.description,
    image: '/icons/icon-192.png',
    handler: function(response: { razorpay_payment_id: string; razorpay_order_id: string; razorpay_signature: string }) {
      options.onSuccess(
        response.razorpay_payment_id,
        response.razorpay_order_id,
        response.razorpay_signature
      );
    },
    prefill: {
      name: options.userName,
      email: options.userEmail,
    },
    theme: { color: '#F59E0B' },
    modal: {
      ondismiss: () => options.onFailure(new Error('Payment dismissed')),
    },
  });
  rzp.open();
}

// Call Firebase Cloud Function to create a Razorpay order
export async function createRazorpayOrder(amount: number, description: string): Promise<string> {
  const functionsUrl = import.meta.env.VITE_FIREBASE_FUNCTIONS_URL || '';
  const response = await fetch(`${functionsUrl}/createOrder`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ amount, description }),
  });
  if (!response.ok) throw new Error('Failed to create order');
  const data = await response.json() as { orderId: string };
  return data.orderId;
}

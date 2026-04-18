import { Link } from 'react-router-dom';
import { PolymindLogo } from '@/components/brand';

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-10">
      <h2 className="text-lg font-semibold text-amber-400 mb-3 pb-2 border-b border-white/10">
        {title}
      </h2>
      <div className="space-y-3 text-gray-300 leading-relaxed text-sm">{children}</div>
    </section>
  );
}

export function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      {/* Header */}
      <header className="border-b border-white/10 px-6 py-4">
        <div className="max-w-3xl mx-auto flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2.5">
            <PolymindLogo size="sm" variant="simple" />
            <span className="font-display text-lg font-bold tracking-wider text-white">POLYMIND</span>
          </Link>
          <Link to="/" className="text-sm text-gray-400 hover:text-white transition">
            &larr; Back to Home
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-3xl mx-auto px-6 py-12">
        <div className="mb-10">
          <h1 className="text-3xl font-display font-bold text-white mb-2">Privacy Policy</h1>
          <p className="text-gray-400 text-sm">Last updated: April 2026</p>
          <p className="text-gray-400 text-sm mt-1">
            Trinetry Infotech Pvt Ltd &mdash; 206 Gulmohar Center Point, Viman Nagar, Pune 411014, Maharashtra, India
          </p>
        </div>

        <Section title="1. Introduction">
          <p>
            Trinetry Infotech Pvt Ltd (&ldquo;Company,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) operates Polymind
            (&ldquo;Platform&rdquo;), available at polymind.app. We are committed to protecting your personal
            information in accordance with the Information Technology Act, 2000 (&ldquo;IT Act&rdquo;) and the
            Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data
            or Information) Rules, 2011 (&ldquo;SPDI Rules&rdquo;).
          </p>
          <p>
            This Privacy Policy explains what information we collect, how we use it, and your rights
            regarding your personal data. By using Polymind, you consent to the practices described in
            this Policy.
          </p>
        </Section>

        <Section title="2. Information We Collect">
          <p><strong className="text-white">2.1 Account &amp; Profile Information</strong></p>
          <ul className="list-disc list-inside space-y-1 pl-2">
            <li>Full name and display name</li>
            <li>Email address</li>
            <li>Profile preferences and onboarding responses</li>
          </ul>

          <p className="mt-3"><strong className="text-white">2.2 Payment Information</strong></p>
          <p>
            When you make a purchase (per-module or lifetime access), payment is processed by Razorpay.
            We do not store your credit/debit card numbers, CVV, or bank account details on our servers.
            We receive and store order identifiers, transaction status, and purchase metadata (module
            purchased, amount, date) from Razorpay.
          </p>

          <p className="mt-3"><strong className="text-white">2.3 Usage &amp; Learning Data</strong></p>
          <ul className="list-disc list-inside space-y-1 pl-2">
            <li>Lessons completed, XP earned, streaks, and level progress</li>
            <li>Flashcard review history and spaced-repetition intervals</li>
            <li>Achievement badges and challenge records</li>
            <li>Bookmarks and starred cards</li>
          </ul>

          <p className="mt-3"><strong className="text-white">2.4 Technical &amp; Device Information</strong></p>
          <ul className="list-disc list-inside space-y-1 pl-2">
            <li>IP address, browser type, and operating system</li>
            <li>Device identifiers and time zone</li>
            <li>Pages visited, navigation paths, and session duration</li>
          </ul>

          <p className="mt-3"><strong className="text-white">2.5 Cookies &amp; Local Storage</strong></p>
          <p>
            We use browser localStorage to persist your learning progress, settings, and preferences
            locally on your device (prefixed <code className="text-amber-400 bg-white/5 px-1 rounded">gyanmarg-*</code>).
            We may also use cookies for session management and analytics. You may disable cookies via
            your browser settings, though some Platform features may be affected.
          </p>
        </Section>

        <Section title="3. How We Use Your Information">
          <p>We use the information we collect for the following purposes:</p>
          <ul className="list-disc list-inside space-y-1 pl-2">
            <li>Creating and managing your Polymind account</li>
            <li>Delivering the learning Platform and personalising your experience</li>
            <li>Processing payments and managing access to purchased content</li>
            <li>Sending transactional communications (purchase receipts, refund confirmations)</li>
            <li>Sending push notifications and reminders, subject to your consent</li>
            <li>Improving the Platform through analytics and usage patterns</li>
            <li>Complying with applicable laws and resolving disputes</li>
          </ul>
          <p className="mt-3">
            We will not use your personal data for automated decision-making that produces legal or
            similarly significant effects without your explicit consent.
          </p>
        </Section>

        <Section title="4. Sharing of Information with Third Parties">
          <p>
            We do not sell, rent, or trade your personal information. We share data only with the
            following categories of third parties:
          </p>

          <p className="mt-3"><strong className="text-white">4.1 Razorpay (Payment Processor)</strong></p>
          <p>
            Payment transactions are processed by Razorpay Software Pvt Ltd. Razorpay may collect
            and process your payment details, billing address, and transaction information in
            accordance with their own Privacy Policy (razorpay.com/privacy). Razorpay is a PCI-DSS
            compliant payment gateway.
          </p>

          <p className="mt-3"><strong className="text-white">4.2 Firebase / Google (Cloud Infrastructure)</strong></p>
          <p>
            We use Google Firebase for authentication and backend services. Your account data may be
            processed on Google&rsquo;s infrastructure in accordance with Google&rsquo;s Privacy Policy and
            applicable data processing agreements. Google Firebase operates data centres globally,
            including in India.
          </p>

          <p className="mt-3"><strong className="text-white">4.3 Analytics Providers</strong></p>
          <p>
            We may use analytics tools to understand aggregate usage patterns. These tools collect
            anonymised or pseudonymised data and are prohibited from using it for their own advertising
            purposes.
          </p>

          <p className="mt-3"><strong className="text-white">4.4 Legal Requirements</strong></p>
          <p>
            We may disclose your information if required to do so by law, court order, or government
            authority, or to protect the rights, property, or safety of the Company, our users, or
            the public.
          </p>
        </Section>

        <Section title="5. Data Retention">
          <p>
            We retain your personal data for as long as your account is active and for a reasonable
            period thereafter to comply with legal obligations, resolve disputes, and enforce our
            agreements. Specifically:
          </p>
          <ul className="list-disc list-inside space-y-1 pl-2">
            <li>Account data: retained while your account is active, plus 2 years after deletion</li>
            <li>Payment records: retained for 7 years as required under Indian accounting and tax laws</li>
            <li>Usage and learning data: retained for the duration of your account</li>
            <li>Technical logs: retained for up to 90 days</li>
          </ul>
          <p className="mt-3">
            You may request deletion of your account and personal data by contacting us at
            yogesh.sahu@trinetryinfotech.com. Note that we may retain records required by law.
          </p>
        </Section>

        <Section title="6. Data Security">
          <p>
            We implement reasonable security practices and procedures as required under the SPDI Rules
            2011, including:
          </p>
          <ul className="list-disc list-inside space-y-1 pl-2">
            <li>HTTPS/TLS encryption for all data in transit</li>
            <li>Access controls limiting personnel access to personal data on a need-to-know basis</li>
            <li>Use of reputable cloud infrastructure (Google Cloud) with industry-standard security</li>
            <li>Payment data handled exclusively by PCI-DSS compliant Razorpay; not stored on our servers</li>
          </ul>
          <p className="mt-3">
            Despite these measures, no system is entirely secure. In the event of a data breach that
            affects your rights, we will notify you and relevant authorities as required by applicable law.
          </p>
        </Section>

        <Section title="7. Your Rights">
          <p>You have the following rights regarding your personal data:</p>
          <ul className="list-disc list-inside space-y-1 pl-2">
            <li><strong className="text-white">Access:</strong> Request a copy of the personal data we hold about you</li>
            <li><strong className="text-white">Correction:</strong> Request correction of inaccurate or incomplete data</li>
            <li><strong className="text-white">Deletion:</strong> Request deletion of your account and associated personal data</li>
            <li><strong className="text-white">Withdrawal of Consent:</strong> Withdraw consent for processing where consent is the legal basis</li>
            <li><strong className="text-white">Opt-Out of Communications:</strong> Unsubscribe from marketing communications at any time</li>
          </ul>
          <p className="mt-3">
            To exercise any of these rights, please contact our Grievance Officer (see Section 9).
            We will respond within 30 days of receiving your request.
          </p>
        </Section>

        <Section title="8. Children's Privacy">
          <p>
            Polymind is not directed at children under 13 years of age. We do not knowingly collect
            personal information from children under 13. If you believe we have inadvertently collected
            such information, please contact us immediately and we will delete it promptly.
          </p>
        </Section>

        <Section title="9. Grievance Officer">
          <p>
            In accordance with the IT Act 2000 and SPDI Rules 2011, the following person has been
            designated as our Grievance Officer to address complaints and concerns regarding the
            processing of personal data:
          </p>
          <div className="bg-white/5 border border-white/10 rounded-xl p-4 mt-3">
            <p className="text-white font-medium">Yogesh Sahu</p>
            <p className="text-gray-300 mt-1">Grievance Officer &mdash; Trinetry Infotech Pvt Ltd</p>
            <p className="mt-2">
              <strong className="text-white">Email:</strong>{' '}
              <a href="mailto:yogesh.sahu@trinetryinfotech.com" className="text-amber-400 hover:text-amber-300 transition">
                yogesh.sahu@trinetryinfotech.com
              </a>
            </p>
            <p className="mt-1">
              <strong className="text-white">Address:</strong> 206 Gulmohar Center Point, Viman Nagar, Pune 411014, Maharashtra, India
            </p>
            <p className="mt-2 text-gray-400 text-xs">
              We will acknowledge your complaint within 48 hours and endeavour to resolve it within 30 days.
            </p>
          </div>
        </Section>

        <Section title="10. Cookies Policy">
          <p>
            We use the following types of cookies and browser storage:
          </p>
          <ul className="list-disc list-inside space-y-1 pl-2">
            <li><strong className="text-white">Essential cookies:</strong> Required for the Platform to function (authentication sessions)</li>
            <li><strong className="text-white">Analytics cookies:</strong> Help us understand how users interact with the Platform (anonymised)</li>
            <li><strong className="text-white">localStorage:</strong> Stores your learning progress, settings, and preferences locally on your device</li>
          </ul>
          <p className="mt-3">
            You can control cookie settings through your browser. Clearing localStorage will reset your
            locally stored progress. Please note that progress synced to your account (via Firebase) will
            not be affected.
          </p>
        </Section>

        <Section title="11. Changes to This Policy">
          <p>
            We may update this Privacy Policy from time to time. We will notify you of material changes
            by posting the updated policy on this page and, where appropriate, sending an email notification.
            The &ldquo;Last updated&rdquo; date at the top of this page reflects the most recent revision.
            Continued use of Polymind after changes are posted constitutes your acceptance of the revised
            policy.
          </p>
        </Section>

        <Section title="12. Governing Law">
          <p>
            This Privacy Policy is governed by the laws of the Republic of India. Any disputes arising
            under this Policy shall be subject to the exclusive jurisdiction of the courts in Pune,
            Maharashtra, India.
          </p>
        </Section>

        {/* Footer links */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-wrap gap-4 text-sm text-gray-500">
          <Link to="/" className="hover:text-gray-300 transition">Home</Link>
          <Link to="/terms" className="hover:text-gray-300 transition">Terms of Service</Link>
          <span>Trinetry Infotech Pvt Ltd &copy; {new Date().getFullYear()}</span>
        </div>
      </main>
    </div>
  );
}

export default PrivacyPolicy;

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

export function TermsOfService() {
  return (
    <div className="min-h-screen bg-[#0A0A0B] text-white">
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
          <h1 className="text-3xl font-display font-bold text-white mb-2">Terms of Service</h1>
          <p className="text-gray-400 text-sm">Last updated: April 2026</p>
          <p className="text-gray-400 text-sm mt-1">
            Trinetry Infotech Pvt Ltd &mdash; 206 Gulmohar Center Point, Viman Nagar, Pune 411014, Maharashtra, India
          </p>
        </div>

        <Section title="1. Acceptance of Terms">
          <p>
            These Terms of Service (&ldquo;Terms&rdquo;) constitute a legally binding agreement between you
            (&ldquo;User,&rdquo; &ldquo;you,&rdquo; or &ldquo;your&rdquo;) and Trinetry Infotech Pvt Ltd (&ldquo;Company,&rdquo; &ldquo;we,&rdquo;
            &ldquo;us,&rdquo; or &ldquo;our&rdquo;), governing your access to and use of the Polymind learning platform
            (&ldquo;Platform&rdquo; or &ldquo;Service&rdquo;), available at polymind.app.
          </p>
          <p>
            By creating an account, accessing, or using Polymind, you confirm that you have read,
            understood, and agree to be bound by these Terms and our{' '}
            <Link to="/privacy" className="text-amber-400 hover:text-amber-300 transition">Privacy Policy</Link>.
            If you do not agree to these Terms, please do not use the Platform.
          </p>
          <p>
            If you are accessing the Platform on behalf of an organisation, you represent that you
            have the authority to bind that organisation to these Terms.
          </p>
        </Section>

        <Section title="2. Service Description">
          <p>
            Polymind is a gamified digital learning platform that transforms books and knowledge into
            interactive learning experiences. The Platform provides:
          </p>
          <ul className="list-disc list-inside space-y-1 pl-2">
            <li>Structured learning pathways across 76 knowledge modules spanning 14 categories</li>
            <li>Lesson content with quizzes, reflections, and challenges</li>
            <li>Spaced-repetition flashcard review system</li>
            <li>Gamification features including XP, levels, achievements, streaks, and leaderboards</li>
            <li>Progress tracking and personalised learning recommendations</li>
          </ul>
          <p className="mt-3">
            We reserve the right to modify, suspend, or discontinue any aspect of the Service at any
            time with reasonable notice where practicable, subject to our refund obligations.
          </p>
        </Section>

        <Section title="3. Account Registration">
          <p>
            To access most features of the Platform, you must create an account. You agree to:
          </p>
          <ul className="list-disc list-inside space-y-1 pl-2">
            <li>Provide accurate, current, and complete registration information</li>
            <li>Maintain the security of your account credentials</li>
            <li>Promptly update your information if it changes</li>
            <li>Notify us immediately of any unauthorised use of your account</li>
            <li>Not share your account with any third party</li>
          </ul>
          <p className="mt-3">
            You are responsible for all activity that occurs under your account. We are not liable for
            any loss arising from unauthorised use of your account.
          </p>
        </Section>

        <Section title="4. Pricing and Payment">
          <p>Polymind offers the following access tiers:</p>

          <div className="space-y-4 mt-3">
            <div className="bg-white/5 border border-white/10 rounded-xl p-4">
              <p className="text-white font-medium">Free Tier</p>
              <p className="text-gray-400 mt-1">
                Access to introductory lessons and limited content across all modules. No payment required.
              </p>
            </div>

            <div className="bg-amber-500/5 border border-amber-500/20 rounded-xl p-4">
              <p className="text-white font-medium">Per-Module Access &mdash; &#8377;99 (one-time)</p>
              <p className="text-gray-400 mt-1">
                A single one-time payment of &#8377;99 unlocks permanent, lifetime access to all content
                within a specific module. The purchase is non-subscription and does not auto-renew.
              </p>
            </div>

            <div className="bg-amber-500/5 border border-amber-500/20 rounded-xl p-4">
              <p className="text-white font-medium">Lifetime Access &mdash; &#8377;999 (one-time)</p>
              <p className="text-gray-400 mt-1">
                A single one-time payment of &#8377;999 unlocks permanent, lifetime access to all current
                and future modules on the Platform. The purchase is non-subscription and does not auto-renew.
              </p>
            </div>
          </div>

          <p className="mt-4">
            All prices are in Indian Rupees (INR) and include applicable taxes. Prices are subject to
            change with 30 days&rsquo; notice, but any change will not affect purchases already made.
          </p>
        </Section>

        <Section title="5. Payment Processing">
          <p>
            All payment transactions are processed securely by Razorpay Software Pvt Ltd
            (&ldquo;Razorpay&rdquo;), a PCI-DSS compliant payment gateway. By making a purchase, you also agree
            to Razorpay&rsquo;s Terms of Service and Privacy Policy, available at razorpay.com/terms.
          </p>
          <p>
            We do not store your payment card details. Razorpay handles all card data in accordance
            with applicable security standards.
          </p>
          <p>
            In the event of a payment dispute or failed transaction, please contact us at
            yogesh.sahu@trinetryinfotech.com. We will work with Razorpay to resolve the issue
            promptly.
          </p>
        </Section>

        <Section title="6. Refund Policy">
          <div className="bg-white/5 border border-amber-500/30 rounded-xl p-4">
            <p className="text-white font-semibold text-base mb-2">21-Day Money-Back Guarantee</p>
            <p>
              We stand behind the quality of our content. If you are not satisfied with your purchase
              for any reason, you may request a full refund within <strong className="text-white">21 days</strong> of
              the original purchase date. No questions asked.
            </p>
          </div>

          <p className="mt-4"><strong className="text-white">How to Request a Refund:</strong></p>
          <ul className="list-disc list-inside space-y-1 pl-2">
            <li>
              Email{' '}
              <a href="mailto:yogesh.sahu@trinetryinfotech.com" className="text-amber-400 hover:text-amber-300 transition">
                yogesh.sahu@trinetryinfotech.com
              </a>{' '}
              with the subject line &ldquo;Refund Request&rdquo;
            </li>
            <li>Include your registered email address and the order/transaction ID from Razorpay</li>
            <li>Refunds will be credited to the original payment method within 5&ndash;10 business days, subject to Razorpay&rsquo;s processing timelines</li>
          </ul>

          <p className="mt-3"><strong className="text-white">Conditions:</strong></p>
          <ul className="list-disc list-inside space-y-1 pl-2">
            <li>Refund requests must be submitted within 21 days of purchase</li>
            <li>Requests submitted after 21 days will not be eligible for a refund</li>
            <li>Upon refund processing, access to the purchased module(s) will be revoked</li>
            <li>In cases of misuse or fraud, we reserve the right to decline a refund request</li>
          </ul>
        </Section>

        <Section title="7. Intellectual Property">
          <p>
            All content on the Platform, including but not limited to lesson texts, quiz questions,
            flashcards, course structures, graphics, logos, and software code, is owned by or licensed
            to Trinetry Infotech Pvt Ltd and is protected by applicable intellectual property laws,
            including the Copyright Act, 1957 (India).
          </p>
          <p>
            Your purchase of module access grants you a personal, non-exclusive, non-transferable,
            revocable licence to access and use the content for your own personal, non-commercial
            learning purposes. You may not:
          </p>
          <ul className="list-disc list-inside space-y-1 pl-2">
            <li>Copy, reproduce, or distribute Platform content outside the Platform</li>
            <li>Create derivative works based on Platform content without written permission</li>
            <li>Use Platform content for commercial purposes</li>
            <li>Reverse-engineer or scrape the Platform</li>
            <li>Share your account access with others</li>
          </ul>
          <p className="mt-3">
            The &ldquo;Polymind&rdquo; name, logo, and associated trademarks are the property of Trinetry
            Infotech Pvt Ltd. Unauthorised use is strictly prohibited.
          </p>
        </Section>

        <Section title="8. User Conduct and Prohibited Activities">
          <p>By using Polymind, you agree not to:</p>
          <ul className="list-disc list-inside space-y-1 pl-2">
            <li>Use the Platform for any unlawful purpose or in violation of applicable laws</li>
            <li>Attempt to gain unauthorised access to any part of the Platform or its related systems</li>
            <li>Circumvent or attempt to circumvent any content-access controls or payment mechanisms</li>
            <li>Upload or transmit viruses, malware, or other harmful code</li>
            <li>Harass, abuse, or harm other users</li>
            <li>Impersonate any person or entity</li>
            <li>Engage in any activity that disrupts or interferes with the Platform&rsquo;s operation</li>
            <li>Collect or harvest personal data of other users</li>
            <li>Use automated scripts or bots to access the Platform</li>
          </ul>
          <p className="mt-3">
            We reserve the right to suspend or terminate accounts that violate these Terms without
            notice and without refund where the violation is material.
          </p>
        </Section>

        <Section title="9. Disclaimer of Warranties">
          <p>
            The Platform is provided on an &ldquo;as is&rdquo; and &ldquo;as available&rdquo; basis without warranties of
            any kind, whether express or implied, including but not limited to warranties of
            merchantability, fitness for a particular purpose, or non-infringement.
          </p>
          <p>
            We do not warrant that the Platform will be uninterrupted, error-free, or free of viruses
            or other harmful components. The educational content on the Platform is provided for
            informational purposes only and does not constitute professional advice.
          </p>
        </Section>

        <Section title="10. Limitation of Liability">
          <p>
            To the fullest extent permitted by applicable law, Trinetry Infotech Pvt Ltd, its
            directors, employees, and agents shall not be liable for:
          </p>
          <ul className="list-disc list-inside space-y-1 pl-2">
            <li>Any indirect, incidental, special, consequential, or punitive damages</li>
            <li>Loss of profits, data, goodwill, or other intangible losses</li>
            <li>Damages resulting from your use of or inability to use the Platform</li>
            <li>Unauthorised access to or alteration of your data</li>
          </ul>
          <p className="mt-3">
            In any event, our total aggregate liability to you for all claims arising from or relating
            to the Platform shall not exceed the amount you paid us in the 12 months preceding the
            claim or &#8377;999, whichever is less.
          </p>
        </Section>

        <Section title="11. Indemnification">
          <p>
            You agree to indemnify, defend, and hold harmless Trinetry Infotech Pvt Ltd and its
            officers, directors, employees, and agents from and against any claims, liabilities,
            damages, losses, and expenses (including reasonable legal fees) arising out of or in any
            way connected with your access to or use of the Platform, your violation of these Terms,
            or your violation of any third-party rights.
          </p>
        </Section>

        <Section title="12. Termination">
          <p>
            You may terminate your account at any time by contacting us at
            yogesh.sahu@trinetryinfotech.com. We will delete your account data in accordance with
            our Privacy Policy.
          </p>
          <p>
            We may suspend or terminate your access to the Platform immediately, with or without
            notice, for conduct that we believe violates these Terms or is harmful to other users,
            the Company, third parties, or the public, or for any other reason at our sole discretion.
          </p>
          <p>
            Upon termination, your right to use the Platform ceases. Provisions that by their nature
            should survive termination (including intellectual property, limitation of liability, and
            governing law) will survive.
          </p>
        </Section>

        <Section title="13. Governing Law and Dispute Resolution">
          <p>
            These Terms are governed by and construed in accordance with the laws of the Republic of
            India, without regard to conflict-of-law principles.
          </p>
          <p>
            Any dispute, controversy, or claim arising out of or relating to these Terms, or the
            breach, termination, or validity thereof, shall first be attempted to be resolved
            amicably through good-faith negotiations. Either party may initiate negotiations by
            sending written notice to the other.
          </p>
          <p>
            If the dispute cannot be resolved within 30 days of such notice, it shall be subject to
            the exclusive jurisdiction of the competent courts in Pune, Maharashtra, India.
          </p>
        </Section>

        <Section title="14. Changes to These Terms">
          <p>
            We reserve the right to modify these Terms at any time. We will provide at least 14 days&rsquo;
            notice of material changes by posting the updated Terms on this page and, where appropriate,
            notifying you by email. The &ldquo;Last updated&rdquo; date at the top of this page will reflect the
            most recent revision.
          </p>
          <p>
            Your continued use of the Platform after the effective date of any changes constitutes
            your acceptance of the revised Terms. If you do not agree to the revised Terms, please
            stop using the Platform and contact us to close your account.
          </p>
        </Section>

        <Section title="15. Contact Us">
          <p>
            For questions, concerns, or disputes relating to these Terms, or to request a refund,
            please contact:
          </p>
          <div className="bg-white/5 border border-white/10 rounded-xl p-4 mt-3">
            <p className="text-white font-medium">Trinetry Infotech Pvt Ltd</p>
            <p className="text-gray-300 mt-1">206 Gulmohar Center Point, Viman Nagar, Pune 411014, Maharashtra, India</p>
            <p className="mt-2">
              <strong className="text-white">Email:</strong>{' '}
              <a href="mailto:yogesh.sahu@trinetryinfotech.com" className="text-amber-400 hover:text-amber-300 transition">
                yogesh.sahu@trinetryinfotech.com
              </a>
            </p>
          </div>
        </Section>

        {/* Footer links */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-wrap gap-4 text-sm text-gray-500">
          <Link to="/" className="hover:text-gray-300 transition">Home</Link>
          <Link to="/privacy" className="hover:text-gray-300 transition">Privacy Policy</Link>
          <span>Trinetry Infotech Pvt Ltd &copy; {new Date().getFullYear()}</span>
        </div>
      </main>
    </div>
  );
}

export default TermsOfService;

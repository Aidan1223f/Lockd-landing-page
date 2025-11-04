import { Link } from "react-router-dom";

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-gradient-hero">
      <div className="container mx-auto px-6 py-16 max-w-4xl">
        <div className="bg-card/90 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-border/30 shadow-xl">
          <Link 
            to="/" 
            className="inline-flex items-center text-primary hover:text-primary/80 mb-8 transition-colors"
          >
            ← Back to Home
          </Link>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Terms of Service - Lockd
          </h1>
          <p className="text-muted-foreground mb-8">Last Updated: {new Date().toLocaleDateString()}</p>

          <div className="prose prose-invert max-w-none space-y-6 text-foreground">
            <section>
              <h2 className="text-2xl font-semibold mt-8 mb-4">1. Acceptance of Terms</h2>
              <p>By using Lockd ("Service"), you agree to these Terms of Service. If you don't agree, please don't use the Service.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mt-8 mb-4">2. Service Description</h2>
              <p>Lockd is an accountability platform that helps users achieve their goals by:</p>
              <ul className="list-disc ml-6 space-y-2">
                <li>Setting personal challenges with financial accountability</li>
                <li>Designating accountability partners to receive penalty payments</li>
                <li>Processing payments automatically when goals are not met</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mt-8 mb-4">3. Eligibility</h2>
              <p>You must be:</p>
              <ul className="list-disc ml-6 space-y-2">
                <li>At least 18 years old</li>
                <li>Located in the United States</li>
                <li>Able to form a legally binding contract</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mt-8 mb-4">4. Account Registration</h2>
              
              <h3 className="text-xl font-semibold mt-6 mb-3">For Challenge Creators:</h3>
              <ul className="list-disc ml-6 space-y-2">
                <li>You must provide accurate payment information</li>
                <li>You authorize us to charge your payment method for failed challenges</li>
                <li>You're responsible for keeping your account secure</li>
              </ul>

              <h3 className="text-xl font-semibold mt-6 mb-3">For Accountability Partners (Recipients):</h3>
              <ul className="list-disc ml-6 space-y-2">
                <li>You must provide accurate identity information (SSN last 4, DOB, address)</li>
                <li>This is required by federal law for payment processing</li>
                <li>We use Stripe to securely process and verify your information</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mt-8 mb-4">5. Payment Processing</h2>
              
              <h3 className="text-xl font-semibold mt-6 mb-3">Charges:</h3>
              <ul className="list-disc ml-6 space-y-2">
                <li>When you fail a challenge, we automatically charge your payment method</li>
                <li><strong>Payment processing fees (~$0.60 per $10 transaction) are added to the charge</strong></li>
                <li>Example: $10 penalty = $10.59 total charge</li>
                <li>You receive penalty amount, we pass Stripe fees to you</li>
              </ul>

              <h3 className="text-xl font-semibold mt-6 mb-3">Payouts:</h3>
              <ul className="list-disc ml-6 space-y-2">
                <li>Recipients receive the full penalty amount (e.g., $10)</li>
                <li><strong>Standard payouts are free and take 2-3 business days</strong></li>
                <li>Funds are sent to your linked debit card or bank account</li>
                <li>We use Stripe Connect for secure, compliant payouts</li>
              </ul>

              <h3 className="text-xl font-semibold mt-6 mb-3">Payment Service Provider:</h3>
              <ul className="list-disc ml-6 space-y-2">
                <li>All payment processing is handled by Stripe, Inc.</li>
                <li>By using the Service, you agree to Stripe's <a href="https://stripe.com/connect-account/legal" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Connected Account Agreement</a></li>
                <li>We never store your full credit card or bank account details</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mt-8 mb-4">6. Fees and Charges</h2>
              
              <h3 className="text-xl font-semibold mt-6 mb-3">Transaction Fees:</h3>
              <ul className="list-disc ml-6 space-y-2">
                <li>Stripe charges 2.9% + $0.30 per transaction</li>
                <li><strong>These fees are passed directly to the challenge creator (User A)</strong></li>
                <li>Example: $10 penalty → User A pays $10.59 → Recipient gets $10.00</li>
              </ul>

              <h3 className="text-xl font-semibold mt-6 mb-3">Payout Fees:</h3>
              <ul className="list-disc ml-6 space-y-2">
                <li><strong>Standard payouts (2-3 days): FREE</strong></li>
                <li>Instant payouts (if offered): 1.5% of payout amount</li>
                <li>We default to free standard payouts to save you money</li>
              </ul>

              <h3 className="text-xl font-semibold mt-6 mb-3">Platform Fees:</h3>
              <ul className="list-disc ml-6 space-y-2">
                <li>Currently, we charge <strong>no platform fee</strong></li>
                <li>We may introduce premium features or subscriptions in the future</li>
                <li>We'll notify you 30 days before any fee changes</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mt-8 mb-4">7. Refund Policy</h2>
              <p><strong>All penalty payments are final and non-refundable</strong> because:</p>
              <ul className="list-disc ml-6 space-y-2">
                <li>The purpose is accountability</li>
                <li>Payments are automatically processed</li>
                <li>Recipients rely on these payments</li>
              </ul>
              <p className="mt-4"><strong>Exceptions:</strong> We may issue refunds only for:</p>
              <ul className="list-disc ml-6 space-y-2">
                <li>Technical errors on our part</li>
                <li>Unauthorized transactions (report within 48 hours)</li>
                <li>Service violations by the recipient</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mt-8 mb-4">8. Identity Verification & Tax Compliance</h2>
              
              <h3 className="text-xl font-semibold mt-6 mb-3">Required Information:</h3>
              <p>Recipients must provide:</p>
              <ul className="list-disc ml-6 space-y-2">
                <li>Full legal name</li>
                <li>Social Security Number (last 4 digits)</li>
                <li>Date of birth</li>
                <li>Home address</li>
                <li>Debit card or bank account</li>
              </ul>

              <h3 className="text-xl font-semibold mt-6 mb-3">Why We Collect This:</h3>
              <ul className="list-disc ml-6 space-y-2">
                <li>Federal law requires identity verification for payment processors</li>
                <li>IRS requires 1099-K forms for users earning $600+ per year</li>
                <li>Prevents fraud and money laundering</li>
              </ul>

              <h3 className="text-xl font-semibold mt-6 mb-3">Tax Reporting:</h3>
              <ul className="list-disc ml-6 space-y-2">
                <li>If you receive $600+ in a calendar year, we'll send you a 1099-K form</li>
                <li>You're responsible for reporting income on your tax return</li>
                <li>Stripe handles 1099-K filing on our behalf</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mt-8 mb-4">9. Prohibited Uses</h2>
              <p>You may NOT:</p>
              <ul className="list-disc ml-6 space-y-2">
                <li>Use the Service for illegal activities</li>
                <li>Create fake challenges to transfer money</li>
                <li>Harass or abuse other users</li>
                <li>Attempt to defraud the payment system</li>
                <li>Use stolen payment methods</li>
                <li>Violate any laws or regulations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mt-8 mb-4">10. Privacy & Data Security</h2>
              <p>See our full <Link to="/privacy" className="text-primary hover:underline">Privacy Policy</Link> for details.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mt-8 mb-4">11. User Responsibilities</h2>
              
              <h3 className="text-xl font-semibold mt-6 mb-3">Challenge Creators:</h3>
              <ul className="list-disc ml-6 space-y-2">
                <li>Set realistic, achievable goals</li>
                <li>Ensure sufficient funds for potential charges</li>
                <li>Choose trustworthy accountability partners</li>
                <li>Notify us immediately of unauthorized charges</li>
              </ul>

              <h3 className="text-xl font-semibold mt-6 mb-3">Recipients:</h3>
              <ul className="list-disc ml-6 space-y-2">
                <li>Provide accurate identity information</li>
                <li>Report any issues with payouts promptly</li>
                <li>Maintain a valid debit card or bank account</li>
                <li>Report income for tax purposes</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mt-8 mb-4">12. Termination</h2>
              
              <h3 className="text-xl font-semibold mt-6 mb-3">You Can:</h3>
              <ul className="list-disc ml-6 space-y-2">
                <li>Delete your account at any time</li>
                <li>Stop using the Service whenever you want</li>
                <li>Pending charges will still be processed</li>
              </ul>

              <h3 className="text-xl font-semibold mt-6 mb-3">We Can:</h3>
              <ul className="list-disc ml-6 space-y-2">
                <li>Suspend or terminate accounts for violations</li>
                <li>Close accounts involved in fraud</li>
                <li>Discontinue the Service with 30 days notice</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mt-8 mb-4">13. Dispute Resolution</h2>
              
              <h3 className="text-xl font-semibold mt-6 mb-3">Process:</h3>
              <ol className="list-decimal ml-6 space-y-2">
                <li>Contact support: <a href="mailto:support@getlockd.app" className="text-primary hover:underline">support@getlockd.app</a></li>
                <li>We'll respond within 48 hours</li>
                <li>We'll work to resolve disputes fairly</li>
              </ol>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mt-8 mb-4">14. Limitation of Liability</h2>
              <p>TO THE MAXIMUM EXTENT PERMITTED BY LAW:</p>
              <ul className="list-disc ml-6 space-y-2">
                <li>We're not liable for indirect, incidental, or consequential damages</li>
                <li>Our total liability is limited to $100 or the fees you paid, whichever is greater</li>
                <li>We're not responsible for disputes between users</li>
                <li>We're not liable for Stripe's actions or errors</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mt-8 mb-4">15. Changes to Terms</h2>
              <ul className="list-disc ml-6 space-y-2">
                <li>We may update these Terms at any time</li>
                <li>We'll notify you 30 days before material changes</li>
                <li>Continued use means you accept the new Terms</li>
                <li>If you don't agree, stop using the Service</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mt-8 mb-4">16. Contact Us</h2>
              <p><strong>Email:</strong> <a href="mailto:support@getlockd.app" className="text-primary hover:underline">support@getlockd.app</a></p>
              <p><strong>Website:</strong> <a href="https://getlockd.app" className="text-primary hover:underline">https://getlockd.app</a></p>
            </section>

            <section className="mt-12 p-6 bg-card/50 rounded-lg border border-border/30">
              <h2 className="text-2xl font-semibold mb-4">Key Points Summary (Plain English)</h2>
              
              <p className="font-semibold mt-4">✅ What you're agreeing to:</p>
              <ul className="list-disc ml-6 space-y-2">
                <li>Lockd helps you stay accountable with financial penalties</li>
                <li>When you fail a challenge, we charge your card automatically</li>
                <li>You pay the penalty + processing fees (~$0.60 per $10)</li>
                <li>Your accountability partner gets the full penalty amount</li>
              </ul>

              <p className="font-semibold mt-4">✅ Fees:</p>
              <ul className="list-disc ml-6 space-y-2">
                <li>Processing fee: ~$0.60 per $10 transaction (passed to you, not us)</li>
                <li>Standard payouts: FREE (2-3 business days)</li>
                <li>Platform fee: $0 (for now)</li>
              </ul>

              <p className="font-semibold mt-4">✅ Refunds:</p>
              <ul className="list-disc ml-6 space-y-2">
                <li>Penalty payments are non-refundable (that's the point!)</li>
                <li>Exceptions for technical errors or fraud</li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;


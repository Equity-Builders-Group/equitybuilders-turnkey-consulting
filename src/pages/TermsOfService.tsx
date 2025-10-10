import Footer from "@/components/Footer";

const TermsOfService = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header Section */}
      <section className="bg-gradient-primary relative overflow-hidden py-12 md:py-16">
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'url(/lovable-uploads/4a2cd88c-1e89-4f93-a9e5-ccb59cbce7a6.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        
        <div className="container relative z-10 mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-black text-white text-center drop-shadow-lg">
            Terms of Service
          </h1>
        </div>
      </section>

      {/* Content Section - White Background */}
      <section className="flex-1 bg-white">
        <div className="container mx-auto px-4 py-12 md:py-16 max-w-4xl">
          <div className="prose prose-lg max-w-none text-gray-900">
            <p className="text-sm text-gray-600 mb-8">
              <strong>Effective Date:</strong> {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Acceptance of Terms</h2>
            <p className="mb-4">
              Welcome to Equity Builders Group LLC ("Company," "we," "our," or "us"). By accessing our website, engaging our consulting services, or otherwise doing business with us, you ("Client," "you," or "your") agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, please do not use our services.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. Services Description</h2>
            <p className="mb-4">
              Equity Builders Group LLC provides real estate development consulting services, including but not limited to:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Real estate investment strategy and analysis</li>
              <li>Development project planning and management</li>
              <li>Land acquisition guidance and due diligence</li>
              <li>Construction and development oversight</li>
              <li>Financial modeling and feasibility studies</li>
              <li>Market research and property analysis</li>
              <li>Turnkey development solutions</li>
            </ul>
            <p className="mb-4">
              Our services are consultative in nature and do not guarantee specific outcomes or results. All projections, estimates, and recommendations are based on available information and professional judgment but are subject to market conditions and other factors beyond our control.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. Consulting Fees and Payment</h2>
            <p className="mb-4">
              Clients agree to pay all consulting fees as outlined in their service agreement or proposal. Payment terms include:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Fees are due according to the payment schedule specified in your agreement</li>
              <li>Payment may be required upfront or in installments depending on the service package</li>
              <li>Late payments may incur additional fees or result in suspension of services</li>
              <li>All fees are quoted in U.S. Dollars unless otherwise specified</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. No Refund Policy</h2>
            <p className="mb-4">
              <strong>All consulting fees paid to Equity Builders Group LLC are non-refundable.</strong> This includes, but is not limited to:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Initial consultation fees</li>
              <li>Retainer payments</li>
              <li>Project-based fees</li>
              <li>Ongoing consulting fees</li>
            </ul>
            <p className="mb-4">
              By making payment for our services, you acknowledge and agree to this no-refund policy regardless of project outcome, timeline changes, market conditions, or Client satisfaction. This policy applies even if services are partially completed or if you choose to discontinue services early.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">5. Use of Projects as Marketing Materials</h2>
            <p className="mb-4">
              By engaging our services, you grant Equity Builders Group LLC a perpetual, worldwide, royalty-free license to use any projects we work on with you for marketing and promotional purposes. This includes:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Publishing case studies featuring your project details, images, and results</li>
              <li>Using before and after photographs in marketing materials</li>
              <li>Sharing project descriptions, timelines, and financial outcomes (with sensitive financial details anonymized if requested)</li>
              <li>Featuring testimonials and success stories across our website, social media, presentations, and other marketing channels</li>
            </ul>
            <p className="mb-4">
              If you require confidentiality for a specific project, you must notify us in writing prior to engagement and execute a separate confidentiality agreement, which may affect service terms and pricing.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">6. Client Responsibilities</h2>
            <p className="mb-4">
              To receive effective consulting services, Clients agree to:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Provide accurate, complete, and timely information as requested</li>
              <li>Respond to communications and requests for information in a reasonable timeframe</li>
              <li>Make independent decisions regarding investments and real estate transactions</li>
              <li>Conduct their own due diligence on all transactions and investments</li>
              <li>Comply with all applicable laws and regulations</li>
              <li>Maintain adequate insurance coverage for projects</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">7. Professional Disclaimer</h2>
            <p className="mb-4">
              Equity Builders Group LLC provides consulting services only. We are not:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Licensed real estate brokers or agents (unless specifically disclosed)</li>
              <li>Attorneys providing legal advice</li>
              <li>Certified public accountants providing accounting services</li>
              <li>Financial advisors providing investment advice subject to securities regulations</li>
            </ul>
            <p className="mb-4">
              Clients are strongly encouraged to seek independent legal, financial, tax, and other professional advice before making any real estate investment or development decisions.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">8. Limitation of Liability</h2>
            <p className="mb-4">
              To the fullest extent permitted by law, Equity Builders Group LLC and its officers, directors, employees, and agents shall not be liable for:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Any indirect, incidental, special, consequential, or punitive damages</li>
              <li>Loss of profits, revenue, data, or business opportunities</li>
              <li>Investment losses or failed real estate transactions</li>
              <li>Decisions made by Client based on our consulting services</li>
              <li>Changes in market conditions, regulations, or other external factors</li>
            </ul>
            <p className="mb-4">
              Our total liability for any claims arising from our services shall not exceed the total fees paid by Client for the specific services giving rise to the claim.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">9. Indemnification</h2>
            <p className="mb-4">
              Client agrees to indemnify, defend, and hold harmless Equity Builders Group LLC and its officers, directors, employees, and agents from and against any claims, damages, losses, liabilities, costs, and expenses (including reasonable attorneys' fees) arising from:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Your use of our services</li>
              <li>Your violation of these Terms</li>
              <li>Your violation of any applicable laws or regulations</li>
              <li>Your real estate transactions or development projects</li>
              <li>Any third-party claims related to your projects</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">10. Intellectual Property</h2>
            <p className="mb-4">
              All content, materials, methodologies, reports, analyses, templates, and other intellectual property created or provided by Equity Builders Group LLC remain our exclusive property. Clients receive a limited, non-exclusive, non-transferable license to use deliverables solely for their intended business purpose.
            </p>
            <p className="mb-4">
              Clients may not:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Reproduce, distribute, or sell our materials without written permission</li>
              <li>Remove copyright notices or proprietary markings</li>
              <li>Reverse engineer or replicate our methodologies</li>
              <li>Use our materials to compete with our business</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">11. Confidentiality</h2>
            <p className="mb-4">
              We respect the confidentiality of Client information. However, unless a separate confidentiality agreement is executed, we reserve the right to use project information for marketing purposes as described in Section 5. We will not disclose Client trade secrets or highly sensitive financial information without consent, except as required by law.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">12. Termination</h2>
            <p className="mb-4">
              Either party may terminate the consulting relationship at any time with written notice. Upon termination:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Client remains responsible for all fees incurred up to the termination date</li>
              <li>No refunds will be provided for fees already paid</li>
              <li>We will deliver any completed work products</li>
              <li>Both parties remain bound by confidentiality and intellectual property provisions</li>
              <li>Our right to use projects for marketing purposes survives termination</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">13. No Guarantees or Warranties</h2>
            <p className="mb-4">
              Our consulting services are provided "as is" without warranties of any kind, express or implied. We make no guarantees regarding:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Investment returns or profitability</li>
              <li>Project completion timelines</li>
              <li>Regulatory approval or permitting success</li>
              <li>Market conditions or property values</li>
              <li>Availability of financing or construction resources</li>
            </ul>
            <p className="mb-4">
              Real estate development involves significant risks, and past performance does not guarantee future results.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">14. Dispute Resolution and Governing Law</h2>
            <p className="mb-4">
              These Terms shall be governed by and construed in accordance with the laws of the State of Texas, without regard to conflict of law principles.
            </p>
            <p className="mb-4">
              Any disputes arising from these Terms or our services shall be resolved through:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>Negotiation:</strong> Good faith attempt to resolve disputes informally</li>
              <li><strong>Mediation:</strong> If negotiation fails, non-binding mediation in Austin, Texas</li>
              <li><strong>Arbitration:</strong> If mediation fails, binding arbitration under the American Arbitration Association rules</li>
            </ul>
            <p className="mb-4">
              Each party agrees to waive the right to a jury trial and to participate in class action lawsuits.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">15. Force Majeure</h2>
            <p className="mb-4">
              We shall not be liable for any failure or delay in performing our obligations due to circumstances beyond our reasonable control, including but not limited to natural disasters, pandemics, government actions, labor disputes, utility failures, or internet disruptions.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">16. Modifications to Terms</h2>
            <p className="mb-4">
              We reserve the right to modify these Terms at any time. Updated Terms will be posted on our website with a new effective date. Continued use of our services after changes constitutes acceptance of the modified Terms. For ongoing consulting relationships, we will provide reasonable notice of material changes.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">17. Severability</h2>
            <p className="mb-4">
              If any provision of these Terms is found to be unenforceable or invalid, that provision shall be limited or eliminated to the minimum extent necessary, and the remaining provisions shall remain in full force and effect.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">18. Entire Agreement</h2>
            <p className="mb-4">
              These Terms, together with any service agreements, proposals, or other written agreements between you and Equity Builders Group LLC, constitute the entire agreement between the parties and supersede all prior discussions, negotiations, and agreements.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">19. Contact Information</h2>
            <p className="mb-4">
              For questions regarding these Terms of Service, please contact us:
            </p>
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 mb-8">
              <p className="mb-2"><strong>Equity Builders Group LLC</strong></p>
              <p className="mb-2">5900 Balcones Dr STE 100</p>
              <p className="mb-2">Austin, TX 78731</p>
              <p className="mb-2">Email: <a href="mailto:support@equitybuilders.co" className="text-primary hover:underline">support@equitybuilders.co</a></p>
            </div>

            <div className="border-t border-gray-300 pt-6 mt-8">
              <p className="text-sm text-gray-600">
                By using our services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service. You also acknowledge that you have had the opportunity to seek independent legal counsel regarding these Terms.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default TermsOfService;
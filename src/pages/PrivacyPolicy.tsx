import Footer from "@/components/Footer";

const PrivacyPolicy = () => {
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
            Privacy Policy
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

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Introduction</h2>
            <p className="mb-4">
              Equity Builders Group LLC ("we," "our," or "us") respects your privacy and is committed to protecting your personal information. This Privacy Policy describes how we collect, use, disclose, and safeguard your information when you visit our website or use our consulting services.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. Information We Collect</h2>
            <p className="mb-4">We may collect the following types of information:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>Personal Information:</strong> Name, email address, phone number, mailing address, and other contact details you provide when engaging with our services.</li>
              <li><strong>Project Information:</strong> Details about real estate development projects you share with us during our consulting services.</li>
              <li><strong>Payment Information:</strong> Billing information necessary to process consulting fees.</li>
              <li><strong>Website Usage Data:</strong> IP address, browser type, device information, pages visited, and other technical data collected through cookies and similar technologies.</li>
              <li><strong>Marketing Data:</strong> Information about your interactions with our marketing materials, including email opens and click-through rates.</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. How We Use Your Information</h2>
            <p className="mb-4">We use the information we collect for the following purposes:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>To provide and deliver our consulting services</li>
              <li>To process payments and manage billing</li>
              <li>To communicate with you about our services, including responding to inquiries</li>
              <li>To improve and optimize our website and services</li>
              <li>To send marketing communications about our services (you may opt-out at any time)</li>
              <li>To use completed projects as case studies and marketing materials to showcase our work and attract new customers</li>
              <li>To comply with legal obligations</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. Marketing and Tracking</h2>
            <p className="mb-4">
              We share your marketing email address and phone number with third-party marketing channels and platforms for the purposes of:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Tracking campaign performance and effectiveness</li>
              <li>Retargeting and remarketing advertisements</li>
              <li>Building custom audiences for advertising purposes</li>
              <li>Analyzing user behavior and engagement</li>
            </ul>
            <p className="mb-4">
              These marketing channels may include social media platforms, advertising networks, and email marketing services. This data sharing is limited to marketing purposes only and does not include other private or sensitive information.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">5. Use of Projects as Marketing Material</h2>
            <p className="mb-4">
              By engaging our consulting services, you acknowledge and agree that we may use any projects we work on with you as marketing materials. This includes, but is not limited to:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Case studies featuring project details and outcomes</li>
              <li>Before and after photographs</li>
              <li>Project descriptions and results</li>
              <li>Testimonials and success stories</li>
            </ul>
            <p className="mb-4">
              These materials may be used on our website, social media, presentations, and other marketing channels to demonstrate our expertise and attract new customers.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">6. Data Sharing and Third Parties</h2>
            <p className="mb-4">
              We do not sell, rent, or share your private personal data with third-party companies for their own marketing purposes. However, we may share your information with:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>Service Providers:</strong> Third-party vendors who assist us in operating our business, such as payment processors, website hosting, and email services. These providers are contractually obligated to protect your information.</li>
              <li><strong>Marketing Platforms:</strong> As described in Section 4, we share marketing email addresses and phone numbers with marketing channels for tracking and retargeting purposes only.</li>
              <li><strong>Legal Requirements:</strong> When required by law, subpoena, or other legal process, or when we believe disclosure is necessary to protect our rights, your safety, or the safety of others.</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">7. Consulting Fees and Refund Policy</h2>
            <p className="mb-4">
              All consulting fees paid to Equity Builders Group LLC are non-refundable. By engaging our services and making payment, you acknowledge and agree to this no-refund policy. This policy applies to all consulting services, regardless of the stage of completion or outcome.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">8. Data Security</h2>
            <p className="mb-4">
              We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">9. Cookies and Tracking Technologies</h2>
            <p className="mb-4">
              We use cookies and similar tracking technologies to enhance your experience on our website, analyze usage patterns, and deliver targeted advertising. You can control cookie preferences through your browser settings, though disabling cookies may limit certain website functionality.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">10. Your Rights and Choices</h2>
            <p className="mb-4">You have the following rights regarding your personal information:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>Access:</strong> Request access to the personal information we hold about you</li>
              <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
              <li><strong>Deletion:</strong> Request deletion of your personal information, subject to legal obligations</li>
              <li><strong>Opt-Out:</strong> Unsubscribe from marketing communications at any time by clicking the unsubscribe link in our emails or contacting us directly</li>
              <li><strong>Data Portability:</strong> Request a copy of your data in a portable format</li>
            </ul>
            <p className="mb-4">
              To exercise these rights, please contact us at the email address provided below.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">11. Third-Party Links</h2>
            <p className="mb-4">
              Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these external sites. We encourage you to review the privacy policies of any third-party sites you visit.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">12. Children's Privacy</h2>
            <p className="mb-4">
              Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If we become aware that we have collected information from a child, we will take steps to delete such information promptly.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">13. Changes to This Privacy Policy</h2>
            <p className="mb-4">
              We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We will post the updated policy on this page with a new effective date. Your continued use of our services after any changes constitutes your acceptance of the updated policy.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">14. Contact Information</h2>
            <p className="mb-4">
              If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
            </p>
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 mb-8">
              <p className="mb-2"><strong>Equity Builders Group LLC</strong></p>
              <p className="mb-2">5900 Balcones Dr STE 100</p>
              <p className="mb-2">Austin, TX 78731</p>
              <p className="mb-2">Email: <a href="mailto:support@equitybuilders.co" className="text-primary hover:underline">support@equitybuilders.co</a></p>
            </div>

            <div className="border-t border-gray-300 pt-6 mt-8">
              <p className="text-sm text-gray-600">
                By using our website and services, you acknowledge that you have read, understood, and agree to be bound by this Privacy Policy.
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

export default PrivacyPolicy;
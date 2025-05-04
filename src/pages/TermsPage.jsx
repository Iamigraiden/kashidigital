import React from 'react';
import { FileText, Shield, CreditCard, Key, AlertCircle, Mail } from 'lucide-react';

const TermsAndConditions = () => {
  const terms = [
    {
      title: "1. Acceptance of Terms",
      content: "By using the services of Kashi Digital APIs, you agree to abide by the terms set forth in this document. Continued usage implies acceptance of these conditions."
    },
    {
      title: "2. Services Provided",
      content: "We provide API services including but not limited to Aadhaar-PAN linking, RC verification, GST verification, and other KYC-related solutions for authorized business use."
    },
    {
      title: "3. Eligibility",
      content: "Our services are available only to individuals or businesses legally capable of entering into binding contracts. Business verification may be required."
    },
    {
      title: "4. Payments",
      content: (
        <ul className="mb-0">
          <li>All services are provided on a prepaid basis unless otherwise specified</li>
          <li>Payment must be completed via the integrated gateway before accessing APIs</li>
          <li>No refunds are applicable once API credits are consumed</li>
          <li>Enterprise plans may be subject to custom billing terms</li>
        </ul>
      )
    },
    {
      title: "5. Account and Usage",
      content: (
        <ul className="mb-0">
          <li>You are responsible for maintaining the security of your API key and credentials</li>
          <li>Unauthorized sharing or misuse may lead to suspension</li>
          <li>APIs should not be used for illegal, harmful, or non-compliant purposes</li>
        </ul>
      )
    },
    {
      title: "6. Compliance and Data Usage",
      content: (
        <ul className="mb-0">
          <li>You agree to comply with all applicable laws, including data privacy and IT regulations</li>
          <li>Any misuse of personal data accessed through our APIs is strictly prohibited</li>
          <li>You are solely responsible for how you use the data provided</li>
        </ul>
      )
    },
    {
      title: "7. Service Modification or Termination",
      content: "We reserve the right to modify, limit, or discontinue services at our discretion without prior notice if terms are violated."
    },
    {
      title: "8. Liability Disclaimer",
      content: "We shall not be held liable for any direct or indirect damages resulting from the use or inability to use our APIs."
    },
    {
      title: "9. Updates to Terms",
      content: "These terms are subject to change. Users are responsible for reviewing them periodically to stay informed."
    }
  ];

  return (
    <div className="terms-page">
      {/* Hero Section */}
      <section className="py-5 bg-light" style={{ backgroundColor: '#F7F9FC' }}>
        <div className="container py-4">
          <div className="row align-items-center">
            <div className="col-lg-8 mx-auto text-center">
              <FileText size={48} className="color-liblue mb-3" />
              <h1 className="display-5 fw-bold mb-3 color-liblue">Terms & Conditions</h1>
            </div>
          </div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 mx-auto">
              <div className="card border-0 shadow-sm">
                <div className="card-body p-4 p-lg-5">
                  {/* Terms List */}
                  {terms.map((term, index) => (
                    <div key={index} className="mb-5">
                      <div className="mb-3">
                        <div>
                          <h4 className="fw-semibold color-liblue mb-3">{term.title}</h4>
                          <div className="text-muted">
                            {term.content}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}

                  {/* Contact Section */}
                  <div className="">
                    <h4 className="fw-semibold color-liblue mb-3">10. Contact Information</h4>    
                          <div>
                          <div className="text-muted">
                          For questions or support, please reach out:
                          </div>
                            <a href="mailto:contact@kashidigitalapis.com" className="text-decoration-none">
                              contact@kashidigitalapis.com
                            </a>
                          </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TermsAndConditions;
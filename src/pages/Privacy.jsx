import React from 'react';
import { Shield, Mail, MapPin } from 'lucide-react';

const Privacy = () => {
  return (
    <div className="privacy-policy">
      {/* Hero Section */}
      <section className="py-5 bg-light">
        <div className="container py-4">
          <div className="row align-items-center">
            <div className="col-lg-8 mx-auto text-center">
              <Shield size={48} className="color-purple mb-3" />
              <h1 className="display-5 fw-semibold mb-3 color-liblue">Privacy Policy</h1>
            </div>
          </div>
        </div>
      </section>

      {/* Policy Content */}
      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 mx-auto">
              <div className="card border-0 shadow-sm">
                <div className="card-body p-4 p-lg-5">
                  {/* 1. Introduction */}
                  <div className="mb-5">
                    <h2 className="fw-semibold mb-3 color-liblue">1. Introduction</h2>
                    <p>
                      At Kashi Digital Private Limited ("Company," "we," "our," or "us"), we value the privacy of our users and are committed to protecting their personal information. This Privacy Policy outlines how we collect, use, store, and disclose information related to our API products and services.
                    </p>
                  </div>

                  {/* 2. Information We Collect */}
                  <div className="mb-5">
                    <h2 className="fw-semibold mb-3 color-liblue">2. Information We Collect</h2>
                    <p>
                      When you use our API products, we may collect the following types of information:
                    </p>
                    <ul>
                      <li className="mb-2">
                        <strong>Personal Information:</strong> Name, email address, phone number, business details, and payment information for account registration and billing purposes.
                      </li>
                      <li className="mb-2">
                        <strong>Usage Data:</strong> API requests, response times, logs, device details, IP addresses, and analytics to improve our services.
                      </li>
                      <li className="mb-2">
                        <strong>Transaction Data:</strong> Details related to payments, invoices, and subscriptions for our API services.
                      </li>
                      <li>
                        <strong>Customer Support Data:</strong> Communication records when you contact our support team for assistance.
                      </li>
                    </ul>
                  </div>

                  {/* 3. How We Use Your Information */}
                  <div className="mb-5">
                    <h2 className="fw-semibold mb-3 color-liblue">3. How We Use Your Information</h2>
                    <p>
                      We use the collected data for the following purposes:
                    </p>
                    <div className="row g-3">
                      <div className="col-md-6">
                        <ul>
                          <li className="mb-2">To provide, manage, and improve our API services</li>
                          <li className="mb-2">To authenticate and authorize API requests</li>
                          <li className="mb-2">To process payments and manage subscriptions</li>
                          <li>To comply with legal and regulatory requirements</li>
                        </ul>
                      </div>
                      <div className="col-md-6">
                        <ul>
                          <li className="mb-2">To analyze usage patterns and enhance user experience</li>
                          <li className="mb-2">To respond to inquiries and provide customer support</li>
                          <li>To send important updates and notifications (with consent)</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* 4. Data Sharing */}
                  <div className="mb-5">
                    <h2 className="fw-semibold mb-3 color-liblue">4. Data Sharing and Disclosure</h2>
                    <p>
                      We do not sell or rent your personal information. However, we may share your information under the following circumstances:
                    </p>
                    <div className="bg-light p-4 rounded-3">
                      <div className="d-flex mb-3">
                        <div className="me-3 text-primary">
                          <i className="bi bi-building fs-4"></i>
                        </div>
                        <div>
                          <h5 className="fw-bold">With Service Providers</h5>
                          <p className="mb-0">Third-party vendors assisting in API hosting, payment processing, analytics, and security.</p>
                        </div>
                      </div>
                      <div className="d-flex mb-3">
                        <div className="me-3 text-primary">
                          <i className="bi bi-shield-lock fs-4"></i>
                        </div>
                        <div>
                          <h5 className="fw-bold">For Legal Compliance</h5>
                          <p className="mb-0">When required by law or to enforce our terms and policies.</p>
                        </div>
                      </div>
                      <div className="d-flex">
                        <div className="me-3 text-primary">
                          <i className="bi bi-people fs-4"></i>
                        </div>
                        <div>
                          <h5 className="fw-bold">With Business Partners</h5>
                          <p className="mb-0">If necessary for integrating third-party services with our APIs.</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* 5. Data Security */}
                  <div className="mb-5">
                    <h2 className="fw-semibold mb-3 color-liblue">5. Data Security</h2>
                    <p>
                      We implement robust security measures including:
                    </p>
                    <div className="row g-2 mb-3">
                      <div className="col-md-4">
                        <div className="p-3 bg-primary bg-opacity-10 rounded-3 text-center">
                          <i className="bi bi-lock-fill fs-3 text-primary mb-2"></i>
                          <p className="mb-0 fw-bold">Encryption</p>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="p-3 bg-primary bg-opacity-10 rounded-3 text-center">
                          <i className="bi bi-shield-check fs-3 text-primary mb-2"></i>
                          <p className="mb-0 fw-bold">Access Controls</p>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="p-3 bg-primary bg-opacity-10 rounded-3 text-center">
                          <i className="bi bi-server fs-3 text-primary mb-2"></i>
                          <p className="mb-0 fw-bold">Secure Servers</p>
                        </div>
                      </div>
                    </div>
                    <p>
                      While we take extensive measures, no internet transmission is 100% secure. We encourage users to take necessary precautions when using our APIs.
                    </p>
                  </div>

                  {/* 6-11 Other Sections */}
                  {[
                    {
                      title: "6. User Control & Rights",
                      content: "You may access, correct, or delete your personal data, and opt-out of marketing communications. Contact us to exercise these rights."
                    },
                    {
                      title: "7. Data Retention",
                      content: "We retain information as needed for business operations, legal compliance, and security. Contact us for deletion requests."
                    },
                    {
                      title: "8. Cookies and Tracking",
                      content: "Our services may use cookies to enhance functionality. You can manage preferences in your browser settings."
                    },
                    {
                      title: "9. Third-Party Services",
                      content: "We're not responsible for third-party services integrated with our APIs. Review their privacy policies separately."
                    },
                    {
                      title: "10. Policy Changes",
                      content: "Updates will be communicated via our website or email. Continued use constitutes acceptance of revised terms."
                    }
                  ].map((section, index) => (
                    <div key={index} className="mb-5">
                      <h2 className="fw-semibold mb-3 color-liblue">{section.title}</h2>
                      <p>{section.content}</p>
                    </div>
                  ))}

                  {/* Contact */}
                  <div className="mt-5 pt-4 border-top">
                    <h2 className="fw-semibold color-liblue mb-4">11. Contact Us</h2>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="d-flex mb-4">
                          <Mail size={24} className="text-primary me-3" />
                          <div>
                            <h5 className="fw-bold">Email</h5>
                            <a href="mailto:sales@kashidigital.com" target='_blank' className="text-decoration-none">sales@kashidigital.com</a>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="d-flex mb-4">
                          <MapPin size={24} className="text-primary me-3" />
                          <div>
                            <h5 className="fw-bold">Address</h5>
                            <p className="mb-0">Plot No. #6, Shivpur, Varanasi, Uttar Pradesh, India - 221003</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="alert alert-light mt-4">
                      <p className="mb-0">
                        <strong>Note:</strong> By using our API products, you agree to this Privacy Policy. Thank you for trusting Kashi Digital Private Limited.
                      </p>
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

export default Privacy;
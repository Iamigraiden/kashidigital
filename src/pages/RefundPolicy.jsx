import React from 'react';
import { ArrowRight, Mail, AlertCircle, CheckCircle, XCircle } from 'lucide-react';

const RefundPolicy = () => {
  return (
    <div className="refund-policy">
      {/* Hero Section */}
      <section className="py-md-5 bg-light">
        <div className="container py-4">
          <div className="row align-items-center">
            <div className="col-lg-8 mx-auto text-center">
              <div className="bg-primary bg-opacity-10 rounded-circle d-inline-flex p-4 mb-3">
                <AlertCircle size={48} className="text-primary" />
              </div>
              <h1 className="display-5 fw-bold mb-3 color-liblue">Refund Policy</h1>
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
                  {/* Policy Statement */}
                  <div className="mb-5">
                    <div className="alert alert-primary">
                      <p className="mb-0 fw-bold">
                        At Kashi Digital APIs, all payments made for API credits or services are non-refundable once the credits have been utilized or the API services have been accessed.
                      </p>
                    </div>
                  </div>

                  {/* Non-Refundable Conditions */}
                  <div className="mb-5">
                    <h2 className="fw-bold mb-4">Non-Refundable Conditions</h2>
                    <div className="row g-4">
                      <div className="col-md-6">
                        <div className="d-flex">
                          <XCircle size={24} className="text-danger me-3 mt-1" />
                          <div>
                            <h5 className="fw-bold">Used API Credits</h5>
                            <p className="text-muted">Tokens or credits that have been consumed</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="d-flex">
                          <XCircle size={24} className="text-danger me-3 mt-1" />
                          <div>
                            <h5 className="fw-bold">User Errors</h5>
                            <p className="text-muted">Failed transactions caused by incorrect input</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="d-flex">
                          <XCircle size={24} className="text-danger me-3 mt-1" />
                          <div>
                            <h5 className="fw-bold">Third-Party Issues</h5>
                            <p className="text-muted">Delays caused by external data sources</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Refund Exceptions */}
                  <div className="mb-5">
                    <h2 className="fw-bold mb-4">Refunds May Be Considered If</h2>
                    <div className="row g-4">
                      <div className="col-md-6">
                        <div className="d-flex">
                          <CheckCircle size={24} className="text-success me-3 mt-1" />
                          <div>
                            <h5 className="fw-bold">Duplicate Payments</h5>
                            <p className="text-muted">Double charges for the same service</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="d-flex">
                          <CheckCircle size={24} className="text-success me-3 mt-1" />
                          <div>
                            <h5 className="fw-bold">Service Failure</h5>
                            <p className="text-muted">Verified technical errors preventing API access</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="d-flex">
                          <CheckCircle size={24} className="text-success me-3 mt-1" />
                          <div>
                            <h5 className="fw-bold">Timely Notification</h5>
                            <p className="text-muted">Request submitted within 3 working days</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Refund Process */}
                  <div className="mb-5">
                    <h2 className="fw-bold mb-4">How to Request a Refund</h2>
                    <div className="bg-light p-4 rounded-3">
                      <ol className="mb-0">
                        <li className="mb-2">Gather your payment receipt and transaction details</li>
                        <li className="mb-2">Email our support team at <a href="mailto:contact@kashidigitalapis.com">contact@kashidigitalapis.com</a></li>
                        <li>Include "Refund Request" in the subject line and provide all relevant information</li>
                      </ol>
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

export default RefundPolicy;
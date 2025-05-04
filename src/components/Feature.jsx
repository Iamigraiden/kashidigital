import React from 'react';
import { ShieldCheck, FileText, Activity, CreditCard, Banknote, Truck, HeartPulse } from 'lucide-react';

const Feature = () => {
  const features = [
    {
      title: "Comprehensive Verification & Compliance",
      icon: <ShieldCheck size={40} className="text-primary mx-auto mb-3" />,
      items: [
        "Fast and Accurate KYC: Ensure seamless user onboarding with instant identity verification",
        "Aadhaar & GST Validation: Enhance compliance with easy, secure verifications",
        "OCR Document Digitization: Extract information from images and documents"
      ]
    },
    {
      title: "Advanced Fraud Detection",
      icon: <Activity size={40} className="text-primary mx-auto mb-3" />,
      items: [
        "Real-Time Fraud Prevention: Detect and mitigate risks instantly",
        "Transaction and Identity Security: Data-driven detection mechanisms",
        "Behavioral Analytics: Identify suspicious patterns"
      ]
    },
    {
      title: "Flexible Pricing",
      icon: <CreditCard size={40} className="text-primary mx-auto mb-3" />,
      items: [
        "Essentials, PowerBoost, and Elite Access plans",
        "Token-based pricing: Pay only for what you use",
        "Volume discounts for enterprise customers"
      ]
    },
    {
        title: "Industry-Focused API Bundles",
        icon: <FileText size={40} className="text-primary mx-auto mb-3" />,
        items: [
          "Real-Time Fraud Prevention: Detect and mitigate risks instantly with behavioral insights.",
          "Transaction and Identity Security: Maintain security at every stage with reliable, data-driven detection mechanisms."
        ]
      }
  ];
  return (
    <section className="py-5 bg-light" style={{ backgroundColor: '#F7F9FC' }}>
      <div className="container">
        {/* Main Features */}
        <div className="text-center mb-5">
          <h2 className="fw-bold color-liblue">Key Features of <span className='color-orange'>Kashi Digital</span> API Solutions</h2>
          <p className="text-muted col-md-8 mx-auto">Kashi Digital API Solutions are designed to simplify identity verification with powerful features that enhance security, accuracy, and ease of use.
</p>
        </div>

        <div className="row g-4 mb-5 justify-content-center">
          {features.map((feature, index) => (
            <div className="col-lg-4 col-md-6" key={index}>
              <div className="card h-100 border-0 p-4 shadow-sm text-center">
                {feature.icon}
                <h3 className="h4 fw-bold mb-3">{feature.title}</h3>
                <ul className="text-start ps-4">
                  {feature.items.map((item, i) => (
                    <li key={i} className="mb-2">{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Feature;
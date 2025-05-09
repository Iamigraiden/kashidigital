import React, { useState } from 'react';

const IndustryTabs = () => {
  const [activeTab, setActiveTab] = useState('tab1');

  const tabs = [
    {
      id: 'tab1',
      image: '/assets/images/Financial Services-I5usMOwt.svg',
      title:'Banking & Financial Services',
      content: {
          title: 'Simplify Compliance with Automated KYC, Aadhaar & Transaction Verification',
        features: [
          'Seamless Onboarding',
          'Smart Credit Decisions ',
          'Fraud Prevention',
          'Regulatory Ready',
          'API Integration'
        ]
      }
    },
    {
      id: 'tab2',
      image: '/assets/images/legal-CCrT7BEo.svg',
      title:'Legal & Compliance',
      content: {
          title: 'Automate Legal Document Management with AI-Powered OCR & Court API Integration',
        features: [
          'Smart Document Processing',
          'Instant Court Record Retrieval',
          'Contract Lifecycle Management',
          'Compliance Automation',
          'Unified Search'
        ]
      }
    },
    {
      id: 'tab3',
      image: '/assets/images/Healthcare-DIi6Y3jv.svg',
      title:'Healthcare',
      content: {
          title: 'Digitize Medical Records & Prescriptions with AI-Powered OCR',
        features: [
          'Instant Prescription Digitization ',
          'Smart Patient Records',
          'Regulatory Compliance',
          'Searchable Database',
          ' Integration-Friendly'
        ]
      }
    },
    {
      id: 'tab4',
      image: '/assets/images/Ecommerce-CYKH7tly.svg',
      title:'E-commerce & Logistics',
      content: {
          title: 'Automate Supply Chain Documents with Intelligent APIs',
        features: [
          'Invoice Processing',
          'Shipping Label Intelligence',
          'Tracking Automation',
          'Unified API Integration'
        ]
      }
    }
  ];

  return (
    <div className="bg-light py-5">
    <div className="container">
       <div className="text-center mb-5">
            <h2 className="fw-bold color-liblue">Solutions Tailored for <span className="color-orange">Every Industry</span> </h2>
            <p className="text-muted">Kashi Digital API adapts to various industry needs for safer, more efficient processes.</p>
          </div>
      
      {/* Tabs Navigation */}
      <ul className="nav nav-tabs justify-content-center industry-tabs" role="tablist">
        {tabs.map((tab) => (
          <li className="nav-item" key={tab.id}>
            <button
              className={`nav-link ${activeTab === tab.id ? 'active' : ''}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.title}
            </button>
          </li>
        ))}
      </ul>
      
      {/* Tab Content */}
      <div className="tab-content p-4 border-0 rounded-bottom">
        {tabs.map((tab) => (
          <div
            key={tab.id}
            className={`tab-pane fade ${activeTab === tab.id ? 'show active' : ''}`}
          >
            <div className="row g-4 align-items-center">
              {/* Left Side Image */}
              <div className="col-md-6 tabs-image">
                <img 
                  src={tab.image} 
                  alt={tab.title} 
                  className="img-fluid rounded shadow object-fit-cover"
                />
              </div>
              
              {/* Right Side Content */}
              <div className="col-md-6">
                <h3 className="mb-3 color-liblue">{tab.content.title}</h3>
                <p className="text-muted mb-4">{tab.content.description}</p>
                
                <ul className="list-unstyled">
                  {tab.content.features.map((feature, index) => (
                    <li key={index} className="mb-2">
                      <span className="me-2 text-primary">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default IndustryTabs;
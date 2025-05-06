import React from 'react';
import './css/faq.css'
const FaqPage = () => {
  const faqs = [
    {
      question: "What is Kashi Digital APIs?",
      answer: "Kashi Digital APIs is a one-stop API platform offering seamless data access for vehicle verification, KYC authentication, financial data checks, and business intelligence solutions."
    },
    {
      question: "How can I integrate Kashi Digital APIs?",
      answer: "Our APIs are developer-friendly and come with detailed documentation, making integration smooth and hassle-free. fill Up contact us query, get your API key, and start integrating."
    },
    {
      question: "What industries can use Kashi Digital APIs?",
      answer: "Our APIs are beneficial for fintech companies, vehicle aggregators, banks, insurance providers, logistics, and e-commerce platforms looking for secure and real-time data solutions."
    },
    {
      question: "Are Kashi Digital APIs secure?",
      answer: "Yes, we prioritize data security and compliance with industry standards, including encryption, authentication mechanisms, and secure data transmission."
    },
    {
      question: "What are the pricing plans for Kashi Digital APIs?",
      answer: "We offer flexible and transparent pricing based on usage. You can choose from pay-as-you-go, volume-based, or enterprise plans. Contact us for customized pricing."
    },
    {
      question: "How do I get support for API integration?",
      answer: "We provide technical support, dedicated account managers, and API documentation to assist with smooth integration."
    },
    {
      question: "Do you offer free trials?",
      answer: "Yes, we provide a limited free trial so you can test the APIs before committing to a plan."
    },
    {
      question: "How do I get started with Kashi Digital APIs?",
      answer: "Simply Contact up on our platform, get your API credentials, and start integrating with our easy-to-use endpoints."
    }
  ];

  return (
    <section className="pb-5">
      <div class="card text-bg-dark rounded-0 border-0 overflow-hidden" style={{maxHeight:"500px"}}>
  <img src="/assets/images/faqbg.jpg" class="img-fluid" alt="image"/>
  <div class="card-img-overlay d-flex flex-column justify-content-center col-md-6 col-7 ms-auto">
          <h2 className="fw-bold color-liblue fs-2">Frequently Asked Questions</h2>
          <p className="text-muted">Everything You Need to Know!</p>
        </div>
</div>
        <div className="container pt-5">
        <div className="accordion faqaccordion" id="faqAccordion">
          {faqs.map((faq, index) => (
            <div className="accordion-item border-0 mb-3 shadow-sm" key={index}>
              <h4 className="accordion-header" id={`heading${index}`}>
                <button 
                  className="accordion-button collapsed py-3" 
                  type="button" 
                  data-bs-toggle="collapse" 
                  data-bs-target={`#collapse${index}`}
                  aria-expanded="false" 
                  aria-controls={`collapse${index}`}
                >
                  <span className="fw-semibold color-liblue me-2">{faq.question}</span>
                </button>
              </h4>
              <div 
                id={`collapse${index}`} 
                className="accordion-collapse collapse" 
                aria-labelledby={`heading${index}`} 
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body pt-0 border-0 text-muted">
                    <p>{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqPage;
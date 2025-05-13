import React from 'react';
import { ShieldCheck, Car, CreditCard, Building, ArrowRight } from 'lucide-react';
import img_about from '/assets/images/api-about-removebg-preview.png'
import { Helmet } from 'react-helmet';


const AboutUs = () => {
  const offerings = [
    {
      icon: <Car size={40} className="text-primary mb-3 mx-auto" />,
      title: "Vehicle & RC Verification APIs",
      description: "Instantly access VAHAN vehicle registration data for RTO, insurance, and compliance checks."
    },
    {
      icon: <ShieldCheck size={40} className="text-primary mb-3 mx-auto" />,
      title: "KYC & Financial APIs",
      description: "Authenticate PAN, Aadhaar, GST, and bank details with precision and security."
    },
    {
      icon: <Building size={40} className="text-primary mb-3 mx-auto" />,
      title: "Business Intelligence APIs",
      description: "Get real-time insights into company records, legal data, and risk assessments."
    },
    {
      icon: <CreditCard size={40} className="text-primary mb-3 mx-auto" />,
      title: "Payment & Banking APIs",
      description: "Enable seamless bank verification, transaction processing, and financial automation."
    }
  ];

  return (

    <div className="about-page">
     {/* ===== meta tag ===== */}
    <Helmet>
    <title>About -  Identity Verification APIs Platform</title>
    <meta name="description" content="Learn about Kashi Digital APIs, a trusted provider of fast, secure Aadhaar, PAN, GST, and RC verification APIs for businesses and developers."/>
    </Helmet>
      {/* Hero Section */}
      <section className="py-md-5 bg-light" >
        <div className="container py-5">
          <div className="row align-items-center row-gap-3">
            <div className="col-lg-6">
              <h1 className="display-5 fw-bold mb-4 color-liblue">About <span className='color-orange'>Kashi Digital</span>  APIs</h1>
              <p className="lead mb-4">
                At Kashi Digital APIs, we empower businesses with fast, secure, and scalable APIs for seamless data access and verification.
              </p>
              <p>
                Our powerful suite of APIs helps Fintech Companies, Vehicle Aggregators, Insurance Providers, and Enterprises integrate real-time data effortlessly.
              </p>
            </div>
            <div className="col-lg-6 text-center">
              <img 
                src={img_about}
                alt="aboutimage" 
                className="img-fluid rounded-3 " 
              />
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="fw-bold  color-liblue">What We <span className='color-orange'>Offer</span> </h2>
          </div>
          
          <div className="row g-4 row-gap-3">
            {offerings.map((item, index) => (
              <div className="col-md-6 col-lg-3" key={index}>
                <div className="card h-100 border-0 p-4 shadow-sm text-center">
                  {item.icon}
                  <h4 className="mb-3">{item.title}</h4>
                  <p className="text-muted">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Vision */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row align-items-center row-gap-3">
            <div className="col-lg-6 order-lg-2">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                alt="Our Vision" 
                className="img-fluid rounded-3 shadow" 
              />
            </div>
            <div className="col-lg-6 order-lg-1">
              <h2 className="fw-bold mb-4 color-liblue">Our <span className='color-orange'>Vision</span> </h2>
              <p className="lead mb-4">
                We aim to simplify digital transformation by providing businesses with reliable, efficient, and intelligent API solutions.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
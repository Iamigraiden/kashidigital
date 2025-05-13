import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const Contact = () => {

  return (
    <section className="py-5">
      <Helmet>
        <title>Contact Us -  Identity Verification APIs Platform</title>
        <meta name="description" content="Get in touch with Kashi Digital APIs for API access, pricing, or support. We're here to help with your Aadhaar, PAN, GST, and RC verification needs."/>
      </Helmet>
      <div className="container">
        <div className="text-center mb-5">
          <h1 className="display-5 fw-bold mb-3 color-liblue opacity-75">Get in Touch</h1>
          <p className="lead">Reach Out to Us Today</p>
        </div>
        </div>
    </section>
  );
};

export default Contact;
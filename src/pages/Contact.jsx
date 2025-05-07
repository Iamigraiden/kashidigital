import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const Contact = () => {
  return (
    <section className="py-5">
      <div className="container">
        <div className="text-center mb-5">
          <h1 className="display-5 fw-bold mb-3 color-liblue opacity-75">Get in Touch</h1>
          <p className="lead">Reach Out to Us Today</p>
        </div>
        </div>
          <div style={{background:"#06052a"}}>
            <div className="container py-5">
        <div className="row g-md-5">
          {/* Contact Form */}
          <div className="col-lg-7">
            <div className="card border-0 shadow-sm px-md-5 px-4 py-5 h-100 bg-white rounded-0">
              <h3 className="mb-4 color-liblue">Book Time With Our Experts</h3>
              <form className='pt-4'>
                <div className="row g-3">
                  <div className="col-md-6 form-floating">
                    <input type="text" className="form-control rounded-0" placeholder="Full Name*" id="fullName" required />
                    <label htmlFor="fullName" >Full Name*</label>
                  </div>
                  <div className="col-md-6 form-floating">
                    <input type="text" className="form-control rounded-0" placeholder="Company" id="company" />
                    <label htmlFor="company">Company Name</label>
                  </div>
                  <div className="col-md-6 form-floating">
                    <input type="email" className="form-control rounded-0" placeholder="Email" id="email" required />
                    <label htmlFor="email" >Business Email Address*</label>
                  </div>
                  <div className="col-md-6 form-floating">
                    <input type="tel" className="form-control rounded-0" id="phone" placeholder='phone' />
                    <label htmlFor="phone" >Phone Number</label>
                  </div>
                  <div className="col-12">
                    <select className="form-select rounded-0 py-3 text-muted" id="timeslot" placeholder="Choose preferred time">
                      <option disabled selected >Select Time Slot</option>
                      <option>9:00 AM - 12:00 PM</option>
                      <option>12:00 PM - 3:00 PM</option>
                      <option>3:00 PM - 6:00 PM</option>
                    </select>
                  </div>
                  <div className="col-12 form-floating">
                    <textarea className="form-control rounded-0" id="message" placeholder='message' rows="4"></textarea>
                    <label htmlFor="message" >Your Message</label>
                  </div>
                  <div className="col-12">
                    <button type="submit" className="btn btn-primary px-4 py-md-3 rounded-pill">Schedule Demo</button>
                  </div>
                </div>
              </form>
            </div>
          </div>

          {/* Contact Info */}
          <div className="col-lg-5">
            <div className="card border-0 shadow-sm p-4 h-100 bg-transparent">
              <h3 className="text-white text-center">Here We Are</h3>
              
              {/* India Office */}
              <div className="mb-5 pt-5">
                <div className="d-flex align-items-start mb-3 text-white">
                  <MapPin size={24} className="me-3 mt-1 color-liblue" />
                  <div>
                    <h5 className="fw-semibold">India (Uttar Pradesh)</h5>
                    <address className="text-white">
                      Plot. No. #6, Shivpur
                      Varanasi, Uttar Pradesh
                      India 221003
                    </address>
                  </div>
                </div>
                <div className="d-flex align-items-center mb-2 text-white">
                  <Phone size={20} className="me-3 color-liblue" />
                  <NavLink href="tel:+919506629981" className="text-decoration-none text-white">+91-950-662-9981</NavLink>
                </div>
                <div className="d-flex align-items-center ">
                  <Mail size={20} className="me-3 color-liblue" />
                  <NavLink href="mailto:sales@kashidigital.in" className="text-decoration-none text-white">sales@kashidigital.in</NavLink>
                </div>
              </div>

              {/* Canada Office */}
              <div className="mb-4">
                <div className="d-flex align-items-start mb-3">
                  <MapPin size={24} className="me-3 mt-1 color-liblue" />
                  <div>
                    <h5 className="fw-semibold text-white">Canada (Surrey)</h5>
                    <address className="text-white">
                      Office No. 12725/204 80 Ave
                      Surrey, BC V3W 1A6
                      Canada
                    </address>
                  </div>
                </div>
                <div className="d-flex align-items-center mb-2">
                  <Phone size={20} className="me-3 color-liblue" />
                  <NavLink href="tel:+19319997270" className="text-decoration-none text-white">+1 (931) 999-7270</NavLink>
                </div>
                <div className="d-flex align-items-center">
                  <Mail size={20} className="me-3 color-liblue" />
                  <NavLink href="mailto:canada@kashidigital.in" className="text-decoration-none text-white">canada@kashidigital.in</NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
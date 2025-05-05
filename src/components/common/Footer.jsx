import React from 'react'
import './footer.css'
import { NavLink } from 'react-router-dom'
import { MapPin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <>
    {/* ===== Sticky CTA ===== */}
    <div className="sticky-cta py-3 border-top">
        <div className="container">
          <div className="d-flex flex-column flex-md-row justify-content-between align-items-center">
            <div className="mb-3 mb-md-0">
              <h5 className="fw-bold mb-1">Start Verifying in Minutes</h5>
              <p className="small text-muted mb-0">
                Create your free account or talk to our team for custom
                integration.
              </p>
            </div>
            <div>
              <a href="#" className="btn btn-primary me-2">
                Get Started
              </a>
              <a href="#" className="btn btn-outline-primary">
                Contact Sales
              </a>
            </div>
          </div>
        </div>
      </div>
  {/* ===== Footer ===== */}
  <footer
    className="pt-5 pb-3 bg-dark"
    style={{ backgroundColor: "var(--bg-dark)" }}
  >
    <div className="container">
      <div className="row g-4">
        <div className="col-lg-4">
        <NavLink className="navbar-brand fw-bold" to="/">
        <img
          src="/assets/images/kashi-logo.png"
          alt="Kashi Digital"
          className="img-fluid"
          width="250px"
        />
      </NavLink>
      <div className="my-4">
              <h6 className="d-flex align-items-center text-white mb-3">
                <MapPin className="me-2" size={18} />
                <span>Research And Development</span>
              </h6>
              <p className="text-white-50 ps-4">
                12725/204 80 Ave, Surrey, BC<br />
                V3W 1A6, Canada<br />
                <NavLink to="mailto:contact@kashidigitalapis.com" className="text-white-50 hover-white">
                  <Mail className="me-1" size={16} />
                  contact@kashidigitalapis.com
                </NavLink>
              </p>
            </div>

            <div className="mb-4">
              <h6 className="d-flex align-items-center text-white mb-3">
                <MapPin className="me-2" size={18} />
                <span>Sales And Development</span>
              </h6>
              <p className="text-white-50 ps-4">
                Plot No. #6, Shivpur,<br />
                Varanasi, Uttar Pradesh, India - 221003<br />
                <NavLink to="mailto:contact@kashidigitalapis.com" className="text-white-50 hover-white">
                  <Mail className="me-1" size={16} />
                  contact@kashidigitalapis.com
                </NavLink>
              </p>
            </div>

            <div className="text-white-50 small">
              <p className="mb-1">CIN: U62099UP2024PTC19785S</p>
              <p>GSTIN: 09ALVPY1138Q12W</p>
            </div>
        </div>
        <div className="col-lg-8">
          <div className="row row-gap-3">
            <div className="col-lg-4 col-6">
              <h5 className="text-white mb-3">Quick Links</h5>
              <ul className="list-unstyled">
                <li className="mb-2">
                  <NavLink
                    to="/"
                    className="text-white-50 hover-white text-decoration-none"
                  >
                    Home
                  </NavLink>
                </li>
                <li className="mb-2">
                  <NavLink
                    to="/"
                    className="text-white-50 hover-white text-decoration-none"
                  >
                    Industries
                  </NavLink>
                </li>
                <li className="mb-2">
                  <NavLink
                    to="/about"
                    className="text-white-50 hover-white text-decoration-none"
                  >
                    About Us
                  </NavLink>
                </li>
                <li className="mb-2">
                  <NavLink
                    to="/faq"
                    className="text-white-50 hover-white text-decoration-none"
                  >
                    FAQʼs
                  </NavLink>
                </li>
                <li className="mb-2">
                  <NavLink
                    to="/refund"
                    className="text-white-50 hover-white text-decoration-none"
                  >
                   Refund Policy
                  </NavLink>
                </li>
                <li className="mb-2">
                  <NavLink
                    to="/privacy"
                    className="text-white-50 hover-white text-decoration-none"
                  >
                   Privacy Policy
                  </NavLink>
                </li>
                <li className="mb-2">
                  <NavLink
                    to="/terms"
                    className="text-white-50 hover-white text-decoration-none"
                  >
                   Terms of Service
                  </NavLink>
                </li>        
              </ul>
            </div>
            <div className="col-lg-4 col-6">
              <h5 className="text-white mb-3">Social Media</h5>
              <ul className="list-unstyled text-white-50">
                <li className="mb-2 hover-white ">
                <NavLink to="https://www.instagram.com/kashidigital" target='_blank' className="text-white-50 hover-white text-decoration-none">
                  <i className="bi bi-instagram fs-5 me-1" /> Instagram
                </NavLink></li>
                <li className="mb-2 hover-white">
                <NavLink to="https://www.facebook.com/kashidigitalofficial" target='_blank' className="text-white-50 hover-white text-decoration-none">
                  <i className="bi bi-facebook fs-5 me-1" /> Facebook
                </NavLink></li>
                <li className="mb-2 hover-white">
                <NavLink to="https://www.linkedin.com/company/kashi-digital-agency" target='_blank' className="text-white-50 hover-white text-decoration-none">
                  <i className="bi bi-linkedin fs-5 me-1" /> Linkedin
                </NavLink></li>
                <li className="mb-2 hover-white">
                <NavLink to="https://x.com/kashidigital" target='_blank' className="text-white-50 hover-white text-decoration-none">
                  <i className="bi bi-twitter-x fs-5 me-1" /> Twitter
                </NavLink>
                </li>
              </ul>
            </div>
            <div className="col-lg-4 col-md-6">
              <h5 className="text-white mb-3">Sign Up</h5>
              <form className="mb-4">
                <div className="input-group">
                  <input
                    type="email"
                    className="form-control bg-dark border-secondary text-white"
                    placeholder="Your email"
                  />
                  <button className="btn btn-accent" type="submit">
                    Join
                  </button>
                </div>
                <small className="text-white-50">
                  Stay updated – Join our newsletter
                </small>
              </form>
              <div className="mt-4">
                <h5 className="text-white mb-3">Certifications</h5>
                <div className="d-flex flex-column gap-2">
                  <NavLink to="https://www.digitalindia.gov.in/" target='_blank' className="col-md-12 col-10 mx-auto">
                  <img
                    src="/assets/images/DigitalIndiaLogo-CiZR7aUc.jpg"
                    alt="digitalindia"
                    className="img-fluid"
                  /></NavLink>
                   <NavLink to="https://gem.gov.in/" className="col-md-12 col-10 mx-auto" target='_blank'>
                  <img
                    src="/assets/images/GemGovLogo-BXjU9Rmd.png"
                    alt="gem.gov"
                    className="img-fluid"
                  /></NavLink>
                  <img
                    src="/assets/images/StartupIndia-Abi8Sn70.jpg"
                    alt="StartupIndia"
                    className="img-fluid col-md-12 col-10 mx-auto"
                  />
                  <img
                    src="/assets/images/f1.png"
                    alt="ISO 27001"
                    className="img-fluid col-md-12 col-10 mx-auto"
                  />
                  <NavLink to="https://kashidigital.in/pay-now-online-kashi-digital-agency-pvt-ltd/" target='_blank' className="col-md-12 col-10 mx-auto">
                  <img
                    src="/assets/images/payments-DxVsiWUy.png"
                    alt="ISO 27001"
                    className="img-fluid"
                  /></NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr
        className="my-4 bg-white text-white"
      />
      <div className="row">
        <div className="col-md-6 order-1">
          <p className="small text-white-50 text-md-start text-center">
            © 2025 Kashi Digital Agency Pvt. Ltd. All Rights Are Reserved.
          </p>
        </div>
        <div className="col-md-6 text-md-end text-center order-0 order-md-1">
          <NavLink to="/privacy" className="small text-white-50 hover-white me-3">
            Privacy Policy
          </NavLink>
          <NavLink to="/terms" className="small text-white-50 hover-white">
            Terms of Service
          </NavLink>
        </div>
      </div>
    </div>
  </footer>
</>

  )
}

export default Footer

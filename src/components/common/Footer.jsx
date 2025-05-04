import React from 'react'
import './footer.css'
import { NavLink } from 'react-router-dom'
import { MapPin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <>
  {/* ===== Footer ===== */}
  <footer
    className="pt-5 bg-dark"
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
                <a href="mailto:contact@kashidigitalapis.com" className="text-white-50">
                  <Mail className="me-1" size={16} />
                  contact@kashidigitalapis.com
                </a>
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
                <a href="mailto:contact@kashidigitalapis.com" className="text-white-50">
                  <Mail className="me-1" size={16} />
                  contact@kashidigitalapis.com
                </a>
              </p>
            </div>

            <div className="text-white-50 small">
              <p className="mb-1">CIN: U62099UP2024PTC19785S</p>
              <p>GSTIN: 09ALVPY1138Q12W</p>
            </div>
        </div>
        <div className="col-lg-8">
          <div className="row row-gap-3">
            <div className="col-lg-4 col-md-6">
              <h5 className="text-white mb-3">Quick Links</h5>
              <ul className="list-unstyled">
                <li className="mb-2">
                  <a
                    href="#"
                    className="text-white-50 hover-white text-decoration-none"
                  >
                    Products
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    href="#"
                    className="text-white-50 hover-white text-decoration-none"
                  >
                    Industries
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    href="#"
                    className="text-white-50 hover-white text-decoration-none"
                  >
                    About
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    href="#"
                    className="text-white-50 hover-white text-decoration-none"
                  >
                    Docs
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-4 col-md-6">
              <h5 className="text-white mb-3">Social Media</h5>
              <ul className="list-unstyled text-white-50">
                <li className="mb-2 hover-white ">
                <NavLink to="#" className="text-white-50 hover-white text-decoration-none">
                  <i className="bi bi-instagram fs-5 me-1" /> Instagram
                </NavLink></li>
                <li className="mb-2 hover-white">
                <NavLink to="#" className="text-white-50 hover-white text-decoration-none">
                  <i className="bi bi-facebook fs-5 me-1" /> Facebook
                </NavLink></li>
                <li className="mb-2 hover-white">
                <NavLink to="#" className="text-white-50 hover-white text-decoration-none">
                  <i className="bi bi-linkedin fs-5 me-1" /> Linkedin
                </NavLink></li>
                <li className="mb-2 hover-white">
                <NavLink to="#" className="text-white-50 hover-white text-decoration-none">
                  <i className="bi bi-twitter fs-5 me-1" /> Twitter
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
                <div className="d-flex gap-3">
                  <img
                    src="assets/images/iso.png"
                    alt="ISO 27001"
                    className="img-fluid"
                    width="50px"
                  />
                  <img
                    src="assets/images/rbi.png"
                    alt="RBI Compliant"
                    className="img-fluid"
                    width="50px"
                  />
                  <img
                    src="assets/images/startup-india-logo.png"
                    alt="StartUp India"
                    className="img-fluid"
                    width="50px"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr
        className="my-4"
        style={{ borderColor: "rgba(255, 255, 255, 0.1)" }}
      />
      <div className="row">
        <div className="col-md-6">
          <p className="small text-white-50">
            © 2025 Kashi Digital Agency Pvt. Ltd. All Rights Are Reserved.
          </p>
        </div>
        <div className="col-md-6 text-md-end">
          <a href="#" className="small text-white-50 me-3">
            Privacy Policy
          </a>
          <a href="#" className="small text-white-50">
            Terms of Service
          </a>
        </div>
      </div>
    </div>
  </footer>
</>

  )
}

export default Footer

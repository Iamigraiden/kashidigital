import React from 'react'

const Footer = () => {
  return (
    <>
  {/* ===== Footer ===== */}
  <footer
    className="py-5 bg-dark"
    style={{ backgroundColor: "var(--bg-dark)" }}
  >
    <div className="container">
      <div className="row g-4">
        <div className="col-lg-4">
          <h4 className="text-white mb-3">
            <span style={{ color: "var(--accent)" }}>Kashi</span>Digital
          </h4>
          <p className="text-white-50">
            APIs for India's digital infrastructure.
          </p>
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
              <h5 className="text-white mb-3">Contact Us</h5>
              <ul className="list-unstyled text-white-50">
                <li className="mb-2 hover-white">
                  <i className="bi bi-envelope me-2" /> lorem@kashidigital.com
                </li>
                <li className="mb-2 hover-white">
                  <i className="bi bi-telephone me-2" /> +91 1234567891
                </li>
                <li className="hover-white">
                  <i className="bi bi-geo-alt me-2" /> lorem, India
                </li>
              </ul>
              <div className="mt-4">
                <a href="#" className="text-white-50 hover-white me-3">
                  <i className="bi bi-linkedin fs-5" />
                </a>
                <a href="#" className="text-white-50 hover-white me-3">
                  <i className="bi bi-twitter fs-5" />
                </a>
              </div>
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
            © 2024 KashiDigitalAPIs. All rights reserved.
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

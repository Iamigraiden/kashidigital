import { AlignRight } from 'lucide-react'
import './header.css'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <>
  {/* ===== Navbar ===== */}
  <nav className="navbar navbar-expand-xl navbar-light py-3 sticky-top shadow mainNav">
    <div className="container">
      <NavLink className="navbar-brand fw-bold" to="/">
        <img
          src="/assets/images/kashi-logo.png"
          alt="Kashi Digital"
          className="img-fluid"
          width="160px"
        />
      </NavLink>
      <button
        className="navbar-toggler shadow-none border-0"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasNavbar"
      >
       <AlignRight className='text-white' />
      </button>
      <div className="offcanvas offcanvas-end" id="offcanvasNavbar">
        <div className="offcanvas-header">
        <img
          src="/assets/images/kashi-logo.png"
          alt="Kashi Digital"
          className="img-fluid"
          width="160px"
        />
          <button
            type="button"
            className="btn-close shadow-none"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          />
        </div>
        <div className="offcanvas-body">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item dropdown">
              <NavLink
                className="nav-link dropdown-toggle"
                to="/products"
                id="productsDropdown"
                role="button"
                data-bs-toggle="dropdown"
              >
                Products
              </NavLink>
              <ul className="dropdown-menu" aria-labelledby="productsDropdown">
                <li>
                  <h6 className="dropdown-header">Identity Verification</h6>
                </li>
                <li>
                  <NavLink className="dropdown-item" to="/u">
                    <i className="bi bi-shield-check me-2" /> Aadhaar eKYC
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to="/p">
                    <i className="bi bi-credit-card me-2" /> PAN Verification
                  </NavLink>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <h6 className="dropdown-header">Financial APIs</h6>
                </li>
                <li>
                  <NavLink className="dropdown-item" to="/i">
                    <i className="bi bi-bank me-2" /> Account Validation
                  </NavLink>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/industries">
                Industries
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/work">
                How It Works
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/docs">
                Docs
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/pricing">
                Pricing
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about">
                About Us
              </NavLink>
            </li>
          </ul>
          <div className="ms-lg-3">
            <NavLink to="/login" className="btn me-2 text-white">
              Login
            </NavLink>
            <NavLink
              to="/getstarted"
              className="btn btn-accent rounded-pill text-white px-4"
            >
              Get Started
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  </nav>
</>

  )
}

export default Header

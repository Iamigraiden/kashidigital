import { AlignRight, X } from 'lucide-react'
import './header.css'
import { NavLink } from 'react-router-dom'
import { serviceData } from '../../json/Data'

const Header = () => {
  return (
    <>
  {/* ===== Navbar ===== */}
  <nav className="navbar navbar-expand-xl navbar-light py-3 sticky-top shadow mainNav bg-light"> 
    <div className="container">
      <NavLink className="navbar-brand fw-bold" to="/">
        <img
          src="/assets/images/headerlogo.png"
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
       <AlignRight />
      </button>
      <div className="offcanvas offcanvas-end" id="offcanvasNavbar">
        <div className="offcanvas-header">
          <NavLink to="/">
        <img
          src="/assets/images/headerlogo.png"
          alt="Kashi Digital"
          className="img-fluid"
          width="160px"
        /></NavLink>
          <button
            type="button"
            className="btn btn-close shadow-none"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <ul className="navbar-nav mx-auto main-menu">
            <li className="nav-item dropdown">
              <span
                className="nav-link dropdown-toggle "
                id="productsDropdown"
                role="button"
                data-bs-toggle="dropdown"
              >
                Products
              </span>
              <div className="dropdown-menu headerdropdown px-3 shadow-lg border-0 bg-light" aria-labelledby="productsDropdown">
                <div className="row">
               <div className='col-lg-4'>
                  <h6 className="dropdown-header text-dark fw-reg">KYC Verification API's</h6>
                  <ul className='list-unstyled product-cat'>
                  {serviceData.filter((filter) => filter.category === "Verification API's").map((data) => (
                    <li data-bs-dismiss="offcanvas" key={data.id}>
                    <NavLink className="dropdown-item text-muted" to={`/services/${data.id}`}>
                      {data.name}
                    </NavLink>
                  </li >
                  ))}
                </ul>   
                </div>
                <div className='col-lg-4'>
                  <h6 className="dropdown-header text-dark">Vehicle Data API's</h6>
                  <ul className='list-unstyled product-cat'>
                {serviceData.filter((filter) => filter.category === "Vehicle Data API's").map((data) => (
                    <li data-bs-dismiss="offcanvas" key={data.id}>
                    <NavLink className="dropdown-item text-muted" to={`/services/${data.id}`}>
                      {data.name}
                    </NavLink>
                  </li >
                  ))}
                  </ul>
                </div>
                <div className='col-lg-4'>
                  <h6 className="dropdown-header text-dark">Business API's</h6>
                  <ul className='list-unstyled product-cat'>
                  {serviceData.filter((filter) => filter.category === "gst verification").map((data) => (
                    <li data-bs-dismiss="offcanvas" key={data.id}>
                    <NavLink className="dropdown-item text-muted" to={`/services/${data.id}`}>
                      {data.name}
                    </NavLink>
                  </li >
                  ))}
                  </ul>
                </div>
                </div>
              </div>
            </li>
            <li className="nav-item" data-bs-dismiss="offcanvas">
              <NavLink className="nav-link" to="/industries">
                Industries
              </NavLink>
            </li>
            <li className="nav-item" data-bs-dismiss="offcanvas">
              <NavLink className="nav-link" to="/work">
                How It Works
              </NavLink>
            </li>
            <li className="nav-item" data-bs-dismiss="offcanvas">
              <NavLink className="nav-link" to="/docs">
                Docs
              </NavLink>
            </li>
            <li className="nav-item" data-bs-dismiss="offcanvas">
              <NavLink className="nav-link" to="/pricing">
                Pricing
              </NavLink>
            </li>
            <li className="nav-item" data-bs-dismiss="offcanvas"  >
              <NavLink className="nav-link" to="/about">
                About Us
              </NavLink>
            </li>
          </ul>
          <div className="ms-lg-3 login-btn align-self-center" data-bs-dismiss="offcanvas">
            {/* <NavLink to="/login" className="btn btn-primary px-3 rounded-pill me-2">
              Login
            </NavLink> */}
            <NavLink
              to="/contact"
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

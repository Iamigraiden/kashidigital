import { AlignRight, X } from 'lucide-react'
import './header.css'
import { NavLink } from 'react-router-dom'
import { serviceData } from '../../json/Data'



const Header = () => {
  return (
    <>
  {/* ===== Navbar ===== */}
  <nav className="navbar navbar-expand-lg navbar-light py-md-3 sticky-top shadow mainNav bg-light"> 
    <div className="container">
      <NavLink className="navbar-brand fw-bold" to="/">
        <img
          src="/assets/images/headerlogo.png"
          alt="Kashi Digital"
          className="img-fluid"
          width="200px"
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
          <li className="nav-item" data-bs-dismiss="offcanvas"  >
              <NavLink className="nav-link" to="/">
               Home
              </NavLink>
            </li>
        
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
                  <h6 className="dropdown-header text-dark fw-700 pb-3 text-uppercase ">KYC Verification API's</h6>
                  <ul className='list-unstyled product-cat'>
                  {serviceData.filter((filter) => filter.category === "Verification API's").map((data) => (
                    <li data-bs-dismiss="offcanvas" key={data.id}>
                      
                    <NavLink className="dropdown-item text-muted d-flex align-items-center" to={`/services/${data.id}`}>
                    <img
                    src={data.icon}
                    alt="image"
                    className="img-fluid pe-2 float-start" width={35}
                  /> {data.name}
                    </NavLink>
                  </li >
                  ))}
                </ul>   
                </div>
                <div className='col-lg-4'>
                  <h6 className="dropdown-header text-dark fw-700 pb-3 text-uppercase">Vehicle Data API's</h6>
                  <ul className='list-unstyled product-cat'>
                {serviceData.filter((filter) => filter.category === "Vehicle Data API's").map((data) => (
                    <li data-bs-dismiss="offcanvas" key={data.id}>
                      
                    <NavLink className="dropdown-item text-muted d-flex align-items-center" to={`/services/${data.id}`}>
                    <img
                    src={data.icon}
                    alt="image"
                    className="img-fluid pe-2 float-start" width={35}
                  />  {data.name}
                    </NavLink>
                  </li >
                  ))}
                  </ul>
                </div>
                <div className='col-lg-4'>
                  <h6 className="dropdown-header text-dark fw-700 pb-3 text-uppercase">Business API's</h6>
                  <ul className='list-unstyled product-cat'>
                  {serviceData.filter((filter) => filter.category === "gst verification").map((data) => (
                    <li data-bs-dismiss="offcanvas" key={data.id}>
                  
                    <NavLink className="dropdown-item text-muted d-flex align-items-center" to={`/services/${data.id}`}>
                    <img
                    src={data.icon}
                    alt="image"
                    className="img-fluid pe-2 float-start" width={35}
                  /> {data.name}
                    </NavLink>
                  </li >
                  ))}
                  </ul>
                </div>
                </div>
              </div>
            </li>
            {/* <li className="nav-item" data-bs-dismiss="offcanvas">
              <NavLink className="nav-link pe-none" to="/industries">
                Industries
              </NavLink>
            </li> */}
            {/* <li className="nav-item" data-bs-dismiss="offcanvas">
              <NavLink className="nav-link pe-none" to="/work">
                How It Works
              </NavLink>
            </li> */}
            {/* <li className="nav-item" data-bs-dismiss="offcanvas">
              <NavLink className="nav-link pe-none" to="/docs">
                Docs
              </NavLink>
            </li> */}
            {/* <li className="nav-item" data-bs-dismiss="offcanvas">
              <NavLink className="nav-link pe-none" to="/pricing">
                Pricing
              </NavLink>
            </li> */}
            <li className="nav-item" data-bs-dismiss="offcanvas"  >
              <NavLink className="nav-link" to="/about">
                About Us
              </NavLink>
            </li>
            <li className="nav-item" data-bs-dismiss="offcanvas"  >
              <NavLink className="nav-link" to="/contact">
                Contact Us
              </NavLink>
            </li>
          </ul>
          <div className="ms-lg-3 login-btn align-self-center" data-bs-dismiss="offcanvas">
            {/* <NavLink to="/login" className="btn btn-primary px-3 rounded-pill me-2">
              Login
            </NavLink> */}
            <NavLink
              to="/contact"
              className="btn contact-btn rounded-pill text-white px-4"
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

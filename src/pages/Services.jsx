import React from "react";
import './css/services.css'
import { useParams } from "react-router";
import { serviceData } from "../json/Data";
import { NavLink } from "react-router-dom";
import { CheckCircle } from "lucide-react";
import { Helmet } from "react-helmet";
const Services = () => {
  const { serviceId } = useParams();

  const services = serviceData.find((data) => data.id.toString() === serviceId);
  return (
    <>
      {services && (
        <>
     {/* ===== meta tag ===== */}
        <Helmet>
        <title>{services.metaTitle}</title>
        <meta name="description" content={services.metaDis}/>
        </Helmet>
          <div className="container py-md-5">
            {/* Hero Section */}
            <section className="text-md-center py-5">
              <h1 className="display-5 fw-bold mb-4 color-liblue col-md-8 mx-auto">
                {services.title}
              </h1>
              <p className="mb-5 text-muted col-md-7 mx-auto">
                {services.titleDis}
              </p>

              {/* <div className="py-5">
                <div className="col-md-12">
                  <div className="card p-4 rounded-4 border-0">
                    <div className="row">
                      <div className="col-md-6 mb-4 mb-md-0">
                        <img
                          src={services.formimg}
                          alt="API Illustration"
                          className="img-fluid w-100"
                        />
                      </div>
                      <div className="col-md-6 bg-dblue py-5">
                        <h3 className="mb-4 color-liblue">Request a Demo</h3>
                        <form>
                          <div className="mb-3 form-floating rounded-0">
                            <input
                              type="text"
                              className="form-control rounded-0 border-0 border-bottom shadow-none"
                              placeholder="Your Name Here..."
                              id="fullName"
                              required
                            />
                            <label htmlFor="fullName ">Full Name*</label>
                          </div>
                          <div className="mb-3 form-floating rounded-0 ">
                            <input
                              type="email"
                              className="form-control rounded-0 border-0 border-bottom shadow-none"
                              placeholder="Your Email Here..."
                              id="email"
                              required
                            />
                            <label htmlFor="email">Email</label>
                          </div>
                          <div className="mb-3 form-floating">
                            <input
                              type="tel"
                              className="form-control rounded-0 border-0 border-bottom shadow-none"
                              placeholder="Your Phone Number Here..."
                              id="mobile"
                              required
                            />
                            <label htmlFor="mobile">Mobile</label>
                          </div>
                          <button className="btn btn-primary w-100 rounded-3 py-3 mt-4">
                            Submit
                          </button>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}
            </section>

            {/* Why Choose Us Section */}
            <section className="py-5 mb-5">
              <h2 className="text-center mb-5 fw-bold color-liblue">
                Why Choose Kashi Digital{" "}
                <span className="color-orange">{services.name}</span> API?
              </h2>
              <div className="row row-gap-4">
                <div className="col-lg-5">
                  <img
                    src={services.imageb}
                    alt="image"
                    className="img-fluid"
                  />
                </div>
                <div className="col-lg-7">
                  <div className="row g-4">
                    {services.features.map((feature, index) => (
                      <div key={index} className="col-lg-4 col-md-4 ">
                        <div className="card h-100 border-0 shadow-sm px-3 py-4 text-start">
                          {/* {feature.icon} */}
                          <h5 className="color-liblue fs-5">{feature.name}</h5>
                          <p className="text-muted mb-1">
                            {feature.discription}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* How It Works Section */}
            <section className="py-5 mb-5">
              <h2 className="text-center mb-5 fw-bold color-liblue">
                How <span className="color-orange">{services.name}</span> API
                Works
              </h2>

              <div className="row g-4 justify-content-center">
                {services.work.map((step, index) => (
                  <div key={index} className="col-md-4">
                    <div className="card h-100 border-0 shadow-sm p-4 text-center">
                      <div className="overflow-hidden rounded-circle mx-auto mb-4 round-img ">
                        <img
                          src={step.image}
                          alt="image"
                          className="img-fluid"
                        />
                      </div>
                      <h5 className="color-liblue">{step.title}</h5>
                      <p className="text-muted">{step.discription}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="text-center">
                <NavLink
                  to="/contact"
                  className="btn btn-primary mt-5 rounded-5 px-4 text-center"
                >
                  Explore Now
                </NavLink>
              </div>
            </section>

            {/* API Response Example */}
            <section className="py-5 mb-5">
              <div className="">
                <h2 className="fw-bold text-center color-liblue">
                  API Response Example
                </h2>
                <p className="text-center text-muted">
                  After a successful verification, the API returns a structured
                  response like this:
                </p>
                {Array.isArray(services.apiexmaple) ? (
                  services.apiexmaple.map((data, idx) => (
                    <div key={idx} className="mb-3">
                      <h5>{data.title}</h5>
                      <pre className="bg-dark text-white p-3 rounded">
                        {data.code}
                      </pre>
                    </div>
                  ))
                ) : (
                  <pre className="bg-dark text-white p-3 rounded">
                    {services.apiexmaple}
                  </pre>
                )}
              </div>
            </section>
            {/* key features */}
            <section className="py-5 mb-5 bg-light rounded px-3">
              <div className="">
                <h2 className="fw-bold color-liblue text-center mb-4">
                  Key Features
                </h2>
                <div className="row g-4">
                  {services.keyfeature.map((feature, index) => (
                    <div className="col-sm-6" key={index}>
                      <div className="card h-100 border-0 shadow-sm p-4">
                        <div className="d-flex gap-2">
                          <CheckCircle className="text-success fs-1"/>
                          <div>
                        <h5 className="d-flex  gap-2">
                          {feature.title}
                        </h5>
                        <p className="text-muted">{feature.discription}</p>
                        </div></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
            {/* Use Cases Section */}
            <section className="py-5">
              <h2 className="text-center mb-5 fw-bold color-liblue">
                Use Cases
              </h2>
              <div className="row row-gap-4">
                <div className="col-md-7 order-md-0 order-1">
                  <div className="row g-4">
                    {services.usecases.map((usecase, index) => (
                      <div key={index} className="">
                        <div className="card h-100 border-0 shadow-sm p-4">
                          <h5 className="d-flex align-items-center">
                            {usecase.title}
                          </h5>
                          <p className="text-muted">{usecase.discription}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="col-md-5 order-0 order-md-1">
                  <img
                    src="https://kashidigitalapis.com/assets/usecases-CgeZ8ne6.jpg"
                    className="img-fluid"
                    alt="image"
                  />
                </div>
              </div>
            </section>

            {/* Final CTA */}
            <section className="text-center py-5 my-5 text-white rounded bg-dblue px-3">
              <h2 className="fw-bold mb-4">
                Get Started with {services.name} API Today!
              </h2>
              <p className="lead mb-4">Email: contact@kashidigitalapis.com</p>
              <NavLink to="/contact" className="btn btn-light px-4">
                Try Our API Now!
              </NavLink>
            </section>
          </div>
        </>
      )}
    </>
  );
};

export default Services;

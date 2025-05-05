import React from "react";
import "./css/home.css";
import { Player } from "@lottiefiles/react-lottie-player";
import Logo from "../components/Logo";
import { Code, CreditCard, Fingerprint, ListOrdered, Rocket, UserPlus } from "lucide-react";
import Kashiwork from "../components/Kashiwork";
import Testimonials from "../components/Testimonials";
import Feature from "../components/Feature";

function Home() {
  return (
    <>
      {/* ===== Hero Section ===== */}
      <section className="bg-light py-md-5">
        <div className="container py-5">
          <div className="row align-items-center row-gap-3">
            <div className="col-lg-6">
              <h1 className="display-5 fw-bold color-liblue mb-3">
              Simplify Verification and Build Trust with <span className="color-orange">Kashi Digital</span> API Solutions
              </h1>
              <p className="lead mb-4">
              Streamline your business processes with powerful APIs for identity verification, fraud detection, and document digitization. Scale your operations effortlessly with flexible pricing and industry-specific API bundles.
              </p>
              <div className="d-flex flex-wrap gap-3">
                <a href="#" className="btn btn-primary btn-lg px-4">
                  Get API Access
                </a>
                <a href="#" className="btn btn-outline-primary btn-lg px-4">
                  Request Demo
                </a>
              </div>
            </div>
            <div className="col-lg-6">
              {/* API Data Flow Lottie Animation */}
              <Player
      autoplay
      loop
      src="https://assets9.lottiefiles.com/packages/lf20_5tkzkblw.json"
      style={{ width: '100%', height: 'auto' }}
    />
            </div>
          </div>
        </div>
      </section>
      {/* ===== Trusted By ===== */}
      <Logo/>
      {/* ===== API Products ===== */}
      <section className="py-5">
        <div className="container">
          <div className="text-center">
            <h2 className="fw-bold color-liblue">Our <span className="color-orange">API Products</span>
            </h2>
            <p className="text-muted">
            Modular services for every verification need
            </p>
          </div>
          <div className="row pt-md-5 row-gap-4 justify-content-center">
            {/* Card 1 */}
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="service-card card h-100 border-0 p-4">
              <Fingerprint size={40}  className="text-primary"/>   
                <h4 className="mb-3 mt-4">Identity & KYC</h4>
                <p className="text-muted">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, atque.
                </p>
                <div className="mt-auto">
                  <a href="#" className="btn btn-outline-primary btn-sm">
                    Learn more <i className="bi bi-arrow-right" />
                  </a>
                </div>
              </div>
            </div>
            {/* Card 2 */}
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="service-card card h-100 border-0 p-4">
              <CreditCard size={40}  className="text-primary"/>   
                <h4 className="mb-3 mt-4">Financial APIs</h4>
                <p className="text-muted">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. In, nihil.
                </p>
                <div className="mt-auto">
                  <a href="#" className="btn btn-outline-primary btn-sm">
                    Learn more <i className="bi bi-arrow-right" />
                  </a>
                </div>
              </div>
            </div>
            {/* Card 3 */}
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="service-card card h-100 border-0 p-4">
              <Fingerprint size={40}  className="text-primary"/>   
                <h4 className="mb-3 mt-4">Legal & Court APIs</h4>
                <p className="text-muted">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil, earum!
                </p>
                <div className="mt-auto">
                  <a href="#" className="btn btn-outline-primary btn-sm">
                    Learn more <i className="bi bi-arrow-right" />
                  </a>
                </div>
              </div>
            </div>
            {/* Card 4 */}
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="service-card card h-100 border-0 p-4">
              <Fingerprint size={40}  className="text-primary"/>   
                <h4 className="mb-3 mt-4">Employment Verification</h4>
                <p className="text-muted">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui, in!
                </p>
                <div className="mt-auto">
                  <a href="#" className="btn btn-outline-primary btn-sm">
                    Learn more <i className="bi bi-arrow-right" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ===== Why Choose Us ===== */}
      <section className="py-5 bg-light-custom">
        <div className="container">
          <div className="text-center">
            <h2 className="fw-bold color-liblue">Why <span className="color-orange">KashiDigital</span> APIs?</h2>
            <p className="text-muted">
              Built for developers, trusted by enterprises
            </p>
          </div>
          <div className="row g-4 text-center justify-content-center pt-5">
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="p-4 bg-white rounded-3 shadow-sm h-100">
                {/* <i class="bi bi-check-square-fill fs-1 text-success"></i> */}
                <span className="fs-1">✅</span>
                <h5 className="mt-3">Seamless Integration</h5>
                <p className="text-muted">Plug and play with our APIs, fully compatible with your existing systems.</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="p-4 bg-white rounded-3 shadow-sm h-100">
                {/* <i class="bi bi-shield-lock fs-1"></i> */}
                <span className="fs-1">🔐</span>
                <h5 className="mt-3">Top-Tier Security</h5>
                <p className="text-muted">Protect sensitive data with state-of-the-art security features.</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="p-4 bg-white rounded-3 shadow-sm h-100">
                {/* <i class="bi bi-lightning-fill fs-1 text-warning"></i> */}
                <span className="fs-1">⚡</span>
                <h5 className="mt-3">Scalable Infrastructure</h5>
                <p className="text-muted">Whether a startup or enterprise, our API solutions scale with you.</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="p-4 bg-white rounded-3 shadow-sm h-100">
                <span className="fs-1">🛠</span>
                <h5 className="mt-3">Dedicated Support</h5>
                <p className="text-muted">Our team is here to assist, ensuring smooth implementation and ongoing assistance.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ===== Industries We Serve ===== */}
      <section
        className="py-5 bg-light"
      >
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="fw-bold color-liblue">Solutions Tailored for <span className="color-orange">Every Industry</span> </h2>
            <p className="text-muted">Kashi Digital API adapts to various industry needs for safer, more efficient processes.</p>
          </div>
          {/* industryTabs */}
          <ul
            className="nav nav-underline justify-content-center mb-4 industry-tabs"
            id="industryTabs"
            role="tablist"
          >
            <li className="nav-item" role="presentation">
              <button
                className="nav-link active"
                id="Banking-tab"
                data-bs-toggle="tab"
                data-bs-target="#banking"
                type="button"
                role="tab"
              >
               Banking & Financial Services
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="legal-tab"
                data-bs-toggle="tab"
                data-bs-target="#legal"
                type="button"
                role="tab"
              >
             Legal & Compliance
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="healthcare-tab"
                data-bs-toggle="tab"
                data-bs-target="#healthcare"
                type="button"
                role="tab"
              >
               Healthcare
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="ecommerce-tab"
                data-bs-toggle="tab"
                data-bs-target="#ecommerce"
                type="button"
                role="tab"
              >
              E-commerce & Logistics
              </button>
            </li>
          </ul>
          {/* Tab Content */}
          <div
            className="tab-content bg-white rounded-3 shadow-sm p-4"
            id="industryTabsContent"
          >
            {/* banking */}
            <div
              className="tab-pane fade show active"
              id="banking"
              role="tabpanel"
              aria-labelledby="Banking-tab"
            >
              <div className="row g-4">
                <div className="col-md-6 text-center">
                 <img src="/assets/images/Financial Services-I5usMOwt.svg" alt="image" className="img-fluid w-75" />
                </div>
                <div className="col-md-6">
                 <h4 className="color-liblue fs-2">Streamline your compliance checks with KYC, Aadhaar, and transaction verifications, perfect for onboarding, credit scoring, and fraud prevention.</h4>
                </div>
              </div>
            </div>
            {/* legal */}
            <div
              className="tab-pane fade"
              id="legal"
              role="tabpanel"
              aria-labelledby="legal-tab"
            >
             <div className="row g-4">
                <div className="col-md-6 text-center">
                 <img src="/assets/images/legal-CCrT7BEo.svg" alt="image" className="img-fluid w-75" />
                </div>
                <div className="col-md-6">
                 <h4 className="color-liblue fs-2">Enable efficient management of legal documents, court records, and contract verification with OCR and Court APIs, making data retrieval and processing seamless.</h4>
                </div>
              </div>
            </div>
            {/* healthcare */}
            <div
              className="tab-pane fade"
              id="healthcare"
              role="tabpanel"
              aria-labelledby="healthcare-tab"
            >
               <div className="row g-4">
                <div className="col-md-6 text-center">
                 <img src="/assets/images/Healthcare-DIi6Y3jv.svg" alt="image" className="img-fluid w-75" />
                </div>
                <div className="col-md-6">
                 <h4 className="color-liblue fs-2">Digitize records and prescriptions with OCR APIs, improving patient data handling and facilitating efficient record-keeping.</h4>
                </div>
              </div>
            </div>
            {/* ecommerce */}
            <div
              className="tab-pane fade"
              id="ecommerce"
              role="tabpanel"
              aria-labelledby="ecommerce-tab"
            >
              <div className="row g-4">
                <div className="col-md-6 text-center">
                 <img src="/assets/images/Ecommerce-CYKH7tly.svg" alt="image" className="img-fluid w-75" />
                </div>
                <div className="col-md-6">
                 <h4 className="color-liblue fs-2">Leverage our APIs for automated processing of invoices, shipping labels, and tracking information, making your supply chain management more efficient.</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ===== How It Works ===== */}
      <section
        className="py-5 bg-light"
      >
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="fw-bold color-liblue">Get started in <span className="color-orange">4 simple steps</span></h2>
          </div>
          <div className="row g-4">
            {/* Step 1 */}
            <div className="col-md-6 col-lg-3">
              <div className="card h-100 border-0 bg-transparent">
                <div className="card-body">
                  <div className="">
                  <UserPlus size={48} />
                  </div>
                  <h4 className="mt-4">Sign Up</h4>
                  <p className="text-muted">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, nemo.
                  </p>
                </div>
              </div>
            </div>
            {/* Step 2 */}
            <div className="col-md-6 col-lg-3">
              <div className="card h-100 border-0 bg-transparent">
                <div className="card-body">
                  <div className="">
                  <ListOrdered size={48} />

                  </div>
                  <h4 className="mt-4">Choose API</h4>
                  <p className="text-muted">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, nemo.
                  </p>
                </div>
              </div>
            </div>
            {/* Step 3 */}
            <div className="col-md-6 col-lg-3">
              <div className="card h-100 border-0 bg-transparent">
                <div className="card-body">
                  <div className="">
                  
                    <Code size={48} />
                  </div>
                  <h4 className="mt-4">Integrate</h4>
                  <p className="text-muted">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, nemo.
                  </p>
                </div>
              </div>
            </div>
            {/* Step 4 */}
            <div className="col-md-6 col-lg-3">
              <div className="card h-100 border-0 bg-transparent">
                <div className="card-body">
                  <div className="">
                  <Rocket size={48} />
                  </div>
                  <h4 className="mt-4">Go live securely</h4>
                  <p className="text-muted">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, nemo.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Kashiwork/>
      <Feature/>
      {/* ===== Testimonials ===== */}
      <Testimonials/> 
    </>
  );
}

export default Home;

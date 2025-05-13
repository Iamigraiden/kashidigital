import React from "react";
import { MapPin, Phone, Mail } from "lucide-react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import * as Yup from "yup";
import { useFormik } from "formik";
const initialValues = {
    name : "",
    companyName : "",
    businessMail : "",
    phone : "",
    timeSlot : "",
    message  : ""
}
const Form = () => {
    const {values, errors, handleBlur, touched, handleChange, handleSubmit, isSubmitting} = useFormik({
        initialValues: initialValues,
        validationSchema: Yup.object({
          name: Yup.string().min(2).max(25).required("Please enter your name"),
          businessMail: Yup.string().email('Invalid email address').required('Required'),
          phone: Yup.string().matches(/^[6-9]\d{9}$/, {message: "Please enter valid number.", excludeEmptyString: false}).required('Required'),
        }),
        onSubmit: async (values, { setSubmitting, resetForm, setFieldError }) => {
            // console.log(values)
          try {
            const response = await axios.post(
              'https://core.kashidigitalapis.com/user/contactUs',
              {
               ...values
              },
              {
                headers: {
                  'sec-ch-ua-platform': 'macOS',
                  'Referer': 'https://kashidigitalapis.com/',
                  'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/136.0.0.0 Safari/537.36',
                  'Accept': 'application/json, text/plain, */*',
                  'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
                  'Content-Type': 'application/json',
                  'sec-ch-ua-mobile': '?0'  
                }
              }
            );
    
            if (response.status === 200) {
              alert('Request submitted successfully!');
              resetForm();
            } 
            else {
              alert('Failed to submit request. Please try again.');
            }
          } catch (error) {
            console.error('Error submitting form:', error);
            alert('An error occurred. Please try again later.');
          } finally {
            setSubmitting(false);
          }
        }
      });
  return (
    <div>
      <div style={{ background: "#06052a" }} id="form_area">
        <div className="container py-5">
          <div className="row g-md-5">
            {/* Contact Form */}
            <div className="col-lg-7">
              <div className="card border-0 shadow-sm px-md-5 px-4 py-5 h-100 bg-white rounded-0">
                <h3 className="mb-4 color-liblue">
                  Book Time With Our Experts
                </h3>
                <form className="pt-4 contact-form" onSubmit={handleSubmit}>
                  <div className="row g-3">
                    <div className="col-md-6 form-floating">
                      <input
                        type="text"
                        className="form-control rounded-0"
                        placeholder="Full Name*"
                        id="fullName"
                        name="name"
                        value={values.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        required
                      />
                      <label htmlFor="fullName">Full Name*</label>
                    </div>
                    <div className="col-md-6 form-floating">
                      <input
                        type="text"
                        className="form-control rounded-0"
                        placeholder="Company"
                        name="companyName"
                        id="company"
                        value={values.companyName}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      <label htmlFor="company">Company Name</label>
                    </div>
                    <div className="col-md-6 form-floating">
                      <input
                        type="email"
                        className="form-control rounded-0"
                        placeholder="Email"
                        id="email"
                        name="businessMail"
                        value={values.businessMail}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        required
                      />
                      <label htmlFor="email">Business Email Address*</label>
                    </div>
                    <div className="col-md-6 form-floating">
                      <input
                        type="tel"
                        className="form-control rounded-0"
                        id="phone"
                        placeholder="phone"
                        name="phone"
                        value={values.phone}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      <label htmlFor="phone">Phone Number</label>
                    </div>
                    <div className="col-12">
                      <select
                        className="form-select rounded-0 py-3 text-muted"
                        id="timeslot"
                        placeholder="Choose preferred time"
                        name="timeSlot"
                        value={values.timeSlot}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      >
                        <option disabled  value="">
                          Select Time Slot
                        </option>
                        <option>9:00 AM - 12:00 PM</option>
                        <option>12:00 PM - 3:00 PM</option>
                        <option>3:00 PM - 6:00 PM</option>
                      </select>
                    </div>
                    <div className="col-12 form-floating">
                      <textarea
                        className="form-control rounded-0"
                        id="message"
                        placeholder="message"
                        rows="4"
                        name="message"
                        value={values.message}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      ></textarea>
                      <label htmlFor="message">Your Message</label>
                    </div>
                    <div className="col-12">
                      <button
                        type="submit"
                        className="btn btn-primary px-4 py-md-3 rounded-pill"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? 'Sending...' : 'Schedule Demo'}
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>

            {/* Contact Info */}
            <div className="col-lg-5">
              <div className="card border-0 shadow-sm p-4 h-100 bg-transparent">
                <h3 className="text-white text-left">Here We Are</h3>

                {/* India Office */}
                <div className="mb-5 pt-5">
                  <div className="d-flex align-items-start mb-3 text-white">
                    <MapPin size={24} className="me-3 mt-1 color-liblue" />
                    <div>
                      <h5 className="fw-semibold">India (Uttar Pradesh)</h5>
                      <address className="text-white">
                        Plot. No. #6, Shivpur Varanasi, Uttar Pradesh India
                        221003
                      </address>
                    </div>
                  </div>
                  <div className="d-flex align-items-center mb-2 text-white">
                    <Phone size={20} className="me-3 color-liblue" />
                    <a
                      href="tel:+919506629981"
                      className="text-decoration-none text-white"
                    >
                      +91-950-662-9981
                    </a>
                  </div>
                  <div className="d-flex align-items-center ">
                    <Mail size={20} className="me-3 color-liblue" />
                    <a
                      href="mailto:sales@kashidigital.in"
                      className="text-decoration-none text-white"
                    >
                      sales@kashidigital.in
                    </a>
                  </div>
                </div>

                {/* Canada Office */}
                <div className="mb-4">
                  <div className="d-flex align-items-start mb-3">
                    <MapPin size={24} className="me-3 mt-1 color-liblue" />
                    <div>
                      <h5 className="fw-semibold text-white">
                        Canada (Surrey)
                      </h5>
                      <address className="text-white">
                        Office No. 12725/204 80 Ave Surrey, BC V3W 1A6 Canada
                      </address>
                    </div>
                  </div>
                  <div className="d-flex align-items-center mb-2">
                    <Phone size={20} className="me-3 color-liblue" />
                    <a
                      href="tel:+19319997270"
                      className="text-decoration-none text-white"
                    >
                      +1 (931) 999-7270
                    </a>
                  </div>
                  <div className="d-flex align-items-center">
                    <Mail size={20} className="me-3 color-liblue" />
                    <a
                      href="mailto:canada@kashidigital.in"
                      className="text-decoration-none text-white"
                    >
                      canada@kashidigital.in
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;

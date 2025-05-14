import { MessageSquareMore } from 'lucide-react';
import './pop.css';
import React from 'react';
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from 'axios';

const initialValues = {
  name: "",
  email: "",
  mobile: "",
  message: "",
};

const Popup = () => {
  const {values, errors, handleBlur, touched, resetForm, handleChange, handleSubmit, isSubmitting} = useFormik({
    initialValues: initialValues,
    validationSchema: Yup.object({
      name: Yup.string().min(2).max(25).required("Please enter your name"),
      email: Yup.string().email('Invalid email address').required('Required'),
      mobile: Yup.string()
        .matches(/^[6-9]\d{9}$/, {message: "Please enter valid number.", excludeEmptyString: false})
        .required('Required'),
    }),
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      try {
        // Prepare the request data
        const requestData = {
          name: values.name.trim(),
          businessEmail: values.email.trim(), // Using businessEmail as required by API
          phone: values.mobile.trim(),
          message: values.message?.trim() || "" // Ensure message exists
        };

        console.log("Submitting data:", requestData); // Debug log

        const response = await axios.post(
          'https://core.kashidigitalapis.com/user/request-demo',
          requestData,
          {
            headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json, text/plain, */*'
            },
            timeout: 10000 // 10 second timeout
          }
        );

        console.log("API Response:", response.data); // Debug log

        if (response.status === 200) {
          alert('Request submitted successfully!');
          resetForm();
        } else {
          throw new Error(`Unexpected status code: ${response.status}`);
        }
      } catch (error) {
        console.error('Submission Error:', {
          message: error.message,
          response: error.response?.data,
          status: error.response?.status,
          config: error.config
        });

        let errorMessage = 'Submission failed. Please try again later.';
        if (error.response) {
          // Try to get error message from response
          errorMessage = error.response.data?.message || 
                        error.response.data?.error ||
                        `Server responded with ${error.response.status}`;
        } else if (error.request) {
          errorMessage = 'No response received from server.';
        }

        alert(errorMessage);
      } finally {
        setSubmitting(false);
      }
    }
  });

  return (
    <>
      <div className='popup-trigger d-flex align-items-center justify-content-center position-fixed bottom-0 end-0 m-2 rounded-circle' 
           data-bs-toggle="modal" 
           data-bs-target="#demoModal">
        <MessageSquareMore 
          className='message-icon text-white' 
          size={32}
          data-bs-toggle="modal" 
          data-bs-target="#demoModal"
        />
      </div>
      
      <div className="modal fade" id="demoModal" tabIndex="-1" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header text-white border-0 p-4">
              <div className="header-content">
                <h3 className="fs-2 fw-semibold">Let's Connect!</h3>
                <p className="modal-subtitle">We'll get back to you within 24 hours</p>
              </div>
              <button type="button" className="close-btn" data-bs-dismiss="modal" aria-label="Close">
                &times;
              </button>
            </div>
            <div className="modal-body">
              <form className="demo-form" onSubmit={handleSubmit}>
                <div className="floating">
                  <div className="form-group">
                    <input 
                      type="text" 
                      id="name" 
                      className="form-input"
                      placeholder=" "
                      name="name"
                      value={values.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      required
                    />
                    <label htmlFor="name" className="form-label">Your Name</label>
                    <div className="underline"></div>
                  </div>
                  {errors.name && touched.name && (
                    <div className="mb-0 text-danger form-text">{errors.name}</div>
                  )}
                </div>
                
                <div className="floating">
                  <div className="form-group">
                    <input 
                      type="email" 
                      id="email" 
                      className="form-input"
                      placeholder=" "
                      name="email"
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      required
                    />
                    <label htmlFor="email" className="form-label">Email Address</label>
                    <div className="underline"></div>
                  </div>
                  {errors.email && touched.email && (
                    <div className="mb-0 text-danger form-text">{errors.email}</div>
                  )}
                </div>
                
                <div className="floating">
                  <div className="form-group">
                    <input 
                      type="tel" // Changed from number to tel for better mobile UX
                      id="phone" 
                      className="form-input"
                      placeholder=" "
                      name="mobile"
                      value={values.mobile}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      required
                    />
                    <label htmlFor="phone" className="form-label">Phone Number</label>
                    <div className="underline"></div>
                  </div>
                  {errors.mobile && touched.mobile && (
                    <div className="mb-0 text-danger form-text">{errors.mobile}</div>
                  )}
                </div>
                
                <div className="floating">
                  <div className="form-group">
                    <textarea 
                      id="message" 
                      className="form-textarea"
                      rows="3"
                      placeholder="Message..."
                      name="message"
                      value={values.message}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    ></textarea>
                  </div>
                </div>
                
                <button 
                  type="submit" 
                  className="submit-btn fs-6"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                      Sending...
                    </>
                  ) : 'Submit'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Popup;
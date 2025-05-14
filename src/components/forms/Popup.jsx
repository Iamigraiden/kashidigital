import { MessageSquareMore } from 'lucide-react';
import './pop.css';
import React from 'react';
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
      mobile: Yup.string().matches(/^[6-9]\d{9}$/, {message: "Please enter valid number.", excludeEmptyString: false}).required('Required'),
    }),
    onSubmit: async (values, { setSubmitting, resetForm}) => {
      try {
        const response = await axios.post(
          '/api/submit-form',
          JSON.stringify({  
            name: values.name,
            businessEmail: values.email,
            phone: values.mobile,
            message: values.message
          })
        );

        if (response.status === 200) {
          toast.success('Request submitted successfully!');
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
    <>
      <div className='popup-trigger d-flex align-items-center justify-content-center position-fixed bottom-0 end-0 m-2 rounded-circle' data-bs-toggle="modal" 
          data-bs-target="#demoModal" >
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
                  {errors.name && touched.name ? (<div className="mb-0 text-danger form-text">{errors.name}</div>) : null}
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
                  {errors.email && touched.email ? (<div className="mb-0 text-danger form-text">{errors.email}</div>) : null}
                </div>
                
                <div className="floating">
                  <div className="form-group">
                    <input 
                      type="number" 
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
                  {errors.mobile && touched.mobile ? (<div className="mb-0 text-danger form-text">{errors.mobile}</div>) : null}
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
                  {isSubmitting ? 'Sending...' : 'Submit'}
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
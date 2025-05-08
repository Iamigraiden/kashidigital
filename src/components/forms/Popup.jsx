import { MessageSquareMore } from 'lucide-react';
import './pop.css';
import React from 'react';

const Popup = () => {
  return (
    <>
      <div className='popup-trigger d-flex align-items-center justify-content-center position-fixed bottom-0 end-0 m-2 rounded-circle'data-bs-toggle="modal" 
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
              <form className="demo-form">
                <div className="form-group floating">
                  <input 
                    type="text" 
                    id="name" 
                    className="form-input"
                    placeholder=" "
                    required
                  />
                  <label htmlFor="name" className="form-label">Your Name</label>
                  <div className="underline"></div>
                </div>
                
                <div className="form-group floating">
                  <input 
                    type="email" 
                    id="email" 
                    className="form-input"
                    placeholder=" "
                    required
                  />
                  <label htmlFor="email" className="form-label">Email Address</label>
                  <div className="underline"></div>
                </div>
                
                <div className="form-group floating">
                  <input 
                    type="tel" 
                    id="phone" 
                    className="form-input"
                    placeholder=" "
                    required
                  />
                  <label htmlFor="phone" className="form-label">Phone Number</label>
                  <div className="underline"></div>
                </div>
                
                <div className="form-group">
                  <textarea 
                    id="message" 
                    className="form-textarea"
                    rows="3"
                    placeholder="Message..."
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  className="submit-btn fs-6"
                >
                  Submit
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
import React from 'react';

const Comp = () => {
        return (
          <div className="container-fluid px-0" style={{minHeight: '100vh'}}>
            <div className="row g-0">
              {/* Image Section - Left Side (Full height) */}
              <div className="col-lg-6 d-none d-lg-block">
                <div 
                  className="h-100 position-relative"
                  style={{
                    backgroundImage: 'url(https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    minHeight: '100vh'
                  }}
                >
                  <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark bg-opacity-40"></div>
                </div>
              </div>
      
              {/* Form Section - Right Side with Glass Effect */}
              <div className="col-lg-6 d-flex align-items-center justify-content-center" style={{minHeight: '100vh'}}>
                <div 
                  className="p-4 p-md-5 rounded-4 shadow-lg"
                  style={{
                    backdropFilter: 'blur(16px)',
                    backgroundColor: 'rgba(255, 255, 255, 0.15)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    maxWidth: '500px',
                    width: '90%'
                  }}
                >
                  <div className="text-center mb-5">
                    <div className="bg-white bg-opacity-80 rounded-circle d-inline-flex p-3 mb-3">
                      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#0d6efd" viewBox="0 0 16 16">
                        <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z"/>
                      </svg>
                    </div>
                    <h2 className="fw-bold text-white">Welcome Back</h2>
                    <p className="text-white-50">Sign in to continue</p>
                  </div>
      
                  <form>
                    <div className="mb-4">
                      <div className="input-group">
                        <span className="input-group-text bg-white bg-opacity-70 border-end-0">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#6c757d" viewBox="0 0 16 16">
                            <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586zm3.436-.586L16 11.801V4.697z"/>
                          </svg>
                        </span>
                        <input 
                          type="email" 
                          className="form-control border-start-0 py-2 bg-white bg-opacity-70" 
                          placeholder="Email Address"
                        />
                      </div>
                    </div>
      
                    <div className="mb-4">
                      <div className="input-group">
                        <span className="input-group-text bg-white bg-opacity-70 border-end-0">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#6c757d" viewBox="0 0 16 16">
                            <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2m3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2"/>
                          </svg>
                        </span>
                        <input 
                          type="password" 
                          className="form-control border-start-0 py-2 bg-white bg-opacity-70" 
                          placeholder="Password"
                        />
                      </div>
                    </div>
      
                    <div className="d-flex justify-content-between align-items-center mb-4">
                      <div className="form-check">
                        <input 
                          className="form-check-input" 
                          type="checkbox" 
                          id="rememberMe" 
                          style={{backgroundColor: 'rgba(255,255,255,0.5)'}}
                        />
                        <label className="form-check-label text-white" htmlFor="rememberMe">
                          Remember me
                        </label>
                      </div>
                      <a href="#" className="text-white-50 text-decoration-none">Forgot password?</a>
                    </div>
      
                    <button 
                      type="submit" 
                      className="btn btn-primary w-100 py-2 mb-3 fw-bold"
                      style={{
                        background: 'linear-gradient(135deg, rgba(13,110,253,0.8) 0%, rgba(0,86,227,0.8) 100%)',
                        border: 'none',
                        boxShadow: '0 4px 15px rgba(13, 110, 253, 0.3)'
                      }}
                    >
                      Sign In
                    </button>
      
                    <div className="text-center mt-4">
                      <p className="text-white-50 mb-2">Or sign in with</p>
                      <div className="d-flex justify-content-center gap-3">
                        <button 
                          type="button" 
                          className="btn btn-outline-light rounded-circle p-2"
                          style={{width: '40px', height: '40px'}}
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M15.545 6.558a9.4 9.4 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.7 7.7 0 0 1 5.352 2.082l-2.284 2.284A4.35 4.35 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.8 4.8 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.7 3.7 0 0 0 1.599-2.431H8v-3.08h7.545z"/>
                          </svg>
                        </button>
                        <button 
                          type="button" 
                          className="btn btn-outline-light rounded-circle p-2"
                          style={{width: '40px', height: '40px'}}
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
                          </svg>
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
  );
};

export default Comp;
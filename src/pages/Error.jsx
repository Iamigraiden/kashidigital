import React from 'react'
import './css/error.css'
import { NavLink } from 'react-router';
import { ArrowLeft } from 'lucide-react';
function Error() {
  return (
    <div>
      <div className='error-main container-fluid text-center'>
     <h1><span className='text-danger'>404</span> - page not found.</h1>
    <NavLink to="/" className="text-white btn btn-lg border-0 error-btn"><ArrowLeft className='e-icon' />back to homepage</NavLink>
    </div>
    </div>
  )
}

export default Error

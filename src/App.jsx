import './App.css'
import Header from './components/common/Header'
import './../node_modules/bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap-icons/font/bootstrap-icons.css";
import Home from './pages/Home.jsx';
import Footer from './components/common/Footer.jsx';
import { Outlet, Route, Routes } from 'react-router-dom';
import AboutUs from './pages/AboutUs.jsx';
import Privacy from './pages/Privacy.jsx';
import TermsAndConditions from './pages/TermsPage.jsx';
import RefundPolicy from './pages/RefundPolicy.jsx';
import Error from './pages/Error.jsx';
import FaqPage from './pages/FaqPage.jsx';
import Contact from './pages/Contact.jsx';
import Services from './pages/Services.jsx';
function App() {

  return (  
    <>
   <Routes>
        <Route path='*' element={<Error />} />        
        <Route element={<>
          <Header />
          <Outlet />
          <Footer />
        </>}>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<AboutUs />} />
          <Route path='/privacy' element={<Privacy />} />
          <Route path='/terms' element={<TermsAndConditions />} />
          <Route path='/refund' element={<RefundPolicy />} />
          <Route path='/faq' element={<FaqPage />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/services/:serviceId' element={<Services />} />

        </Route>
      </Routes>
    </>
  )
}

export default App

import './App.css'
import Header from './components/common/Header'
import './../node_modules/bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import Home from './pages/Home.jsx';
import Footer from './components/common/Footer.jsx';
import { Route, Routes } from 'react-router-dom';
import AboutUs from './pages/AboutUs.jsx';
import Privacy from './pages/Privacy.jsx';
import TermsAndConditions from './pages/TermsPage.jsx';
function App() {

  return (
    <>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<AboutUs/>}/>
      <Route path='/privacy' element={<Privacy/>}/>
      <Route path='/terms' element={<TermsAndConditions/>}/>
    </Routes>
    <Footer/>
    </>
  )
}

export default App

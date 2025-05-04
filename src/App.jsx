import './App.css'
import Header from './components/common/Header'
import './../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './../node_modules/bootstrap/dist/js/bootstrap.min.js';
import './../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import "bootstrap-icons/font/bootstrap-icons.css";
import Home from './pages/Home.jsx';
import Footer from './components/common/Footer.jsx';
function App() {

  return (
    <>
    <Header/>
    <Home/>
    <Footer/>
    </>
  )
}

export default App

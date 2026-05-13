import { HashRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css';
import './index.css'
import Navbar from './components/01-Navbar';
import Home from './components/02-Home';
import About from './components/03-About';
import PhotoLibrary from './components/04-Photo-Library';
import Portfolio from './components/05-Portfolio';
import Section from './components/06-service-Section';
import Contact from './components/07-team-section';
import Footer from './components/08-footer';
function App() {
    return (
 <HashRouter>
     <Navbar/>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/photo" element={<PhotoLibrary/>}/>  
    <Route path="/portfolio" element={<Portfolio/>}/>  
    <Route path="/service" element={<Section/>} />
    <Route path="/contact" element={<Contact/>} />
    <Route path="*" element={<Home />} />
    </Routes>
     <Footer/>
       </HashRouter>
    );
    }
    export default App;
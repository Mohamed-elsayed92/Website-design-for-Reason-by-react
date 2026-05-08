    import './App.css';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
    import 'bootstrap/dist/css/bootstrap.min.css';
    import 'bootstrap/dist/js/bootstrap.bundle.min.js';
    import Navbar from './components/01-Navbar';
    import Home from './components/02-Home';
    import About from './components/03-About';
    import PhotoLibrary from './components/04-Photo-Library';
    import Portfolio from './components/05-Portfolio';
    import Section from './components/06-service-Section';
    import Contact from './components/07-team-section';
    import Footer from './components/08-footer';
    import './index.css'
    function App() {
    return (
    <Router>
           <> 
     <Navbar/>
    <Routes>
    <Route exact path="/" element={<Home/>}/>
    <Route path="/About" element={<About/>}/>
    <Route path="/Photo" element={<PhotoLibrary/>}/>  
    <Route path="/Portfolio" element={<Portfolio/>}/>  
    <Route path="/service" element={<Section/>} />
    <Route path="/Contact" element={<Contact/>} />
    </Routes>
     <Footer/>
     </>
  
    </Router>
    );
    };
    export default App;
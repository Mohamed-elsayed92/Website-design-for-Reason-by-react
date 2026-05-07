import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './style.css'
import { faFacebook, faTwitter, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const socialLinks = [
    { icon: faTwitter, href: "#" },
  { icon: faFacebook, href: "#" },
  { icon: faInstagram, href: "#" },
  { icon: faLinkedin, href: "#" },

];

const Footer= () => {
    const [footer, setFooter] =useState([]);
    useEffect(()=>{
        axios.get('/js/Data.json').then(res=>{setFooter(res.data["team-section"]);})
    },[])   
  return (
    <footer className="footer">
    <div className="container">
        <div className="row align-items-center">
            <div className="col-md-6">
                <div className="footer-brand">BN Resin Art</div>
                <p className="footer-text">Resin Art: From Concept to Creation.</p>
                <div className="social-links">
                    {socialLinks.map((iconName, index) => (
                    <a key={index} href="#" className="social-link"><FontAwesomeIcon icon={iconName.icon}/></a>
                  ))}
                </div>
            </div>

            <div className="col-md-6 text-md-end">
                <ul className="footer-links">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/About">About</Link></li>
                    <li className="text-nowrap"><Link to="/Photo">Photo Library</Link></li>
                    <li><Link to="/Portfolio">price</Link></li>
                    <li><Link to="/Contact">Teams</Link></li>
                </ul>
            </div>
        </div>

        <div className="copyright text-center">
            © 2026 BN Resin Art. All rights reserved.
        </div>
    </div>
</footer>
   );};
  export default Footer;
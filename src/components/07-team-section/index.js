import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faFacebook,faTwitter,faLinkedin } from '@fortawesome/free-brands-svg-icons';
const iconMap = {
   "faFacebook":faFacebook,
   "faTwitter":faTwitter,
   "faLinkedin":faLinkedin,
 };

const Contact = () => {
    const [team,setTeam] =useState([]);
    useEffect(()=>{
axios.get(`${process.env.PUBLIC_URL}/js/Data.json`).then(res=>{setTeam(res.data["team-section"]);})
    },[])
return(
    <div className="team "id="4">
   <div className="container">

    <div className="section-header text-center mb-5 ">
     <h2 className="section-title"> our team </h2>
      <span className="line"></span>
    </div>

   <div className="row">
    {team.map((item)=>
    <div className="col-lg-4 col-md-6 col-12 mb-4 order-md-1 " key={item.id}>
        <div className="team-content-item  ">
          <div className="team-img ">
            <img src={`${process.env.PUBLIC_URL}${item.image}`} className="img-fluid ttb-effect " alt={item.name}/>
            <div className="team-overlay ">
                {item.icons.map((iconName, index) => (
              <a key={index} href="https://www.facebook.com/mido.elsayed.56"><FontAwesomeIcon icon={iconMap[iconName.trim()]}/></a>
           
              ))}
            </div>
            </div>
              <div className="team-info text-center pb-4">
            <h3 className="team-info-title ">{item.name}</h3>
            <span className="team-info-text text-muted">designer</span>
          </div>
            </div> 
            </div> 
              )}
           </div> 
    </div>
</div>
)
};
export default Contact;
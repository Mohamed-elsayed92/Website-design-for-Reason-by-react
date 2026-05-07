import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCheck } from '@fortawesome/free-solid-svg-icons';
const iconMap = {
   "faCheck":faCheck 
 };
 const Section=()=>{
    const [service,setService] = useState([]);
      const [dotsData,setDotsData] = useState([]);
        const [baseStyle,setBaseStyle] = useState({});
        const [prgraf,setPragraf] = useState([]);
useEffect(()=>{
axios.get('/js/Data.json').then(res=>{setService(res.data["service-section"]);setDotsData(res.data.dots);
      setBaseStyle(res.data.liStyle);setPragraf(res.data["service-item"]);})    
},[]);
return (
<div className="service-content">
  <div className="container">
    <div className="row align-items-stretch">

      <div className="col-lg-6  col-12 mb-3 ">
<div className="section-1 h-100 d-flex flex-column ">
        <div className="section-header-left mb-5 ">
      <h2 className="fs-3 fw-normal"> why choose us </h2>
      <span className="line"></span>
</div>
{prgraf.map(item => (
    <p key={item.id} className="service-item-dec fs-6 text-muted ">{item.name}
    </p>
    ))}
    <ul className="service-list list-unstyled">
        {service.map((item)=>
       <li className="mb-2 d-flex align-items-center"key={item.id}><FontAwesomeIcon icon={iconMap[item.icon]} className=" icon-container svg text-primary me-2" />{item.description}</li>
)}
    </ul>
  </div>
      </div> 

      <div className="col-lg-6  col-12  ">
<div className="section-2 d-flex flex-column align-items-start ">
   <div className=" mb-3 position-relative  ">
  <div className=" sec-img "><img src="images/14.jpg" className=" rounded shadow-sm img-thumbnail mb-5"  alt="Why choose us"/>
    </div>  
  <ul className=" d-flex list-unstyled gap-2 mb-3 position-absolute bottom-0 start-50 translate-middle-x">
    {dotsData.map((dot)=>(
      <li key={dot.id} className={dot.isActive ? "active":""} style={{...baseStyle,backgroundColor: dot.color}}></li>
     ))}
  </ul>  
   </div>
  </div>
</div> 

      </div> 
  </div>
</div>
);};
 export default Section;
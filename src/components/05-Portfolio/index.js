import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGem } from '@fortawesome/free-regular-svg-icons';
const iconMap = {
    "faGem": faGem
};

const Portfolio = () => { 
    const [Price,setPrice] = useState([]);
useEffect(()=>{
    axios.get(`${process.env.PUBLIC_URL}/js/Data.json`).then(res=>{setPrice(res.data.offer);})
},[]);

return (
<div className="Portfolio ">
    <div className="container ">
       <div className="section-header text-center mb-5 ">
      <h2 className="section-title text-uppercas"> what we offer </h2>
      <span className="line"></span>
</div>
<div className=" row ">
    { Price.map((item)=>
    <div className="col-lg-4 col-md-6 col-10 mx-auto text-center"key={item.id}>
     <div className=" card ltr-effect shadow  flex-row align-items-start p-4 mb-4 ">
      <div className=" icon-wrapper me-3">
      <FontAwesomeIcon icon={iconMap[item.icon]} className="fa-2x text-primary"/></div>
      <div className=" card-body p-0 text-start" >
      <h2 className=" card-title mb-1 fs-5 fw-bold Portfolio-title  ">{item.cardTitle}</h2>
      <p className=" card-text fs-6 mb-0 Portfolio-desc ">{item.cardText}</p>
      </div>
      </div>  
       </div>
       )}
      </div>
  </div>
</div> 
);};
export default Portfolio;
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGears, faWandMagicSparkles, faMobileScreenButton } from '@fortawesome/free-solid-svg-icons';

const iconMap = {
  "faGears": faGears,
  "faWandMagicSparkles":faWandMagicSparkles ,
  "faMobileScreenButton": faMobileScreenButton
};
const About = () => {
const [about , setAbout] =useState([]);
useEffect(()=>{
  axios.get(`${process.env.PUBLIC_URL}/js/Data.json`).then(res=>{setAbout(res.data.webSite);})
},[]);
  return (
 <div className="about  "id="2">
       <div className="container ">
    <div className="section-header text-center mb-3 ">
      <h2 className="section-title"> welcome to website </h2>
      <span className="line"></span>
    </div>
      <div className=" row row-start mb-3">
        { about.map((item)=>(
        <div className="col-10 col-md-4 mb-5 mx-auto" key={item.id}>
          <div className="about-item card w-100 h-100 column-content shadow-sm  ">
       <FontAwesomeIcon icon={iconMap[item.icon_name]} className="icon fa-2x mb-3" style={{ color: item.iconColor }} />
        <div className="card-body text-center ">
        <h2 className="card-titel fs-5 ">{item.title} </h2>
        <p className="card-text fs-6 ">{item.body}</p>
        <a className="about-item-link fs-6 "> {item.link}</a>
        </div>
        </div> 
        </div>
        ))}
 </div>
        </div> 
        </div>);};
    
  
     export default About;
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
const iconMap = {
  "faPenToSquare": faPenToSquare,
  "faMagnifyingGlass":faMagnifyingGlass
};
const PhotoLibrary = () => {
const [photo, setPhoto] = useState([]);
useEffect(()=>{
    axios.get("/js/Data.json").then(res=>{setPhoto(res.data["Photo-Library"]);})
},[]);
return (
<div className="Photo-Library "id="3">
    <div className="container ">
       <div className="section-header">
      <h2 className="section-title"> featured works </h2>
        <span className="line"></span>
    </div>
    <div className=" row ">
    { photo.map((item)=>(
        <div className="col-lg-4 col-md-6 col-10 mx-auto "key={item.id}>
    <div className="mb-3 Photo-item"> <img src={item.image}alt={item.id} className=" img-fluid rounded-start gallory-img "/>
        <div className="layer-photo ">
        <div className="layer-info">
        <span className="category">category</span>
        <h3 className="layer-photo-title fs-5">resin for engagement and wedding</h3>
        <a href="#"><FontAwesomeIcon icon={iconMap[item.icons[0]]}/></a>
        <a href="#"><FontAwesomeIcon icon={iconMap[item.icons[1]]} className="fs-6" /></a>
        </div>
        </div>
         </div>
             </div>

))}
    </div>
    </div>
  </div>


);};
export default PhotoLibrary;
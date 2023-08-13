import React from "react";
import { ReactDOM } from "react";
import { Button } from "react-bootstrap";
import {AiOutlineHeart} from "react-icons/ai"
import { GrAdd } from "react-icons/gr"
import { motion } from "framer-motion";


function Hove() {
    return (
<div className="row h-100  w-100">
  <div className="col h-100  d-flex flex-column justify-content-between" >
    <div name="left-top" className="">
   
    </div>
    <div name="left=bottom" className="">
    <motion.div className="artist-card">
      <div className="artist-image bg-black ">
        {/* <img src={artist.imageSrc} alt={artist.name} /> */}
      </div>
      <div className="artist-info text-start ">
        <h3>hello</h3>
        <p className="text-white opacity-75">description</p>
      </div>
    </motion.div>
    </div>
  </div>
  <div  className=" col h-100  d-flex flex-column justify-content-between" >
    <div  className="d-flex flex-row justify-content-end">
    <AiOutlineHeart className="icon me-1"/>
    <GrAdd className="icon"/>
    </div> 
    <div className="d-flex flex-row justify-content-end">
         <button className="unlock" >Unlock</button>
    </div>   
  </div>
</div>
    )
}

export default Hove;
import React from "react";
import { ReactDOM } from "react";
import { Button } from "react-bootstrap";
import {AiOutlineHeart} from "react-icons/ai"
import {GrAdd} from "react-icons/gr"


function Hove() {
    return (
<div className="row h-100  w-100">
  <div className="col h-100  d-flex flex-column justify-content-between" >
    <div name="left-top" className="">
   
    </div>
    <div name="left=bottom" className="">
       
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
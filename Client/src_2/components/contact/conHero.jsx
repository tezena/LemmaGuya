import React from "react";
import { ReactDOM } from "react";
import { Row, Col } from "react-bootstrap";
import addressInfo from "./contactInfo";
import { PhoneInfo, emailInfo } from "./contactInfo"
import { GrLocation, GrPhone,GrFacebook,GrTwitter,GrInstagram } from "react-icons/gr"
import {HiOutlineMail} from "react-icons/hi"



function CoHero() {
    return (
        <div className=" h-50 px-sm-5 px-5" style={{ backgroundColor: "black" }}>
            <h1 className="myColor pt-5 fs-1" > Get In Touch</h1> 
            <div className="row pb-5 px-sm-5">
            <div className="col-6  col-sm-3 ">
                <div className=" h-2 w-2 mx-auto mt-5 " style={{width:"60px",height:"60px",backgroundColor:'#FFB86B',borderRadius:"100%"}}>
                      <GrLocation className=" h-75 w-75 my-2 "/> 
                    </div>
                <div className="text-part">
                    <h4 className="myColor pt-3 " >Address</h4>
                    {addressInfo.map((info) => (
                       <div>
                           <h6 className=" text-white  fw-normal">{ info.Describtion}</h6>
                           <p className=" text-light  ">{ info.value}</p>
                       </div> 
                    ))}
                    
                    
                </div>
                </div>
                
            <div className="col-6 col-sm-3  ">
                    <div className=" h-2  mx-auto mt-5 " style={{width:"60px",height:"60px",backgroundColor:'#FFB86B',borderRadius:"100%"}}>
                      <GrPhone className="h-75 w-75 my-2 "/>
                    </div>
                <div className="text-part">
                    <h4 className="myColor pt-3 " >Phone</h4>
                    {PhoneInfo.map((info) => (
                       <div>
                           <h6 className=" text-white  fw-normal">{ info.Describtion}</h6>
                           <p className=" text-light  ">{ info.value}</p>
                       </div> 
                    ))}
                    
                    
                </div>
                </div>
                <div className="col-6 mx-auto col-sm-3   ">
                    <div className=" h-2  mx-auto mt-5 " style={{width:"60px",height:"60px",backgroundColor:'#FFB86B',borderRadius:"100%"}}>
                        <HiOutlineMail className="h-75 w-75 my-2 "/>
                    </div>
                <div className="text-part">
                    <h4 className="myColor pt-3 " >Email</h4>
                    {emailInfo.map((info) => (
                       <div>
                           <h6 className=" text-white  fw-normal">{ info.Describtion}</h6>
                           <p className=" text-light  ">{ info.value}</p>
                       </div> 
                    ))}
                    
                    
                </div>
                </div>
                <div className="col-6 col-sm-3 mt-5 pt-5 d-flex flex-column  flex-sm-column text-sm-start px-5">
                    <div className="mt-5 py-4">

                    </div>
                <h4 className="myColor " >Social medias</h4>
                <div className="p-2 d-flex  flex-column flex-md-row  text-white ">
                     <GrFacebook className="mx-auto h-75 w-25 mb-1"/>
                     <GrTwitter className="mx-auto h-75 w-25 mb-1"/>
                     <GrInstagram className="mx-auto h-75 w-25 mb-1"/>
              </div>
            </div>
            </div>
            
          </div>
    )
}

export default CoHero;
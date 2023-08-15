import React, { useState }  from "react";



function MessageCard(props){
    
    return <div  className=" py-1 w-100 w-md-25">
            <div> <h1 className="fs-1 fw-semibold" > {props.name} </h1></div>
            <div> <h6 className=" fs-6  opacity-75 ">{props.mesg}</h6></div>
    </div>
}


export default MessageCard;
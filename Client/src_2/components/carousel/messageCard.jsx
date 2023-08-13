import React, { useState }  from "react";



function MessageCard(props){
    
    return <div  className=" py-1 w-100 w-md-25">
            <div> <h1 className="fs-2 fw-semibold" > {props.name} </h1></div>
            <div> <h6 className=" fs-6 fw-light">{props.mesg}</h6></div>
    </div>
}


export default MessageCard;
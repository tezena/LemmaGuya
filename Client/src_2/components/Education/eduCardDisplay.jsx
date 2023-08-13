import React from "react";
import { ReactDOM } from "react";
import BlogECard from "./EduCard1";





function DisplayECard(props) {  
  const Data = props.data;
    return (
      <div className="w-100 h-100  d-flex-col justify-content-center align-items-center  py-3" >
        {
          Data.map((item) => {
            return (
              <BlogECard title={item.title} image="assets/images/img3.jpg" buttonText={item.btnText} text={ item.note} />
            )
          })
        }
        </div>
    )
}

export default DisplayECard
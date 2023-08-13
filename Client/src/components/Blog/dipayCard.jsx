import React from "react";
import { ReactDOM } from "react";
import BlogCard from "./Card";





function DisplayCard(props) {  
  const Data = props.data;
    return (
      <div className="w-100 h-100  d-flex-col justify-content-center align-items-center  py-3" >
        {
          Data.map((item) => {
            return (
              <BlogCard title={item.title} image={item.image} buttonText={item.btnText} text={ item.note} />
            )
          })
        }
        </div>
    )
}

export default DisplayCard
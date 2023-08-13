import React from "react";
import { ReactDOM } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Masonry from 'react-masonry-css';
import images from "../imges";

function Display (){

  const breakpointColumnsObj = {
    default: 5,
    1100: 3,
    700: 2,
    500: 1
  };

  return (
    <div className="container">
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column "
      >
        {images.map((image, idx) => (
          <div
            key={idx}
            className="image-container"
                >
            <img src={image.src} alt={image.alt} className="img-fluid"  />
          
          </div>
        ))}
      </Masonry>
    </div>
  );
}


export default Display;

import React from 'react';
import { ReactDOM } from 'react';
import { Card, Button } from 'react-bootstrap';


function BlogCard({ image, title, text, buttonText}){
  return (
    <div class="col-md-6">
      <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
        <div class="col p-4 d-flex flex-column position-static">
          {/* <strong class="d-inline-block mb-2 text-success">Events</strong> */}
          <h3 class="mb-0">{title}</h3>
          <div class="mb-1 text-muted">Nov 11/2023</div>
          <p class="mb-auto">
            {text}
          </p>
          <a href="#" class="bg-primary text-light text-decoration-none mx-auto px-4 py-1 border rounded-2 bg-warning">
           {buttonText}
          </a>
        </div>
        <div class="col-auto d-none d-lg-block">
          <svg
            class="bd-placeholder-img"
            width="200"
            height="250"
            xmlns={image}
            role="img"
            aria-label="Placeholder: Thumbnail"
            preserveAspectRatio="xMidYMid slice"
            focusable="false"
          >
            <title>Placeholder</title>
            <rect width="100%" height="100%" fill="#55595c" />
            <text x="50%" y="50%" fill="#eceeef" dy=".3em">
              Thumbnail
            </text>
          </svg>
          </div>
          </div>
 </div>
  );
};

export default BlogCard;











// import React from "react";

// function Card() {
//   return (
//     <div class=" mx-auto " style={{width:"80%"}} >
//       <div class="d-flex flex-row g-0 border border border-warning border-5  rounded rounded-5   flex-md-row mb-4 shadow-sm h-md-250  p-2 w-100" >
//         <div className="col bg-black p-5" style={{width:"70%"}}> 

//           <h1>left side</h1>
                 
//         </div>
//         <div className="col align-content-end ">
//           <h1>Reight side.</h1>
//         </div>
       
//       </div>
//     </div>
//   );
// }



//  {/* <div class="col p-4 d-flex flex-column position-static w-50">
//           <strong class="d-inline-block mb-2 text-success">Events</strong>
//           <h3 class="mb-0">Art Exibition</h3>
//           <div class="mb-1 text-muted">Nov 11/2023</div>
//           <p class="mb-auto">
//             This is a wider card with supporting text below as a natural lead-in
//             to additional content.
//           </p>
//           <a href="#" class="bg-primary text-light">
//            Location
//           </a>
//         </div> */}
//         {/* <div class="col-auto d-none d-lg-block w-50 align-items-end">
//           <svg
//             class="bd-placeholder-img"
//             width="200"
//             height="250"
//             xmlns="http://www.w3.org/2000/svg"
//             role="img"
//             aria-label="Placeholder: Thumbnail"
//             preserveAspectRatio="xMidYMid slice"
//             focusable="false"
//           >
//             <title>Placeholder</title>
//             <rect width="100%" height="100%" fill="#55595c" />
//             <text x="50%" y="50%" fill="#eceeef" dy=".3em">
//               Thumbnail
//             </text>
//           </svg>
//         </div> */}

// export default Card;

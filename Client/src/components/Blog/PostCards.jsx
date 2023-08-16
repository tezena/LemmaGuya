import React from "react";

function Card({ image, title, text }) {
  return (
    <div class="col-md-12">
      <div class="row g-0 border rounded overflow-hidden flex-col mb-4 shadow-sm h-md-250 position-relative">
        <div class="col-auto d-none d-md-block px-auto  ">
          <img src={image} class="bd-placeholder-img w-50 h-50 border rounded-3" />
        </div>
        <div class="col p-4 d-flex flex-column position-static">
          <strong class="d-inline-block mb-2 text-success">Post</strong>
          <h3 class="mb-0">{title}</h3>
          <div class="mb-1 text-muted">May 3/2023</div>
          <p class="mb-auto">
            {text}
          </p>
          <a href="#" class="bg-primary text-light text-decoration-none mx-auto px-4 py-1 border rounded-2 bg-warning">

            Contribute +
          </a>
        </div>

      </div>
    </div>
  );
}

export default Card;

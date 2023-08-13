import React from "react";
import { Button, Image, NavLink } from "react-bootstrap";
function Art() {
  return (
    <div class="container px-4 py-5" id="hanging-icons">
    <h2 class="pb-2 border-bottom">Artistry and Education</h2>
    <div class="row g-4 py-5 row-cols-1 row-cols-lg-3">
      <div class="col d-flex align-items-start">
        <div class="icon-square bg-light text-dark flex-shrink-0 me-3">
          {/* <svg class="bi" width="1em" height="1em"><use xlink:href="#toggles2"/></svg> */}
        </div>
        <div>
          <h2>Art Gallery</h2>
          <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
          <Button href="#" class="btn bg-primary text-white">
           See more
          </Button>
        </div>
      </div>
      <div class="col d-flex align-items-start">
        <div class="icon-square bg-light text-dark flex-shrink-0 me-3">
        </div>
        <div>
          <h2>Art Research</h2>
          <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
          <Button href="#" class="btn bg-primary text-white">
           See more
          </Button>
        </div>
      </div>
      <div class="col d-flex align-items-start">
        <div class="icon-square bg-light text-dark flex-shrink-0 me-3">
        </div>
        <div>
          <h2>Education</h2>
          <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
          <Button href="#" class="btn bg-primary text-white">
           See more
          </Button>
        </div>
      </div>
    </div>
  </div>
  );
}

export default Art;

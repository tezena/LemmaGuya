import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import {
  MDBInput,
  MDBCol,
  MDBRow,
  MDBCheckbox,
  MDBBtn,
  MDBIcon,
} from "mdb-react-ui-kit";

function Donate() {
  return (
    <div>
      <div className="container mt-5 text-center">
        <h1
          className=" pt-auto border-bottom border-5 col-auto col-sm-8 m-sm-auto border-warning"
          style={{
            fontSize: "3.5rem",
            fontFamily: "font-family: 'Cormorant Garamond', serif;",
          }}
        >
          Lorem ipsum dolor sit
        </h1>
        <p className="opacity-50 fs-6 col-sm-7 m-sm-auto pt-sm-3">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum.
        </p>
      </div>

      <div className="mt-5">
        <div className="row ">
          <div className="col-12 col-md-6 order-md-2">
            <img
              className="h-50"
              src="assets/images/lemma/l17.jpg"
              alt="Lemma Guya"
            />
            <p className="px-4 opacity-50 pt-4 text-start col-12 col-md-10 mx-auto">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum.
            </p>
          </div>
          <div className="col-12 col-md-4 px-5 order-md-1 mx-auto">
           
            <form className="pb-5 position-relative">
                <div className="d-flex justify-content-between">  
                    <h1 className="text-warning  fw-bold"> Donate </h1>
                    <Dropdown className="mb-4">
                <Dropdown.Toggle
                  variant="warning  text-white d-flex justify-content-between px-3"
                  id="dropdown-basic"
                >
                  $ USD
                </Dropdown.Toggle>

                <Dropdown.Menu className="w-100  ">
                  <Dropdown.Item
                    href="#/action-1"
                    variant=" transparent"
                  >
                    Traditional
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Digital Art</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Music</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
                 </div>
              <MDBRow className="mb-4">
                <MDBCol>
                  <MDBInput id="" label="First name" />
                </MDBCol>
                <MDBCol>
                  <MDBInput id="" label="Last name" />
                </MDBCol>
              </MDBRow>
              <MDBInput
                className="mb-4"
                type="email"
                id=""
                label="Email address"
              /> 
              <MDBRow className="pb-3">
                <MDBCol >
                <MDBInput className=" bg-warning fs-3 text-center fw-bold text-secondary" type="btn" value="$10" />
                </MDBCol>
                <MDBCol >
                <MDBInput className=" bg-warning fs-3 text-center fw-bold text-secondary" type="btn" value="$20" />
                </MDBCol>
                <MDBCol >
                <MDBInput className=" bg-warning fs-3 text-center fw-bold text-secondary" type="btn" value="$50" />
                </MDBCol>
                <MDBCol >
                <MDBInput className=" bg-warning fs-3 text-center fw-bold text-secondary" type="btn" value="$100" />
                </MDBCol>
              </MDBRow>
              <div class="input-group flex-nowrap py-3 ">
  <span className="input-group-text bg-warning fs-3 fw-bold text-secondary " id="addon-wrapping">$</span>
  <input type="text" class="form-control fs-5 fw-bold opacity-50" placeholder="Other amount" aria-label="other amount" aria-describedby="addon-wrapping" />
              </div>
              <div className="">
              <h1 className="text-warning text-start fw-bold fs-2"> Choose  payment method</h1>
              </div>
              <div className="">
                <div className=" d-flex flex-row justify-content-center  ">
                <div className="bg-warning m-2  flex-row" style={{height:"40px" , width:"200px"}}>
                    <img src="assets/images/social/master.png" style={{height:"30px",width:"70px"}} />
                    <img src="assets/images/social/visa.png"/>
                </div>
                <div className="bg-warning m-2" style={{height:"40px" , width:"200px"}}>
                  
                  </div>
                </div>
                <div className=" d-flex flex-row justify-content-center  ">
                <div className="bg-warning m-2" style={{height:"40px" , width:"200px"}}>
                  
                </div>
                <div className="bg-warning m-2" style={{height:"40px" , width:"200px"}}>
                  
                  </div>
                  </div>
                </div>
             
             
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Donate;

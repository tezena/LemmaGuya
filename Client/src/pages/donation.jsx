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
          <div className="col-12">
            <img
              className="h-50"
              src="assets/images/lemma/l17.jpg"
              alt="Lemma Guya"
            />
            <p className="px-4 opacity-50 pt-4 text-start">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum.
            </p>
          </div>
          <div className="col-12 col-md-4 px-5 ">
           
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
             
              <MDBInput
                label="Readonly"
                placeholder="Readonly input here..."
                id="formControlReadOnly"
                type="text"
                readonly="true"
                className="bg-white"
              />

              <MDBBtn
                type="submit"
                className="mb-4 bg-warning mt-4 position-absolute end-0 border border-0"
              >
                Next
              </MDBBtn>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Donate;
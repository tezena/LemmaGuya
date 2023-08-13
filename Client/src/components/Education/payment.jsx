import React from "react";
import { ReactDOM } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import {
  MDBInput,
  MDBCol,
  MDBRow,
  MDBCheckbox,
  MDBBtn,
  MDBIcon,
} from "mdb-react-ui-kit";

function PaymentForm() {
  return (
    <div className="row   ">
      <div
        className="col-md-5 d-none d-md-block w-50 pt-5"
        style={{ height: "620px", backgroundColor: "#333333" }}
      >
        <img
          src="assets/images/img6.png"
          className="w-50 h-50 mt-3"
          alt="Registretion illustration"
        />
        <h1 className="text-white mt-2 fs-3">Education</h1>
        <h6 className="text-white opacity-50 fw-light  px-5 w-100  mx-auto mt-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation
        </h6>
      </div>
      <div className="col-md-1"></div>
      <div className="col-12 col-md-4 p-5 mt-5">
        <h3 className="mx-auto pb-4 fw-normal">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </h3>
        <form className="pb-5 position-relative">
          <MDBRow className="mb-4">
            <MDBCol>
              <MDBInput id="" label="First name" />
            </MDBCol>
            <MDBCol>
              <MDBInput id="" label="Last name" />
            </MDBCol>
          </MDBRow>
          <MDBInput className="mb-4" type="email" id="" label="Email address" />
          <Dropdown className="mb-4">
            <Dropdown.Toggle variant="warning w-100 text-white d-flex justify-content-between" id="dropdown-basic">
              Dropdown Button
            </Dropdown.Toggle>

            <Dropdown.Menu className="w-100  ">
              <Dropdown.Item href="#/action-1" variant=" transparent warning">Traditional</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Digital Art</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Music</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <MDBInput
            label="Readonly"
            placeholder="Readonly input here..."
            id="formControlReadOnly"
            type="text"
            readonly="true"
            className="bg-white"
          />

          <MDBBtn type='submit' className='mb-4 bg-warning mt-4 position-absolute end-0 border border-0' >
          Next
        </MDBBtn>
        </form>
      </div>
    </div>
  );
}

export default PaymentForm;

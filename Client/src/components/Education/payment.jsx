import React, { useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import {
  MDBInput,
  MDBCol,
  MDBRow,
  MDBBtn,
} from "mdb-react-ui-kit";

function PaymentForm() {
  const [student, setStudent] = useState({
    fname: "",
    lname: "",
    phone: "",
    email: "",
    department: "",
  });

  const handleAddStudent = () => {
    // Send a POST request to the server to add the new student
    fetch("/api/students", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(student),
    })
      .then((response) => response.json())
      .then(() => {
        // Reset form fields after successful submission
        setStudent({
          fname: "",
          lname: "",
          phone: "",
          email: "",
          department: "",
        });
        console.log("Student data sent successfully");
      })
      .catch((error) => {
        console.error("Error adding student:", error);
      });
  };

  return (
    <div className="row">
      <div className="col-md-5 d-none d-md-block w-50 pt-5" style={{ height: "620px", backgroundColor: "#333333" }}>
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
              <MDBInput
                id=""
                label="First name"
      
                onChange={(e) => setStudent({ ...student, fname: e.target.value })}
              />
            </MDBCol>
            <MDBCol>
              <MDBInput
                id=""
                label="Last name"
             
                onChange={(e) => setStudent({ ...student, lname: e.target.value })}
              />
            </MDBCol>
          </MDBRow>
          <MDBInput
            className="mb-4"
            type="tel"
            id=""
            label="Phone number"
       
            onChange={(e) => setStudent({ ...student, phone: e.target.value })}
          />
          <MDBInput
            className="mb-4"
            type="email"
            id=""
            label="Email address"
         
            onChange={(e) => setStudent({ ...student, email: e.target.value })}
          />
          <Dropdown className="mb-4">
          <Dropdown.Toggle variant="warning w-100 text-white d-flex justify-content-between" id="dropdown-basic">
              Dropdown Button
            </Dropdown.Toggle>
            <Dropdown.Menu className="w-100">
              <Dropdown.Item
                href="#/action-1"
                variant="transparent warning"
                onClick={() => setStudent({ ...student, department: "Traditional" })}
              >
                Traditional
              </Dropdown.Item>
              <Dropdown.Item
                href="#/action-2"
                onClick={() => setStudent({ ...student, department: "Digital" })}
              >
                Digital Art
              </Dropdown.Item>
              <Dropdown.Item
                href="#/action-3"
                onClick={() => setStudent({ ...student, department: "Music" })}
              >
                Music
              </Dropdown.Item>
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
    
          <MDBBtn
            type="button"  // Change this to "submit" if you want to trigger form submission
            onClick={handleAddStudent}
            className="mt-3 mb-4 bg-warning position-absolute border border-0 text-start"
          >
            Next
          </MDBBtn>
        </form>
      </div>
    </div>
  );
}

export default PaymentForm;

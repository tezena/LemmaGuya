import React from "react";
import { ReactDOM } from "react";
import {
    MDBInput,
    MDBCol,
    MDBRow,
    MDBCheckbox,
    MDBBtn,
    MDBIcon
}  from 'mdb-react-ui-kit';

function MessageUs() {
    return (
        <div className="row ">
            <div className="col-md-5 d-none  w-50 pt-5 d-sm-block" style={{backgroundImage:'url(assets/images/img5.jpg)', backgroundSize:"cover",backgroundPosition:"center",height:"620px"}}>
                {/* <img src="assets/images/img5.jpg" className="h-100 w-100"/> */}
                <h1 className="text-white fs-1 pt-5 mt-5">Message us</h1>
                 <h6 className="text-white fw-light px-5 w-75 mx-auto mt-2">sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</h6>
            </div>
            <div className="col-md-1">

            </div>
            <div className="col-12 col-md-4 p-5">
                <h3 className="mx-auto pb-4 fw-normal">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3>
            <form>
            <MDBRow className='mb-4'>
              <MDBCol>
                <MDBInput id='' label='First name' />
              </MDBCol>
              <MDBCol>
                <MDBInput id='' label='Last name' />
              </MDBCol>
            </MDBRow>
            <MDBInput className='mb-4' type='email' id='' label='Email address' />
            <MDBInput className='mb-4' type='tel' id='' label='phone' />
            <MDBInput className='mb-4 p-5  ' textarea id='' rows={4} label='Message' />

      
            <MDBCheckbox
              wrapperClass='d-flex justify-content-center mb-4'
              id='form3Example5'
              label='Subscribe to our newsletter'
              defaultChecked
            />
      
            <MDBBtn type='submit' className='mb-4' block>
              Send
            </MDBBtn>
      
          </form>

            </div>
            
        </div>
    )
}


export default MessageUs
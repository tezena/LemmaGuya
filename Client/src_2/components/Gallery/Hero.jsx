import React from 'react';
import { Container, Row, Col, Form, FormControl, Button } from 'react-bootstrap';
import InputGroup from 'react-bootstrap/InputGroup';


const HeroSection = () => {
  return (
      <div className="hero-section h-100 text-white d-flex align-items-center hero-background mb-5" style={{
          backgroundImage: 'url(assets/images/img4.jpg)', opacity: 1,
          backgroundPosition: "center", backgroundSize:"cover" }}>
      <Container className='mt-o'>
        <Row className="justify-content-center w-100">
            <h1 className="hero-title display-4 w-100 fw-normal">Art That Speaks to Your Soul</h1>
            <h4 className="hero-subtitle w-100 fw-light">Discover the Unseen, Celebrate the Unconventional</h4>
            <InputGroup className="mb-3 w-50 mt-2">
            <Form.Control
          placeholder=""
          aria-label="search"
                          aria-describedby="basic-addon2"
                          className='bg-white bg-opacity-50 border border-2'
        />
        <Button variant="warning text-light" id="button-addon2"  className='fw-semibold'>
          Search
        </Button>
      </InputGroup>
            <h6 className="fw-light px-5">Immerse yourself in an extraordinary collection of artworks that resonate with your deepest emotions. </h6>
        </Row>
      </Container>
    </div>
  );
};

export default HeroSection;
import React from 'react';
import { Navbar, Nav, NavDropdown, Container, Button } from 'react-bootstrap';

function Navigation() {
  return (
    <Navbar bg="light" expand="lg" className="justify-content-lg-center">
      <Container className='position-relative' >
        <Navbar.Brand href="/">
          <img src="/logo.png" alt="Logo" className="logo-img" />
        </Navbar.Brand>

        <>
        <Navbar.Toggle aria-controls="basic-navbar-nav  bg-black" className='text-black' />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="m-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <NavDropdown title="Artistry and Education" id="basic-nav-dropdown">
              <NavDropdown.Item href="/gallery">Art Gallery</NavDropdown.Item>
              <NavDropdown.Item href="/research">Art Research</NavDropdown.Item>
              <NavDropdown.Item href="/education">Education</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/blog">Blog</Nav.Link>
            <Nav.Link href="/about">About Us</Nav.Link>
            <Nav.Link href="/contact">Contact Us</Nav.Link>
   

            </Nav>
            <Button variant="warning text-light" href='/donate' className=''>Donate</Button>
        </Navbar.Collapse>
        </>
      </Container>
    </Navbar>
  );
}

export default Navigation;

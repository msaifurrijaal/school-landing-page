import React from 'react'
import { Nav, Navbar, Container } from 'react-bootstrap';

const NavbarComponent = () => {
  return (
    <div>
        <Navbar className='custom-nav-color fixed-top' variant='dark'>
        <Container>
          <Navbar.Brand href="#home">Nusantara High School</Navbar.Brand>
          <Nav className="ms-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">School Profile</Nav.Link>
            <Nav.Link href="#pricing">Majors</Nav.Link>
            <Nav.Link href="#pricing">Extracurricular</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default NavbarComponent;

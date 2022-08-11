import React from 'react'
import styled from 'styled-components'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../Images/newlogo.svg'

const Style = styled.div`
  .navbar-light .navbar-nav .nav-link {
    color: #000 !important;
    font-size: 1.8rem !important;
    padding: 0 1rem;
  }
  .btn-outline-success {
    border-radius: 10px;
    color: #fff;
    border: none;
    background: #C40000;
    font-size: 1.8rem;
    padding: 1rem .7rem;
  }
  .life-img {
    width: 90%;
  }
`

function Navigation() {
  return (
   <Style>
      <div>
         <Navbar bg="none" expand="lg" className='py-5'>
      <Container fluid>
        <Navbar.Brand href="#"><img src={logo} alt className='life-img'/></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="mx-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Donate Blood</Nav.Link>
            <Nav.Link href="#action2">Request Blood</Nav.Link>
            <Nav.Link href="#action3">Get Involved</Nav.Link>
            <Nav.Link href="#action4">Guide</Nav.Link>
            <Nav.Link href="#action5">About</Nav.Link>
          </Nav>
            <Button variant="outline-success">Login or Register</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
   </Style>
  )
}

export default Navigation
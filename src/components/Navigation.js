import React from 'react'
import {Link} from 'react-router-dom';
import '../App.css';
import { Container} from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import {AiOutlineSearch} from 'react-icons/ai'
import logo from '../Photos/logo2c.png'
import logo2 from '../Photos/logo2.png'

import '../pages/js/navbar'

export default function Navigation() {
    return (
        <div >
<Navbar className="navbar" expand="lg">
  <Container fluid>
    <Navbar.Brand><img src={logo2} class="logo-img" href="/"></img></Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '80px' }}
        navbarScroll
      >
        <Nav.Link style={{color:"white"}} href="/">Home</Nav.Link>
        <Nav.Link style={{color:"white"}} href="/browseopp" >Browse Opportunities</Nav.Link>
       
      </Nav>
      <Nav.Link style={{color:"white"}} href="/postopp" className="d-flex">Post an opportunity</Nav.Link>
      <Nav.Link style={{color:"white"}} href="/subscribe" className="d-flex">Subscribe</Nav.Link>
      {/* <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-1"
          aria-label="Search"
        />
        <Button variant="secondary"><AiOutlineSearch/></Button>
      </Form> */}
          <Nav.Link className="searchbar d-flex">
          <Button variant="secondary" className="fa fa-search"  aria-hidden="true"><AiOutlineSearch/></Button>
        {/* <i class="fa fa-search" aria-hidden="true"></i> */}
         <div className="togglesearch">
            <input type="text" placeholder=""/>
            <input type="button" value="Search"/>
        </div>
    </Nav.Link>
    </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
        
    );
}


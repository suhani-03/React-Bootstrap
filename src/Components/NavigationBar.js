import React from 'react';
import { Nav, Navbar, FormControl, Form } from 'react-bootstrap';
import styled from 'styled-components';
import logo1 from './logo1.png';


const Styles = styled.div`
  .navbar {
    background-color: #222;
  }

  a, .navbar-brand, .navbar-nav .nav-link {
      color: lavender;

      &:hover {
          color: white;
      }
  }
  
  `;

  export const NavigationBar = () => (
      <Styles>
        
          <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
              <Navbar.Brand href="/">
                  <img alt="" src={logo1} width="30" height="30" className="d-inline-block align-top" />
                  {'YouTube'}
                  </Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav"></Navbar.Toggle>
              <Navbar.Collapse id="responsive-navbar-nav">
                  <Nav className="ml-auto"></Nav>
                  <Form inline>
                      <FormControl type="text" placeholder="Search" className="form-control" />
                      <button className="btn btn-outline-secondary">Search</button>
                  </Form>
              </Navbar.Collapse>
          </Navbar>
        </Styles>
  )
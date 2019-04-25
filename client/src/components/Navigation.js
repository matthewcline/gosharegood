import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavItem from 'react-bootstrap/NavItem';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import About from './About';
import { LinkContainer } from "react-router-bootstrap";

const Navigation = ({location}) => {
    return (
      <Navbar expand="lg">
        <Navbar.Brand>
          <Link to="/">
            <Image 
              src="https://raw.githubusercontent.com/matthewcline/gosharegood/master/client/public/imgs/gsg.png" 
              fluid
              style={{height: '30px'}}
            />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-between">
          <Nav className="mr-auto">
            <LinkContainer to="/about">
              <Button>About</Button>
            </LinkContainer>
            <LinkContainer to="/login">
              <Button>Login</Button>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
}

export default Navigation;
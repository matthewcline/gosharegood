import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavItem from 'react-bootstrap/NavItem';
import Image from 'react-bootstrap/Image';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import About from './About';

const Navigation = ({location}) => {
    return (
      <Navbar expand="lg">
        <Navbar.Brand href="/">
          <Image 
            src="https://raw.githubusercontent.com/matthewcline/gosharegood/master/client/public/imgs/gsg.png" 
            fluid
            style={{height: '30px'}}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-between">
          <Nav className="mr-auto">
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/login">Login</Nav.Link>
            <Nav.Link href="#link">Signup</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/login">Login</Link>
      </Navbar>
    );
}

export default Navigation;
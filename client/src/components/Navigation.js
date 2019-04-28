import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavItem from 'react-bootstrap/NavItem';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import About from './About';
import { LinkContainer } from "react-router-bootstrap";
import './Navigation.css';

const Navigation = ({location}) => {
    return (
      <Container className="nav-container">
        <Navbar expand="lg" className="navbar">
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
            <Nav>
              <LinkContainer to="/about" className="link-container" style={{marginLeft: '15px'}}>
                <NavItem>About</NavItem>
              </LinkContainer>
            </Nav>
            <Nav>
              <LinkContainer to="/login" className="link-container" style={{marginRight: '25px'}}>
                <NavItem>Login</NavItem>
              </LinkContainer>
              <LinkContainer to="/signup" className="link-container">
                <NavItem>Signup</NavItem>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    );
}

export default Navigation;
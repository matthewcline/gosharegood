import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavItem from 'react-bootstrap/NavItem';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { LinkContainer, IndexLinkContainer } from "react-router-bootstrap";
import './Navigation.css';
// import { AnimatedRoute } from 'react-router-transition';
import axios from 'axios';

class Navigation extends React.Component {
  state = { redirectTo: null }

  logout = (event) => {
    axios
      .get('http://localhost:3001/logout')
      .then(response => {
        if (response.status === 200) {
          this.props.updateUser({
            loggedIn: false,
            username: null,
            votes: null
          });
        }
      }).catch(error => {
          console.log('Logout error')
      })
  }

  getLoginLinks() {
    if (this.props.loggedIn) {
      return (
        <Nav>
          <LinkContainer to="/about" className="link-container" style={{marginRight: '25px'}}>
            <NavItem>{ this.props.username }</NavItem>
          </LinkContainer>
          <IndexLinkContainer to="/" className="link-container" onClick={this.logout}>
            <NavItem>Logout</NavItem>
          </IndexLinkContainer>
        </Nav>
      );
    }
    return (
      <Nav>
        <LinkContainer to="/login" className="link-container" style={{marginRight: '25px'}}>
          <NavItem>Login</NavItem>
        </LinkContainer>
        <LinkContainer to="/signup" className="link-container">
          <NavItem>Signup</NavItem>
        </LinkContainer>
      </Nav>
    );
  } 
  
  render() {
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
            {this.getLoginLinks()}
          </Navbar.Collapse>
        </Navbar>
      </Container>
    );
  }
}

export default Navigation;
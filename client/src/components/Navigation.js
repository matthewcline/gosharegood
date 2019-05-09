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
  state = { 
    redirectTo: null
  }

  logout = (event) => {
    axios
      .get('/logout')
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
          <LinkContainer to="#" className="link-container" style={{marginRight: '25px'}}>
            <NavItem>Signed in as { this.props.username }</NavItem>
          </LinkContainer>
          <IndexLinkContainer to="/posts" className="link-container" onClick={this.logout}>
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

  listenScrollEvent = e => {
    if(this.props.location.pathname === '/about') {
      const aboutNavElement = document.querySelector(".about-nav");
      if (window.scrollY > 200) {
        aboutNavElement.classList.add("scrolled");
        aboutNavElement.classList.remove("navbar-dark");
      } else {
        aboutNavElement.classList.remove("scrolled");
      }
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.listenScrollEvent)
  }
  
  render() {
    return (
      // <Container 
      //   className={"nav-container " + 
      //     (this.props.location.pathname === '/about' ? 'fixed-top' : '')
      //   }
      // >
        <Navbar 
          expand="lg" 
          className=
            {
              this.props.location.pathname === '/about' ? 'about-nav fixed-top navbar-dark' : 'navbar'
            }
        >
          <Navbar.Brand>
            <Link to="/posts">
              <Image 
                src="https://raw.githubusercontent.com/matthewcline/gosharegood/master/client/public/imgs/gsglogo.png" 
                fluid
                style={{height: '70px'}}
              />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-between" style={{paddingTop: '10px'}}>
            <Nav>
              <LinkContainer to="/about" className="link-container ml-lg-3">
                <NavItem>About</NavItem>
              </LinkContainer>
            </Nav>
            {this.getLoginLinks()}
          </Navbar.Collapse>
        </Navbar>
      // </Container>
    );
  }
}

export default Navigation;
import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import posed from 'react-pose';
import './About.css';
import PosedButton from './PosedButton';

const About = () => {
  return (
    <div className="about-container">
      <div className="video-div" style={{backgroundColor: 'black'}}>
        <video style={{opacity: '0.7', display: 'block'}} playsInline={true} autoPlay={true} muted={true} loop={true}>
          <source src="https://raw.githubusercontent.com/matthewcline/gosharegood/master/client/public/imgs/gsglandingpage.mp4" type="video/mp4"></source>
        </video>
        <div className="overlay">
            {/* <h1 style={{color: 'white'}}>Go. Share. Good.</h1> */}
            <h1 style={{color: 'white'}}>Go.</h1>
            <h1 style={{color: 'white'}}>Share.</h1>
            <h1>
              <Image 
                src="https://raw.githubusercontent.com/matthewcline/gosharegood/master/client/public/imgs/good.png" 
                fluid 
              />
            </h1>
            <Link style={{textDecoration: 'none'}} to="/posts" >
              <PosedButton className="share-btn-homepage rounded">View Posts</PosedButton>
            </Link>
        </div>
      </div>
      <div 
        className="justify-content-center align-items-center text-center"
        style={{display: 'flex', paddingLeft: '10px', paddingRight: '10px', margin: 'auto', width: '100%', height: '200px', color: 'rgb(22,32,64)', backgroundColor: 'rgb(255, 217, 112, 0.9)'}}
      >
        <h4>Go Share Good is a place where anyone can share good news from around the world.</h4>
      </div>
      <div style={{backgroundColor: 'rgba(241, 238, 238, 0.726)'}}>
        <Container className="about-container-text">
          <Row className="justify-content-center">
            <Col xs={12} lg={10}>
              <div className="about-container-inner-text rounded">
                <Row className="justify-content-center text-center">
                  <Col xs={10} lg={10}>
                    <h3 className="text-center rounded-pill" style={{width: '70%', padding: '15px', color: '#e91e63', backgroundColor: 'rgb(255, 217, 112, 0.9)', margin: 'auto'}}>How it works:</h3>
                    <h4 className="mt-5">1. Share an article that inspires you</h4>
                    <h4 className="mt-2">or</h4>
                    <h4 className="mt-2">a personal anecdote of good you witnessed</h4>
                    <h4 className="mb-5 mt-5">2. Vote for your favorite posts! </h4>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
          <Row className="py-5 justify-content-center text-center">
            <Col xs={12} lg={8}>
              <h3 className="text-center rounded-pill" style={{width: '80%', padding: '15px', color: '#e91e63', backgroundColor: 'rgb(255, 217, 112, 0.9)', margin: 'auto'}}><a href="/signup" style={{color: '#4fc3f7'}}>Sign up</a> to start sharing good</h3>            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default About;
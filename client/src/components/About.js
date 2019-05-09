import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import './About.css';

const About = () => {
  return (
    <div className="about-container">
      <div class="video-div" style={{backgroundColor: 'black'}}>
        <video style={{width: '100%', opacity: '0.7', display: 'block'}} playsInline={true} autoPlay={true} muted={true} loop={true}>
          <source src="https://raw.githubusercontent.com/matthewcline/gosharegood/master/client/public/imgs/gsglandingpage.mp4" type="video/mp4"></source>
        </video>
        <div class="overlay">
            {/* <h1 style={{color: 'white'}}>Go. Share. Good.</h1> */}
            <h1 style={{color: 'white'}}>Go. Share.</h1>
            <h1>
              <Image 
                src="https://raw.githubusercontent.com/matthewcline/gosharegood/master/client/public/imgs/good.png" 
                fluid 
              />
            </h1>
            <p style={{color: 'white'}}>Where you see good news happening around the world.</p>
            <button type="submit">Share</button>
        </div>
      </div>
      <Container className="about-container-text">
        <Row className="justify-content-center text-center">
          <Col xs={12} lg={5}>
            <h1>Go. Share.</h1>
            <h1>
              <Image 
                src="https://raw.githubusercontent.com/matthewcline/gosharegood/master/client/public/imgs/good.png" 
                fluid 
              />
            </h1>
          </Col>
        </Row>
        <Row className="justify-content-center text-center">
          <Col xs={12} lg={8}>
            <div className="about-container-inner-text rounded-pill">
            <h3 className="text-center rounded-pill" style={{width: '80%', padding: '15px', color: 'blue', backgroundColor: 'rgb(255, 217, 112, 0.9)', margin: 'auto'}}>Looking for good news in the world?</h3>

              {/* <h3>Looking for good news in the world?</h3> */}
              <h5 className="mt-4">You've come to the right place!  On Go Share Good, share good things happening in the world.</h5>
            </div>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col xs={12} lg={10}>
            <div className="about-container-inner-text rounded-pill">
              <Row className="justify-content-center">
                <Col xs={10} lg={10}>
                  <h3 className="text-center rounded-pill" style={{width: '50%', padding: '15px', color: 'blue', backgroundColor: 'rgb(255, 217, 112, 0.9)', margin: 'auto'}}>How it works:</h3>
                  <h5 className="mt-5">1. Find an article that inspires you or highlights progress in the world</h5>
                  <h5 className="ml-3 mt-2">or </h5>
                  <h5 className="ml-3 mt-2">   Share a personal anecdote of good you witnessed</h5>
                  <h5 className="mt-3">2. Share the post by clicking on the plus(+) icon</h5>
                  <h5 className="mb-5 mt-3">3. Vote for your favorite posts! </h5>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
        <Row className="pb-5 justify-content-center text-center">
          <Col xs={12} lg={8}>
            <div className="about-container-inner-text rounded-pill">
            <h3 className="text-center rounded-pill" style={{width: '80%', padding: '15px', color: 'blue', backgroundColor: 'rgb(255, 217, 112, 0.9)', margin: 'auto'}}><a href="/signup" style={{color: 'rgb(231, 48, 134)'}}>Sign up</a> to start sharing good</h3>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;
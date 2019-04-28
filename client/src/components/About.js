import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import './About.css';

const About = () => {
  return (
    <Container className="about-container text-center">
      <h1>Go Share</h1>
      <h1>
        <Image 
          src="https://raw.githubusercontent.com/matthewcline/gosharegood/master/client/public/imgs/good.png" 
          fluid 
        />
      </h1>
      <h5 className="mt-5">Looking for positive news report or feel-good stories?  On Go Share Good, members report
        the good things that are happening in their world.
      </h5>
      <h4 className="mt-4"><a href="/signup">Sign up</a> to start sharing good!</h4>
    </Container>
  );
}

export default About;
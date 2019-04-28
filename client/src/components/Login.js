import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Login.css';

const Login = () => {
  return (
    <div className="login-container">
      <Container className="login-form-container">
        <Row className="justify-content-center mb-4">
          <Col xs={10} lg={6}>
            <h1 className="text-center">Login</h1>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col xs={10} lg={6}>
            <Form action="http://localhost:3001/login" method="POST">
              <Form.Group controlId="formBasicUsername" className="mb-4">
                {/* <Form.Label>Username</Form.Label> */}
                <Form.Control type="text" name="username" placeholder="Username" required/>
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                {/* <Form.Label>Password</Form.Label> */}
                <Form.Control type="password" name="password" placeholder="Password" />
              </Form.Group>
              
              <Button variant="primary" type="submit">
                Login
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );

}

export default Login;
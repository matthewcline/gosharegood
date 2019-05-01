import React from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import InfoMessage from './InfoMessage';
import './Login.css';

class Login extends React.Component {
  state = { 
    username: '', 
    password: '', 
    redirectTo: null,
    errorMessage: null,
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.state.username.length === 0) {
      this.setState({ errorMessage: 'Please enter username! '});
    } else if (this.state.password.length === 0) {
      this.setState({ errorMessage: 'Please enter password! '});
    } else {
      const params = new URLSearchParams();
      params.append('username', this.state.username);
      params.append('password', this.state.password);
      axios
        .post('http://localhost:3001/login', params)
        .then(response => {
          if (response.status === 200) {
              this.props.updateUser({
                  loggedIn: true,
                  username: response.data.username
              })
              this.setState({
                  redirectTo: '/'
              })
          }
        }).catch(err => {
          console.log(`error logging in: ${err}`);
        });
    }
  }

  render() {
    if (this.state.redirectTo) {
      return <Redirect to={{ pathname: this.state.redirectTo }} />
    } else {
      return (
        <div className="login-container">
          <Container className="login-form-container">
            <Row className="justify-content-center mb-4">
              <Col xs={10} lg={6}>
                <h1 className="text-center">Login</h1>
              </Col>
            </Row>
            {this.state.errorMessage && 
              <InfoMessage type={'error'} text={this.state.errorMessage} />
            }
            <Row className="justify-content-center">
              <Col xs={10} lg={6}>
                <Form>
                  <Form.Group controlId="formBasicUsername" className="mb-4">
                    <Form.Control 
                      type="text" 
                      name="username" 
                      placeholder="Username" 
                      value={this.state.username}
                      onChange={this.handleChange}
                    />
                  </Form.Group>
                  <Form.Group controlId="formBasicPassword">
                    <Form.Control 
                      type="password" 
                      name="password" 
                      placeholder="Password"
                      value={this.state.password}
                      onChange={this.handleChange}
                    />
                  </Form.Group>
                  <Button onClick={this.handleSubmit} variant="primary" type="submit">
                    Login
                  </Button>
                </Form>
              </Col>
            </Row>
          </Container>
        </div>
      )
    }
  }
}

export default Login;
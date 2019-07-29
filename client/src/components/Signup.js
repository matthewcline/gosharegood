import React from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import InfoMessage from './InfoMessage';
import PosedButton from './PosedButton';
import './Signup.css';

class Signup extends React.Component {
  state = { 
    username: '', 
    location: '',
    password: '', 
    confirmPassword: '',
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
      this.setState({ errorMessage: 'Please enter a username' });
    } else if (this.state.password.length === 0) {
      this.setState({ errorMessage: 'Please enter a password' });
    } else if (this.state.confirmPassword.length === 0) {
      this.setState({ errorMessage: 'Please confirm password' });
    } else if (this.state.password !== this.state.confirmPassword) {
      this.setState({ 
        password: '',
        confirmPassword: '',
        errorMessage: 'Password and confirmed password do not match.  Please try again.' 
      });
    } else {
      const params = new URLSearchParams();
      params.append('username', this.state.username);
      params.append('location', this.state.location);
      params.append('password', this.state.password);
      axios
        .post('/signup', params)
        .then(response => {
          if (response.status === 200) {
              this.props.updateUser({
                  loggedIn: true,
                  username: response.data.user.username,
                  location: response.data.user.location,
                  votes: response.data.user.votes
              })
              this.setState({
                  redirectTo: '/posts'
              })
          }
        }).catch(err => {
            this.setState({ 
              username: '', 
              location: '',
              password: '', 
              confirmPassword: '',
              errorMessage: err.response.data.message 
            });
        });
    }
  }

  render() {
    if (this.state.redirectTo) {
      return (
        <Redirect 
          to={{ 
            pathname: this.state.redirectTo
            // state: {
            //   displayMessage: {
            //     type: 'greeting',
            //     message: `Welcome, ${this.state.username}` 
            //   }
            // }
          }} 
        />
      );
    } else {
      return (
        <div className="signup-container">
          <Container className="signup-container-form">
            {this.state.errorMessage && 
              <div style={{width: '80%', margin: 'auto'}}>
                <InfoMessage type={'error'} text={this.state.errorMessage} />
              </div>
            }
            <Row className="justify-content-center mb-4">
              <Col xs={10} lg={6}>
              </Col>
            </Row>
            <Row className="justify-content-center">
              <Col xs={10} lg={6}>
                <Form>
                  <Form.Group controlId="formBasicUsername" className="mb-4">
                    <Form.Label>Please enter a username</Form.Label>
                    <Form.Control 
                      type="text" 
                      name="username" 
                      placeholder="Username" 
                      value={this.state.username}
                      onChange={this.handleChange}
                    />
                  </Form.Group>
                  <Form.Group controlId="formBasicLocation" className="mb-4">
                    <Form.Label>City/Region (optional)</Form.Label>
                    <Form.Control 
                      type="text" 
                      name="location" 
                      placeholder="example: Los Angeles, CA" 
                      value={this.state.location}
                      onChange={this.handleChange}
                    />
                  </Form.Group>
                  <Form.Group controlId="formBasicPassword">
                    <Form.Label>Please enter a password</Form.Label>
                    <Form.Control 
                      type="password" 
                      name="password" 
                      placeholder="Password"
                      value={this.state.password}
                      onChange={this.handleChange}
                    />
                  </Form.Group>
                  <Form.Group controlId="formBasicConfirmPassword">
                    <Form.Label>Please confirm password</Form.Label>
                    <Form.Control 
                      type="password" 
                      name="confirmPassword" 
                      placeholder="Password"
                      value={this.state.confirmPassword}
                      onChange={this.handleChange}
                    />
                  </Form.Group>
                  <div className="add-post-btn justify-content-center mt-4">
                    <PosedButton className="share-btn rounded" onClick={this.handleSubmit}>
                      Sign Up
                    </PosedButton>
                  </div>
                </Form>
              </Col>
            </Row>
          </Container>
        </div>
      )
    }
  }
}

export default Signup;
import React from 'react';
import { Redirect } from 'react-router-dom';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Login.css';
import axios from 'axios';

class FeedbackForm extends React.Component {
  state = { 
    description: '',
    redirectTo: null 
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const params = new URLSearchParams();
    params.append('description', this.state.description);
    axios
      .post('/feedback', params)
      .then(response => {
        if (response.status === 200) {
            this.setState({
                redirectTo: '/'
            })
        }
      }).catch(err => {
        console.log(`error submitting feedback: ${err}`);
      });
  }

  render() {
    if (this.state.redirectTo) {
      return <Redirect to={{ pathname: this.state.redirectTo }} />
    } else {
      return (
        <div>
          <Container>
            <Row className="justify-content-center mb-4">
              <Col xs={10} lg={6}>
                <Link to="/">
                  Back
                </Link>
              </Col>
            </Row>
            <Row className="justify-content-center mb-4">
              <Col xs={10} lg={6}>
                <h1 className="text-center">Submit Feedback</h1>
              </Col>
            </Row>
            <Row className="justify-content-center">
              <Col xs={10} lg={6}>
                <Form>
                  <p>Please share your thoughts about how this site can be improved.  Would you like to see any new features added?  Would you change anything currently on the site?  Your feedback is greatly appreciated!</p>
                  <Form.Group controlId="formBasicDescription" className="mb-4">
                    <Form.Control 
                      as="textarea" 
                      rows="6" 
                      name="description" 
                      value={this.state.description}
                      onChange={this.handleChange}
                    />
                  </Form.Group>
                  <Button onClick={this.handleSubmit} variant="primary" type="submit">
                    Submit
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

export default FeedbackForm;
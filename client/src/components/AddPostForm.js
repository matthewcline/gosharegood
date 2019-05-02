import React from 'react';
import { Redirect } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import InfoMessage from './InfoMessage';
import './Login.css';
import axios from 'axios';
// axios.defaults.withCredentials = true;

class AddPostForm extends React.Component {
  state = { 
    title: '', 
    url: '', 
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
    params.append('title', this.state.title);
    params.append('url', this.state.url);
    params.append('description', this.state.description);
    axios
      .post('http://localhost:3001/posts', params)
      .then(response => {
        console.log('response: ')
        console.log(response)
        if (response.status === 200) {
            this.setState({
                redirectTo: '/'
            })
        }
      }).catch(err => {
        console.log(`error creating post: ${err}`);
      });
  }

  render() {
    if (!this.props.loggedIn) {
      return <InfoMessage type={'error'} text={'You must be logged in to do that.'} />
    }
    if (this.state.redirectTo) {
      return <Redirect to={{ pathname: this.state.redirectTo }} />
    } else {
      return (
        <div>
          <Container>
            <Row className="justify-content-center mb-4">
              <Col xs={10} lg={6}>
                <h1 className="text-center">New Post</h1>
              </Col>
            </Row>
            <Row className="justify-content-center">
              <Col xs={10} lg={6}>
                <Form>
                  <Form.Group controlId="formBasicTitle" className="mb-4">
                    <Form.Label>Title</Form.Label>
                    <Form.Control 
                      type="text" 
                      name="title" 
                      placeholder="title"
                      value={this.state.title}
                      onChange={this.handleChange}
                      required
                    />
                  </Form.Group>
                  <Form.Group controlId="formBasicURL" className="mb-4">
                    <Form.Label>URL</Form.Label>
                    <Form.Control 
                      type="text" 
                      name="url" 
                      placeholder="link to story"
                      value={this.state.url}
                      onChange={this.handleChange}
                    />
                  </Form.Group>
                  <Form.Group controlId="formBasicDescription" className="mb-4">
                    <Form.Label>Description</Form.Label>
                    <Form.Control 
                      as="textarea" 
                      rows="3" 
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

export default AddPostForm;
import './PostList.css'
import React from 'react';
import Post from './Post';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class PostList extends React.Component {
  
  getPosts() {
    console.log("this.props.posts", this.props.posts);
    const posts = this.props.posts.map((post) => { // it's possible to use destructuring right here  
    return (
        <Post  
          key={post._id} 
          post={post} 
          loggedIn={this.props.loggedIn}
          username={this.props.username}
          voted={ 
            (this.props.loggedIn && (this.props.votes.indexOf(post._id) !== -1)) 
            ? true : false 
          }
        />
      );
      // Note: assign a key to the root element
      // So if the img tag was wrapped in a div, then the key would be an 
      // attribute on the div element instead of the img tag
    });
    return posts;
  }

  render() {
    return (
      <Container className="post-list rounded">
        <Row>
          <Col xs={12}>
            {this.getPosts()}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default PostList;
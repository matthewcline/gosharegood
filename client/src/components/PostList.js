import './PostList.css'
import React from 'react';
import Post from './Post';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import axios from 'axios';

class PostList extends React.Component {

  getPosts() {
    const posts = this.props.posts.map((post) => { // it's possible to use destructuring right here
      return <Post key={post._id} post={post} />
      // Note: assign a key to the root element
      // So if the img tag was wrapped in a div, then the key would be an 
      // attribute on the div element instead of the img tag
    });
    return posts;
  }

  render() {
    return (
      <Container>
        <div className="text-center">
          <Link to="/posts/new">
            <Fab color="secondary" aria-label="Add" className="add-post-btn">
              <AddIcon />
            </Fab>
          </Link>
        </div>
        <Container className="post-list">
          <Row>
            <Col xs={12}>
              {this.getPosts()}
            </Col>
          </Row>
        </Container>
      </Container>
    );
  }
}

export default PostList;
import React from 'react';
import PostList from './PostList';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import {
  AwesomeButton,
  AwesomeButtonProgress,
  AwesomeButtonSocial,
} from 'react-awesome-button';
import 'react-awesome-button/dist/styles.css';
import './Home.css';
import posed from 'react-pose';

const Button = posed.div({
  hoverable: true,
  pressable: true,
  init: {
    scale: 1.6,
    boxShadow: '0px 0px 0px rgba(0,0,0,0)'
  },
  hover: {
    scale: 1.75,
    boxShadow: '0px 5px 10px rgba(0,0,0,0.2)'
  },
  press: {
    scale: 2.0,
    boxShadow: '0px 2px 5px rgba(0,0,0,0.1)'
  }
});

class Home extends React.Component {
  state = { 
    posts: []
  };

  componentDidMount() {
    fetch('/api/posts')
      .then(res => res.json())
      .then(posts => this.setState({ posts }));
  }

  addPostClicked = (event) => {
    event.preventDefault();
    if (!this.props.loggedIn) {
      console.log("not logged in!");
    }
  }

  render() {
    return (
      <div>
        <p className="text-center mb-5">
          Note: this is a beta release.  Please share your feedback  
          <Link className="ml-1" to="feedback" alt="submit-feedback">
            here
          </Link>!
          
        </p>
        <div className="add-post-btn justify-content-center">
          <Link style={{textDecoration: 'none'}} to="/posts/new" >
            <Button id="share-btn" className="rounded" onClick={this.onAddPostFormOpen}>
              Add Post
            </Button>
          </Link>
        </div>
        <hr style={{width: '60%'}}></hr>
        <PostList 
          posts={this.state.posts} 
          loggedIn={this.props.loggedIn}
          username={this.props.username}
          votes={this.props.votes}
        />
      </div>
    );
  }
}

export default Home;
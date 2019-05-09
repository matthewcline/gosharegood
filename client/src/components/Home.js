import React from 'react';
import PostList from './PostList';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import 'react-awesome-button/dist/styles.css';
import './Home.css';
import posed from 'react-pose';
import PosedButton from './PosedButton';


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
            <PosedButton className="share-btn rounded" onClick={this.onAddPostFormOpen}>
              Add Post
            </PosedButton>
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
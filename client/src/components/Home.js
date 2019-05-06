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
import './Home.css'

class Home extends React.Component {
  state = { 
    posts: []
  };

  componentDidMount() {
    fetch('http://localhost:3001/api/posts')
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
        <div className="add-post-btn justify-content-center">
          <Link to="/posts/new" >
            <Fab color="secondary" aria-label="Add">
              <AddIcon onClick={this.onAddPostFormOpen} />
            </Fab>
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
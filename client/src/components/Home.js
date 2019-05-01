import React from 'react';
import PostList from './PostList';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import './Home.css'

class Home extends React.Component {
  state = { posts: [] };

  componentDidMount() {
    fetch('http://localhost:3001/api/posts')
      .then(res => res.json())
      .then(posts => this.setState({ posts }));
  }

  render() {
    return (
      <div className="home">
        <div className="text-center add-post-btn">
          <Link to="/posts/new">
            <Fab color="secondary" aria-label="Add">
              <AddIcon />
            </Fab>
          </Link>
        </div>
        <PostList posts={this.state.posts} />
      </div>
    );
  }
}

export default Home;
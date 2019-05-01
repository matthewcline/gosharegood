import React from 'react';
import PostList from './PostList';
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
        <PostList posts={this.state.posts} />
      </div>
    );
  }
}

export default Home;
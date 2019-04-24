import React from 'react';
import PostList from './PostList';

class Home extends React.Component {
  state = { posts: [] };

  componentDidMount() {
    fetch('http://localhost:3001/api/posts')
      .then(res => res.json())
      .then(posts => this.setState({ posts }));
  }

  render() {
    return (
      <PostList posts={this.state.posts} />
    );
  }
}

export default Home;
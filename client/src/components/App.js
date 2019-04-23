import React from 'react';
import PostList from './PostList';

class App extends React.Component {
  state = { posts: [] };

  componentDidMount() {
    fetch('http://localhost:3001/api/posts')
      .then(res => res.json())
      .then(posts => this.setState({ posts }));
  }

  render() {
    console.log("Posts: ", this.state.posts);
    return (
      <div>
        <PostList posts={this.state.posts} />
      </div>
    );
  }
}

export default App;

import React from 'react';
import './App.css';

class App extends React.Component {
  state = { posts: [] };

  componentDidMount() {
    fetch('/api/posts')
      .then(res => res.json())
      .then(customers => this.setState({customers}, () => console.log('Customers fetched...', customers)));
  }

  render() {
    return (
      <div>{this.state.posts.length}</div>
    );
  }
}

export default App;

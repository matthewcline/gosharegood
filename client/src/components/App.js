import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Navigation from './Navigation';
import PostList from './PostList';
import Container from 'react-bootstrap/Container';
import Home from './Home';
import About from './About';
import Login from './Login';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <Router>
        <Container>
          <Navigation />

          <Route exact path="/" component={Home}/>
          <Route path="/about" component={About} />
          <Route path="/login" component={Login} />
        </Container>
      </Router>
    );
  }
}

export default App;

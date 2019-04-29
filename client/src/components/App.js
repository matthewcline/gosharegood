import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Navigation from './Navigation';
import PostList from './PostList';
import Container from 'react-bootstrap/Container';
import Home from './Home';
import About from './About';
import Login from './Login';
import Signup from './Signup';
import './App.css';

class App extends React.Component {
  state = { loggedIn: false, username: null };

  updateUser = (stateObj) => {
    this.setState(stateObj);
  }

  render() {
    console.log("this.state.loggedIn: ", this.state.loggedIn);
    console.log("this.state.username: ", this.state.username);
    return (
      <Router>
          <Navigation />
          <Route exact path='/' component={Home}/>
          <Route path='/posts' component={Home}/>
          <Route path='/about' component={About} />
          <Route 
            path='/login'
            render={() => <Login updateUser={this.updateUser} />}
          />
          <Route path='/signup' component={Signup} />
      </Router>
    );
  }
}

export default App;

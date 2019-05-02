import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import { AnimatedRoute } from 'react-router-transition';
import Navigation from './Navigation';
import Home from './Home';
import About from './About';
import Login from './Login';
import Signup from './Signup';
import AddPostForm from './AddPostForm';
import './App.css';
import axios from 'axios';
axios.defaults.withCredentials = true;

class App extends React.Component {
  state = { 
    loggedIn: false, 
    username: null
  };

  componentDidMount() {
    this.getUser();
  }

  getUser = () => {
    axios
      .get('http://localhost:3001/user')
      .then(response => {
        if (response.data.user) {
          this.setState({ loggedIn: true, username: response.data.user.username })
        }
      }).catch(err => {
        console.log(`error getting user: ${err}`);
      });
  }

  updateUser = (stateObj) => {
    this.setState(stateObj);
  }

  render() {
    return (
      <Router>
          <Navigation 
            updateUser={this.updateUser} 
            loggedIn={this.state.loggedIn} 
            username={this.state.username} 
          />
          <Route exact path="/" render={() => (
              <Redirect to="/posts"/>
          )}/>
          <Route 
            path='/posts/new'
            render={() => 
              <AddPostForm loggedIn={this.state.loggedIn} />}
          />
          <Route 
            path='/posts'
            render={() => <Home loggedIn={this.state.loggedIn} />}
          />
          <Route path='/about' component={About} />
          <Route 
            path='/login'
            render={() => <Login updateUser={this.updateUser} />}
          />
          <Route 
            path='/signup' 
            render={() => <Signup updateUser={this.updateUser} />}
          />
      </Router>
    );
  }
}

export default App;

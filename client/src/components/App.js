import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect, Link } from "react-router-dom";
import Navigation from './Navigation';
import Home from './Home';
import About from './About';
import Login from './Login';
import Signup from './Signup';
import AddPostForm from './AddPostForm';
import EditPostForm from './EditPostForm';
import FeedbackForm from './FeedbackForm';
import './App.css';
import axios from 'axios';
axios.defaults.withCredentials = true;

class App extends React.Component {
  state = { 
    loggedIn: false, 
    username: null,
    votes: null,
  };

  componentDidMount() {
    this.getUser();
  }

  getUser = () => {
    axios
      .get('/user')
      .then(response => {
        if (response.data.user) {
          this.setState({ 
            loggedIn: true, 
            username: response.data.user.username,
            votes: response.data.user.votes
          })
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
      <Route
        render={({ location }) => (  
          <div>
            <Navigation 
              updateUser={this.updateUser} 
              loggedIn={this.state.loggedIn} 
              username={this.state.username} 
              location={location}
            />
            <Route exact path="/" render={() => (
                <Redirect to="/about"/>
              )}
            />
            <Route 
              path='/posts/new'
              render={() => 
                <AddPostForm loggedIn={this.state.loggedIn} />}
            />
            <Route 
              path='/posts/:id/edit'
              render={(props) => 
                <EditPostForm {...props} loggedIn={this.state.loggedIn} />}
            />
            <Route 
              exact
              key="home"
              path='/posts'
              render={() => 
                <Home 
                  loggedIn={this.state.loggedIn}
                  username={this.state.username}
                  votes={this.state.votes}  
                />}
            />
            <Route key="about" path='/about' component={About} />
            <Route 
              path='/login'
              render={() => <Login updateUser={this.updateUser} />}
            />
            <Route 
              path='/signup' 
              render={() => <Signup updateUser={this.updateUser} />}
            />
            <Route 
              path='/feedback' 
              render={() => <FeedbackForm />}
            />
          </div>
        )} 
      />
    );
  }
}

export default App;
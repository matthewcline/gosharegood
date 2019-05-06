import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect, Link } from "react-router-dom";
import { AnimatedRoute } from 'react-router-transition';
import posed, { PoseGroup } from 'react-pose';
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

const RouteContainer = posed.div({
  enter: { opacity: 1, delay: 300, beforeChildren: true },
  exit: { opacity: 0 }
});

class App extends React.Component {
  state = { 
    loggedIn: false, 
    username: null,
    votes: null
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
            />
            <p className="text-center mb-5">
              Note: this is a beta release.  Please share your feedback  
              <Link className="ml-1" to="feedback" alt="submit-feedback">
                here
              </Link>!
              
            </p>
            <Route exact path="/" render={() => (
                <Redirect to="/posts"/>
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
            {/* <PoseGroup>
              <RouteContainer key={location.key}>
                <Switch location={location}> */}
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
                {/* </Switch>
              </RouteContainer>
            </PoseGroup> */}
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
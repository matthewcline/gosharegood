import React from 'react';
import axios from 'axios';

class AddPostForm extends React.Component {

  addPost(event) {
    event.preventDefault();
    const params = new URLSearchParams();
    params.append('username', this.state.username);
    params.append('password', this.state.password);
    axios
      .post('http://localhost:3001/posts/')
      .then(response => {
        console.log('login response: ')
        console.log(response)
        if (response.status === 200) {
            this.props.updateUser({
                loggedIn: true,
                username: response.data.username
            })
            this.setState({
                redirectTo: '/'
            })
        }
      }).catch(err => {
        console.log(`error logging in: ${err}`);
      });
  }

  render() {
    return (
      <h1>form</h1>
    );
  }
}

export default AddPostForm;
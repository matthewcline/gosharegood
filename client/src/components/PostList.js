import './PostList.css'
import React from 'react';
import Post from './Post';
import axios from 'axios';
import AddPostButton from './AddPostButton';

class PostList extends React.Component {

  getPosts() {
    const posts = this.props.posts.map((post) => { // it's possible to use destructuring right here
      return <Post key={post._id} post={post} />
      // Note: assign a key to the root element
      // So if the img tag was wrapped in a div, then the key would be an 
      // attribute on the div element instead of the img tag
    });
    return posts;
  }

  render() {
    return (
      <div>
        <AddPostButton />
        <div className="post-list">{this.getPosts()}</div>
      </div>
    );
  }
}

export default PostList;
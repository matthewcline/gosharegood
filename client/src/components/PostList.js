import './PostList.css'
import React from 'react';
import Post from './Post';

const PostList = props => {
  const posts = props.posts.map((post) => { // it's possible to use destructuring right here
    return <Post key={post._id} post={post} />
    // Note: assign a key to the root element
    // So if the img tag was wrapped in a div, then the key would be an 
    // attribute on the div element instead of the img tag
  });
  console.log("posts here: ", posts);
  return <div className="post-list">{posts}</div>;
}

export default PostList;
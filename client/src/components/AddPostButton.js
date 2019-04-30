import React from 'react';
import AddPostForm from './AddPostForm';

const AddPostButton = () => {
  return <button onClick={ <AddPostForm /> }>Add post</button>
}

export default AddPostButton;
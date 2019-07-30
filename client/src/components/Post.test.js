import React from 'react';
import { create } from 'react-test-renderer';
import Post from './Post';

describe("Post component", () => {
  test("Matches the snapshot", () => {
    const postData = {
      title: 'test',
      url: 'www.test.com',
      votes: 0,
      timeCreated: 0,
      author: {
        username: 'test author'
      }
    };
    const post = create(
      <Post 
        key={1} 
        post={postData} 
        loggedIn={false}
        username={'username'}
        voted={false}
      />
    );
    expect(post.toJSON()).toMatchSnapshot();
  });
});
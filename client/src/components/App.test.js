import React from 'react';
import { create } from 'react-test-renderer';
import App from './App';

describe("App component", () => {
  test("Matches the snapshot", () => {
    const post = create(
      <App />
    );
    expect(post.toJSON()).toMatchSnapshot();
  });
});
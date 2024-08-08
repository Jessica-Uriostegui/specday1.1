import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import PostList from './components/PostList';


function App() {
  return (
    <div className="container mt-5">
      <h1>Posts</h1>
      <PostList />
    </div>
  );
}

export default App;

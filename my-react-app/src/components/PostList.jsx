import React from 'react';
import usePosts from '../hooks/usePosts';
import { Spinner, Alert, ListGroup } from 'react-bootstrap';


const PostList = () => {
  const {posts, loading, error } =usePosts();

  if (loading) return <Spinner animation="border" role="status"><span className="visually-hidden">Loading...</span></Spinner>;
  if (error) return <Alert variant="danger">Error: {error.message}</Alert>;

  return (
    <ListGroup>
      {posts.map(post => (
        <ListGroup.Item key={post.id}>
          <h5>{post.title}</h5>
          <p>{post.body}</p>
        </ListGroup.Item>
        ))}
    </ListGroup>
  );
};

export default PostList;
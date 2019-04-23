import './Post.css';
import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

const Post = props => {
  return (
    <Container style={{backgroundColor: 'pink'}}>
      <Row>
        <Col>1 of 3</Col>
        <Col>2 of 3</Col>
        <Col xs={6}>3 of 3 (wider)</Col>
      </Row>
    </Container>

    // <Card className="post">
    //   <Card.Body>
    //     <Card.Title>{props.post.title}</Card.Title>
    //     <Card.Subtitle className="mb-2 text-muted">Posted by {props.post.author.username}</Card.Subtitle>
    //     <Card.Text>
    //       {props.post.description}
    //     </Card.Text>
    //     <Card.Link href={props.post.url} target="_blank">Link to Story</Card.Link>
    //   </Card.Body>
    // </Card>
  );
}

export default Post;
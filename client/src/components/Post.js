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
        <Col xs={2}>
          <Row>
            <img src="https://github.com/matthewcline/gosharegood/blob/master/imgs/raisinghands.png?raw=true" />
          </Row>
          <Row>
            {props.post.votes}
          </Row>
        </Col>
        <Col xs={10}>
        <Card className="post">
          <Card.Body>
            <Card.Title>{props.post.title}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">Posted by {props.post.author.username}</Card.Subtitle>
            <Card.Text>
              {props.post.description}
            </Card.Text>
            <Card.Link href={props.post.url} target="_blank">Link to Story</Card.Link>
          </Card.Body>
        </Card>
        </Col>
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
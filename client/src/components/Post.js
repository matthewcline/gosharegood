import './Post.css';
import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import Media from 'react-bootstrap/Media';

const Post = props => {
  return (
    <Container style={{width: '60%'}}>
      <Row className="justify-content-center align-items-center">
        <Col xs={2}>
          <div>
            <Image src="https://raw.githubusercontent.com/matthewcline/gosharegood/master/client/public/imgs/raisinghands.png" fluid />
            <div className="text-center">{props.post.votes}</div>
          </div>
        </Col>
        <Col xs={10}>
          <h5>{props.post.title}</h5>
          <p>Posted by {props.post.author.username}</p>
          <p>{props.post.description}</p>
          <a href={props.post.url} target="_blank">View Story</a>
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
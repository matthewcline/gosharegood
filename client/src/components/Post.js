import './Post.css';
import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import axios from 'axios';

class Post extends React.Component {
  state = { votes: this.props.post.votes };

  submitVote = (event) => {
    event.preventDefault();
    if (!this.props.loggedIn) {
      // TODO
      // this.setState({ errorMessage: 'You must be logged in to do that'});
    } else {
      axios
        .put(`http://localhost:3001/posts/${this.props.post._id}/votes`)
        .then(response => {
          if (response.status === 200) {
              console.log("response.data.message.votes: ", response.data.votes);
              this.setState({ votes: response.data.votes });
          }
        }).catch(err => {
            console.log(`error voting: ${err}`);
        });
    }
  }

  render() {
    return (
      <Container className="post rounded">
        <Row className="justify-content-between align-items-center">
          <Col xs={3} md={2}>
            <div>
              {this.props.voted ? 
                (
                  <Image 
                    onClick={this.submitVote}
                    src="https://raw.githubusercontent.com/matthewcline/gosharegood/master/client/public/imgs/raisinghands.png" 
                    fluid 
                  />
                )
                :
                (
                  <Image 
                    style={{opacity: '0.5'}}
                    onClick={this.submitVote}
                    src="https://raw.githubusercontent.com/matthewcline/gosharegood/master/client/public/imgs/raisinghands.png" 
                    fluid 
                  />
                )
              }
              <div className="text-center">{this.state.votes}</div>
            </div>
          </Col>
          <Col xs={9} md={10}>
            <h5>{this.props.post.title}</h5>
            <p>Posted by {this.props.post.author.username}</p>
            <p>{this.props.post.description}</p>
            {/* <a href={props.post.url} target="_blank">View Story</a> */}
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
}

export default Post;
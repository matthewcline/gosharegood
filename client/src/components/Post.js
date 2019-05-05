import './Post.css';
import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import axios from 'axios';
import posed from 'react-pose';
import AddPostForm from './AddPostForm';

const Content = posed.div({
  closed: { height: 0 },
  open: { height: 'auto' }
});

class Post extends React.Component {
  state = { 
    numVotes: this.props.post.votes,
    voted: this.props.voted,
    open: false
  };

  componentWillReceiveProps(props) {
    this.setState({
      numVotes: props.post.votes,
      voted: props.voted
    });
  }

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
              this.setState({ 
                numVotes: response.data.votes,
                voted: !this.state.voted
              });
          }
        }).catch(err => {
            console.log(`error voting: ${err}`);
        });
    }
  }

  deletePost = (event) => {
    axios
      .delete(`http://localhost:3001/posts/${this.props.post._id}`)
      .then(response => {
        if (response.status === 200) {
          console.log("deleted post");
        }
      }).catch(err => {
          console.log(`error deleting post: ${err}`);
      });
  }

  render() {
    const { open } = this.state;
    return (
      <Container className="post rounded">
        <Row className="justify-content-between align-items-center">
          <Col xs={3} md={2} style={{paddingLeft: '0'}}>
            <div>
              {this.state.voted ? 
                (
                  <div>
                    <div className="hands-div clicked-hands-div">
                      <Image
                        onClick={this.submitVote}
                        src="https://raw.githubusercontent.com/matthewcline/gosharegood/master/client/public/imgs/raisinghands.png" 
                        fluid 
                      />
                    </div> 
                    <div className="text-center mt-1" style={{opacity: '1.0'}}>{this.state.numVotes}</div>
                  </div>
                )
                :
                (
                  <div>
                    <div className="hands-div">
                      <Image 
                        style={{opacity: '0.7'}}
                        onClick={this.submitVote}
                        src="https://raw.githubusercontent.com/matthewcline/gosharegood/master/client/public/imgs/raisinghands.png" 
                        fluid 
                      />
                    </div> 
                    <div className="text-center mt-1" style={{opacity: '0.6'}}>{this.state.numVotes}</div>
                  </div>
                )
              }
            </div>
          </Col> 
          <Col xs={9} md={10}>
            <h5 
              onClick={() => this.setState({ open: open ? false : true })}
            >
              {this.props.post.title}
            </h5>
            <p>Posted by {this.props.post.author.username}</p>
            
            {(this.props.post.description || this.props.post.url) && 
              (
                <Content className="post-content" pose={open ? 'open' : 'closed'}>
                  {this.props.post.url &&
                    <a href={this.props.post.url} target="_blank">View Story</a>
                  }
                  {this.props.post.description && 
                    <p>{this.props.post.description}</p>
                  }
                  {this.props.post.author.username === this.props.username && 
                    <Link to={`/posts/${this.props.post._id}/edit`} >
                      Edit
                    </Link>
                  }
                  {this.props.post.author.username === this.props.username && 
                    <button onClick={this.deletePost}>Delete</button>
                  }
                </Content>
              )
            }
            <hr></hr>
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
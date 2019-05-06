import './Post.css';
import React from 'react';
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";
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
    open: false,
    redirectTo: null
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
          this.setState({
            redirectTo: '/'
          });
        }
      }).catch(err => {
          console.log(`error deleting post: ${err}`);
      });
  }

  render() {
    const { open } = this.state;
    if (this.state.redirectTo) {
      return <Redirect to={{ pathname: this.state.redirectTo }} />
    } else {
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
                <Row>
                  <h5>
                    {this.props.post.title}
                  </h5>
                </Row>
                <Row className="justify-content-center">
                  <Col xs={2}>
                    {/* <Image 
                      style={{opacity: 0.1}}
                      onClick={() => this.setState({ open: open ? false : true })}
                      alt="expand arrow" 
                      src="https://raw.githubusercontent.com/matthewcline/gosharegood/master/client/public/imgs/expand_arrow.png" 
                      fluid 
                    /> */}
                    <i 
                      class="material-icons"
                      onClick={() => this.setState({ open: open ? false : true })}
                      style={{fontSize: '2rem', opacity: 0.8}}
                    >
                    expand_more
                    </i>
                  </Col>
                </Row>
                {/* <p>Posted by {this.props.post.author.username}</p> */}

              {(this.props.post.description || this.props.post.url) && 
                (
                  <Content className="post-content" pose={open ? 'open' : 'closed'}>
                    {this.props.post.url &&
                      <div><a href={this.props.post.url} target="_blank">View Story</a></div>
                    }
                    {this.props.post.description && 
                      <p>{this.props.post.description}</p>
                    }
                    {this.props.post.author.username === this.props.username && 
                      <Link to={`/posts/${this.props.post._id}/edit`} >
                        <i class="edit-and-delete-icon material-icons">
                        edit
                        </i>
                      </Link>
                    }
                    {this.props.post.author.username === this.props.username && 
                      <Link
                        to="#"
                        onClick={this.deletePost}
                      >
                        <i alt="delete" class="edit-and-delete-icon material-icons">
                        delete
                        </i>
                      </Link>
                    }
                  </Content>
                )
              }
            </Col>
          </Row>
          <hr className="mb-0 mt-2" style={{opacity: 0.4}}></hr>
        </Container>
      );
    }
  }
}

export default Post;
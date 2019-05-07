import './Post.css';
import React from 'react';
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import axios from 'axios';
import posed from 'react-pose';
import getTimeSinceCreated from '../utils';
import InfoMessage from './InfoMessage';

const Content = posed.div({
  closed: { height: 0 },
  open: { height: 'auto' }
});

const Circle = posed.div({
  hoverable: true,
  pressable: true,
  init: {
    scale: 1,
    boxShadow: '0px 0px 0px rgba(0,0,0,0)'
  },
  hover: {
    scale: 1.2,
    boxShadow: '0px 5px 10px rgba(0,0,0,0.2)'
  },
  press: {
    scale: 1.5,
    boxShadow: '0px 2px 5px rgba(0,0,0,0.1)'
  }
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
      this.setState({ errorMessage: 'You must be logged in to do that'});
    } else {
      axios
        .put(`/posts/${this.props.post._id}/votes`)
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
      .delete(`posts/${this.props.post._id}`)
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
          {this.state.errorMessage && 
            <InfoMessage type={'error'} text={this.state.errorMessage} />
          }
          <Row className="justify-content-between align-items-center">
            <Col xs={3} md={2} className="px-lg-3">
              <div>
                {this.state.voted ? 
                  (
                    <div>
                      <Circle className="hands-div clicked-hands-div">
                        <Image
                          onClick={this.submitVote}
                          src="https://raw.githubusercontent.com/matthewcline/gosharegood/master/client/public/imgs/raisinghands.png" 
                          fluid 
                        />
                      </Circle> 
                      <div className="text-center mt-1" style={{opacity: '1.0'}}>{this.state.numVotes}</div>
                    </div>
                  )
                  :
                  (
                    <div>
                      <Circle className="hands-div">
                        <Image 
                          style={{opacity: '0.7'}}
                          onClick={this.submitVote}
                          src="https://raw.githubusercontent.com/matthewcline/gosharegood/master/client/public/imgs/raisinghands.png" 
                          fluid 
                        />
                      </Circle> 
                      <div className="text-center mt-1" style={{opacity: '0.6'}}>{this.state.numVotes}</div>
                    </div>
                  )
                }
              </div>
            </Col> 
            <Col xs={9} md={10} className="pl-lg-4">
                <Row>
                  <p style={{fontSize: '1.5rem'}}>
                    {this.props.post.title}
                  </p>
                </Row>
                <Row className="justify-content-center">
                  <Col xs={2}>
                    <i 
                      className="material-icons"
                      onClick={() => this.setState({ open: open ? false : true })}
                      style={{fontSize: '2rem', opacity: 0.8}}
                    >
                    expand_more
                    </i>
                  </Col>
                </Row>
                <Content className="post-content" pose={open ? 'open' : 'closed'}>
                  <p style={{color: 'gray', fontSize: '.85rem'}}>
                    Posted by {this.props.post.author.username}
                    {this.props.post.timeCreated && 
                      <span class="ml-1">{getTimeSinceCreated(this.props.post.timeCreated)}</span>
                    }
                  </p>
                  {this.props.post.url &&
                    <div>
                      <a href={this.props.post.url} target="_blank">
                        {this.props.post.url.length > 50 ?
                          `${this.props.post.url.substring(0, 40)}...`
                          :
                          this.props.post.url
                        }
                        <span>
                        <i style={{position: 'relative', bottom: '-4px'}} class="material-icons">
                        exit_to_app
                        </i>
                        </span>
                      </a>
                    </div>
                  }
                  {this.props.post.description && 
                    <p>{this.props.post.description}</p>
                  }
                  {this.props.post.author.username === this.props.username && 
                    <Link to={`/posts/${this.props.post._id}/edit`} >
                      <i className="edit-and-delete-icon material-icons">
                      edit
                      </i>
                    </Link>
                  }
                  {this.props.post.author.username === this.props.username && 
                    <Link
                      to="#"
                      onClick={this.deletePost}
                    >
                      <i alt="delete" className="edit-and-delete-icon material-icons">
                      delete
                      </i>
                    </Link>
                  }
                </Content>
            </Col>
          </Row>
          <hr className="mb-0 mt-2" style={{opacity: 0.4}}></hr>
        </Container>
      );
    }
  }
}

export default Post;
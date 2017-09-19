import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import {withRouter} from 'react-router';
import CommentItem from './comment_item';
class Comment extends Component {

  constructor(props) {
    super(props);
    this.state = {
      body: "",
      photoId: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
  }
  componentWillMount(){
    this.props.requestAllComments(this.props.photo.id);
  }

  handleSubmit(e) {
    console.log(this.props.photo.comments);
    console.log(this.props.photo.id, this.state.body);
    e.preventDefault();
    if (this.props.match.params.user_id) {
      this.props.createComment({photo_id: this.props.photo.id,
      body: this.state.body}).then( () => {
        this.props.requestAllPhoto(this.props.match.params.user_id);
      });
    } else {
      this.props.createComment({photo_id: this.props.photo.id,
        body: this.state.body}).then( () => {
        this.props.requestAllPhoto();
      });
    }


  }

  update(e){
    return event => this.setState({[e]: event.target.value});
  }

  render()  {
    const comments = this.props.photo.comments;
    return (
      <div className="comments-div">
        <form className="comment-form" onSubmit={this.handleSubmit}>

          <textarea
            placeholder="Add a Comment"
            rows="1"
            value={this.state.body}
            onChange={this.update('body')}
            className="comment-input"
          />
        <input type="submit" />
        </form>
        <ul className='comments-ul'>
          {comments.map(comment => <CommentItem key={comment.id}
          body={comment.body} comment={comment} />)}
        </ul>
      </div>
    );
  }

}

export default withRouter(Comment);

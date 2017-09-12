import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import {withRouter} from 'react-router';

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
    e.preventDefault();
    const comment = this.state;
    this.props.createComment(comment);
  }

  update(e){
    return event => this.setState({[e]: event.target.value});
  }

  render()  {

    return (
      <form className="comment-form" onSubmit={this.handleSubmit}>

        <textarea
          placeholder="Add a Comment"
          rows="1"
          value={this.state.body}
          onChange={this.update('body')}
          className="comment-input"
        />
        <input type="submit" style="display: none" />
      </form>
    );
  }

}

export default withRouter(Comment);

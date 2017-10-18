import React, { Component } from 'react';
import Modal from 'react-modal';
import {withRouter} from 'react-router';


class CommentItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.id,
      body: this.props.body
    };

  }
  render(){



    return (

      <div>
        <li className="comment-item">
          <div className='comment-username'>{this.props.username}</div>
          <div className='comment-body'>{this.props.body}</div>

        </li>
      </div>
    );
  }
}

export default withRouter(CommentItem);

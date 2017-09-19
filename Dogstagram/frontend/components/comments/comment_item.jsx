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
          {this.props.body}

        </li>
      </div>
    );
  }
}

export default withRouter(CommentItem);

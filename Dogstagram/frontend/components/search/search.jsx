import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import {withRouter} from 'react-router';

class Search extends Component {

  constructor(props) {
    super(props);

  }
  componentWillMount(){
    this.props.requestAllUsers();
  }




  render()  {
    const users = this.props.users;
    return (
      <section className="users-list">
        <ul className="users-list">

        </ul>
      </section>
    );
  }

}

export default withRouter(Search);

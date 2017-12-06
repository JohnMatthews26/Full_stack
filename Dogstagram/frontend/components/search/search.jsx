import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import {withRouter} from 'react-router';

class Search extends Component {

  constructor(props) {
    super(props);
    this.state = {
      username: ''
    };

  }
  componentWillMount(){
    this.props.requestAllUsers();
  }
  usersList(){
    console.log(this.props.users.entities);
  }

  update(field) {
    this.usersList();
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }




  render()  {
    const users = this.props.users;
    return (
      <section className="users-list">
        <form>
          <input type="text"
            value={this.state.username}
            onChange={this.update('username')}
            className="search-input"
            placeholder="Search Users"
          />
        </form>
      </section>
    );
  }

}

export default withRouter(Search);

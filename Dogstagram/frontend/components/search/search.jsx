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
    let len = this.state.username.length - 1;
    let entry = this.state.username.slice(0, len).toLowerCase();
    if (len > 0){
      let validUsers = [];
      let usersArray = Object.entries(this.props.users.entities);
      usersArray.forEach(function(value) {
        let usernamePartial = value[1].username.slice(0, len).toLowerCase();
        // console.log(usernamePartial);
        // console.log(entry);
        // console.log(len);

        if (entry == usernamePartial) {
          validUsers.push(value[1].username);
        }
      });
      console.log(validUsers);
      return validUsers;
    }
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

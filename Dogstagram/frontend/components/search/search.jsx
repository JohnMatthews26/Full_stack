import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import {withRouter} from 'react-router';
import { Link } from 'react-router-dom';


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


//   usersList(){
//     let len = this.state.username.length - 1;
//     let entry = this.state.username.slice(0, len).toLowerCase();
//     if (len > 0){
//       let validUsers = [];
//       let usersArray = Object.entries(this.props.users.entities);
//       usersArray.forEach(function(value) {
//         let usernamePartial = value[1].username.slice(0, len).toLowerCase();
//         // console.log(usernamePartial);
//         // console.log(entry);
//         // console.log(len);
//         if (entry == usernamePartial) {
//           validUsers.push(value[1].username);
//         }
//       });
//       console.log(validUsers);
//       return validUsers;
//     }
//   }
//
  // update(field) {
  //   this.usersList();
  //   return e => this.setState({
  //     [field]: e.currentTarget.value
  //   });
  // }
//
//   dropdown(usersArray){
//
//   }
//
//
//
//
//   render()  {
//     const users = this.props.users;
//     return (
//       <section className="users-list">
//         <form>
//           <input type="text"
//             value={this.state.username}
//             onChange={this.update('username')}
//             className="search-input"
//             placeholder="Search Users"
//           />
//         </form>
//       </section>
//     );
//   }
//
// }
//
// export default withRouter(Search);

  usersList(){
    let len = this.state.username.length;
    let entry = this.state.username.slice(0, len).toLowerCase();
    if (len > 0){
      let validUsers = [];
      let usersArray = Object.entries(this.props.users.entities);
      usersArray.forEach(function(value) {
        let usernamePartial = value[1].username.slice(0, len).toLowerCase();
        let userId = value[0];

        if (entry == usernamePartial) {
          validUsers.push([userId, value[1].username]);
        }

      });
      return (
        <ul className="users-list">
        {validUsers.map(el => <Link to={`/users/${el[0]}`} className="link-to-profile" onClick={this.clear("username")}><li key="${el[1]}" className="user-link">{el[1]}</li></Link>)}
        </ul>
      );
    }
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  clear(field){
    return e => this.setState({
      [field]: ""
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
        {this.usersList()}
      </section>
    );
  }

}

export default withRouter(Search);

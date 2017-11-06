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

    return (
      
    );
  }

}

export default withRouter(Search);

import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.loggedIn) {
      this.props.history.push('/');
    }
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    this.props.processForm({user});
  }

  signUpButtonText() {
    if (this.props.formType === 'login') {
      return "Log in";
    } else {
      return "Sign up";
    }
  }

  navLink() {
  if (this.props.formType === 'login') {
    return <label>Don't have an account? <Link to="/signup">Sign up</Link></label>;
  } else {
    return <label>Have an account? <Link to="/login">Log in</Link></label>;
  }
}

  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className="login-form-container">
        <form onSubmit={this.handleSubmit} className="login-form-box">

          <br/>

          {this.renderErrors()}
          <div className="login-form">
            <br/>
            <label>Username
              <input type="text"
                value={this.state.username}
                onChange={this.update('username')}
                className="login-input"
              />
            </label>
            <br/>
            <label>Password
              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
                className="login-input"
              />
            </label>
            <br/>
            <input type="submit" value={this.signUpButtonText()} />
          </div>
        </form>
        {this.navLink()}
      </div>
    );
  }
}

export default withRouter(SessionForm);

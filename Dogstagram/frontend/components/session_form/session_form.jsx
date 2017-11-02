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
    this.handleDemoButton = this.handleDemoButton.bind(this);

  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.path !== nextProps.match.path) {
      this.props.clearErrors();
    }
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
      return "Login";
    } else {
      return "Sign up";
    }
  }


  handleDemoButton(e) {
    e.preventDefault();
    const user = {username:'ILoveD0gs126', password:'password'};
    this.props.processForm({user});
  }

  showDemoButton() {

    if (this.props.formType === 'login') {
      return (
        <input type="submit" value='Demo' className="authsubmitbutton" onClick={this.handleDemoButton}/>
      );
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
      <div className='login-splash-div'>
        <div className='splash-img-div'>
          <img className='site-preview' src='http://res.cloudinary.com/roscoe/image/upload/v1509648627/Screen_Shot_2017-11-02_at_11.50.09_AM_misnip.png'></img>
        </div>
        <div className="login-form-container">
          <form onSubmit={this.handleSubmit} className="login-form-box">

            <br/>


            <div className="login-form">
              <section className="logo_section">
                <h1 className="logo"><img className="logo"src="http://res.cloudinary.com/roscoe/image/upload/v1501173784/a1c6256038a53cb2a5055d06a0169b8d-png-150x125_nznv16.png" alt="logo"></img></h1>
              </section>
              {this.renderErrors()}
              <br/>
              <label className="username_password_label">
                <input type="text"
                  value={this.state.username}
                  onChange={this.update('username')}
                  className="login-input"
                  placeholder="Username"
                />
              </label>
              <br/>
              <label className="username_password_label">
                <input type="password"
                  value={this.state.password}
                  onChange={this.update('password')}
                  className="login-input"
                  placeholder="Password"
                />
              </label>
              <br/>
              <input type="submit" value={this.signUpButtonText()} className="authsubmitbutton"/>
              {this.showDemoButton()}
            </div>
          </form>
        </div>
        <div className='splash-img-div'>

          <img className='site-preview' src='http://res.cloudinary.com/roscoe/image/upload/v1509567655/Screen_Shot_2017-11-01_at_1.20.36_PM_frr8xo.png'></img>
        </div>

      </div>
    );
  }
}

export default withRouter(SessionForm);

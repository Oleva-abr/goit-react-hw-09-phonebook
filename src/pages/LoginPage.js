import React, { Component } from 'react';
import { connect } from 'react-redux';
import style from '../components/ContactForm/contactForm.module.css';
import { authOperations } from '../redux/auth';

class LoginPage extends Component {
  state = {
    email: '',
    password: '',
  };

  handleChange = ({ target: { name, value } }) => {
    console.log(value);
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { name, email } = this.state;

    if (!name) return alert('Please enter contact name');
    if (!email) return alert('Please enter contact email');
    this.props.onLogin(this.state);

    this.setState({ email: '', password: '' });
  };

  render() {
    const { email, password } = this.state;

    return (
      <>
        <h1>Login Page</h1>

        <form
          className={style.loginForm}
          onSubmit={this.handleSubmit}
          autoComplete="off"
        >
          <label className={style.label}>Email address</label>

          <input
            className={style.input}
            type="email"
            name="email"
            value={email}
            onChange={this.handleChange}
          />

          <div>
            <label className={style.label}>Password</label>

            <input
              className={style.input}
              type="password"
              name="password"
              value={password}
              onChange={this.handleChange}
            />
          </div>

          <button className={style.btn} type="submit">
            Submit
          </button>
        </form>
      </>
    );
  }
}

const mapDispatchToProps = {
  onLogin: authOperations.LogIn,
};

export default connect(null, mapDispatchToProps)(LoginPage);

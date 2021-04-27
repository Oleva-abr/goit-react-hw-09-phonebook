import React, { Component } from 'react';
import { connect } from 'react-redux';
import style from '../components/ContactForm/contactForm.module.css';
import { authOperations } from '../redux/auth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure();
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
    const { email, password } = this.state;

    if (!email) return toast('Please enter contact email');

    if (!password) return toast('Please enter contact password');
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

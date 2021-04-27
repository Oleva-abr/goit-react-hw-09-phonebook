import React, { Component } from 'react';
import { connect } from 'react-redux';
import { authOperations } from '../redux/auth';
import style from '../components/ContactForm/contactForm.module.css';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure();

class RegisterPage extends Component {
  state = {
    name: '',
    email: '',
    password: '',
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { name, email } = this.state;

    if (!name) return toast('Please enter contact name');
    if (!email) return toast('Please enter contact email');
    this.props.onRegister(this.state);

    this.setState({ name: '', email: '', password: '' });
  };

  render() {
    const { name, email, password } = this.state;

    return (
      <div>
        <h1>Register page</h1>

        <form
          className={style.registerForm}
          onSubmit={this.handleSubmit}
          autoComplete="off"
        >
          <label className={style.label}>Name</label>
          <input
            className={style.input}
            type="text"
            name="name"
            value={name}
            onChange={this.handleChange}
          />
          <label className={style.label}>Email</label>
          <input
            className={style.input}
            type="email"
            name="email"
            value={email}
            onChange={this.handleChange}
          />
          <label className={style.label}>Password</label>
          <input
            className={style.input}
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
          />
          <button className={style.btn} type="submit">
            Register
          </button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = {
  onRegister: authOperations.register,
};

export default connect(null, mapDispatchToProps)(RegisterPage);

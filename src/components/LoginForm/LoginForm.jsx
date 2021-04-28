import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import style from '../ContactForm/contactForm.module.css';
import { authOperations } from '../../redux/auth';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure();
export default function LoginForm() {
  const [email, setEmail] = useState('');
  const changeEmail = e => {
    setEmail(e.target.value);
  };

  const [password, setPassword] = useState('');
  const changePassword = e => {
    setPassword(e.target.value);
  };
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();

    if (!email || !password) {
      toast('Please fill all fields');
      return;
    }

    dispatch(authOperations.LogIn({ email, password }));
    setEmail('');
    setPassword('');
  };

  return (
    <>
      <h1>Login Page</h1>

      <form
        className={style.loginForm}
        onSubmit={handleSubmit}
        autoComplete="off"
      >
        <label className={style.label}>Email address</label>

        <input
          className={style.input}
          type="email"
          name="email"
          value={email}
          onChange={changeEmail}
        />

        <div>
          <label className={style.label}>Password</label>

          <input
            className={style.input}
            type="password"
            name="password"
            value={password}
            onChange={changePassword}
          />
        </div>

        <button className={style.btn} type="submit">
          Submit
        </button>
      </form>
    </>
  );
}

import React, { useState } from 'react';

import { authOperations, authSelectors } from '../../redux/auth';
import style from '../ContactForm/contactForm.module.css';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure();

export default function RegisterForm() {
  const [name, setName] = useState('');
  const changeName = e => {
    setName(e.target.value);
  };
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

    if (!name || !email || !password) return toast('Please fill the form');

    dispatch(authOperations.register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };
  return (
    <div>
      <h1>Register page</h1>

      <form
        className={style.registerForm}
        onSubmit={handleSubmit}
        autoComplete="off"
      >
        <label className={style.label}>Name</label>
        <input
          className={style.input}
          type="text"
          name="name"
          value={name}
          onChange={changeName}
        />
        <label className={style.label}>Email</label>
        <input
          className={style.input}
          type="email"
          name="email"
          value={email}
          onChange={changeEmail}
        />
        <label className={style.label}>Password</label>
        <input
          className={style.input}
          type="password"
          name="password"
          value={password}
          onChange={changePassword}
        />
        <button className={style.btn} type="submit">
          Register
        </button>
      </form>
    </div>
  );
}

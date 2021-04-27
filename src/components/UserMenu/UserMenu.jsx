import React from 'react';

import style from './userMenu.module.css';
//hook
import { useDispatch, useSelector } from 'react-redux';

import { authSelectors, authOperations } from '../../redux/auth';

const UserMenu = () => {
  const name = useSelector(authSelectors.getUsername);
  const dispatch = useDispatch();
  const onLogout = () => dispatch(authOperations.logOut());
  return (
    <div className={style.userContent}>
      <span className={style.userText}>Welcome, {name}</span>

      <button className={style.btn} type="button" onClick={onLogout}>
        Logout
      </button>
    </div>
  );
};

export default UserMenu;

import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './authNav.module.css';

const AuthNav = () => {
  return (
    <div className={style.nav}>
      <NavLink
        exact
        to="/register"
        className={style.link}
        activeClassName={style.activeLink}
      >
        Registration
      </NavLink>

      <NavLink
        exact
        to="/login"
        className={style.link}
        activeClassName={style.activeLink}
      >
        Login
      </NavLink>
    </div>
  );
};

export default AuthNav;

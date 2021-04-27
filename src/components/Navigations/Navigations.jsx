import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import style from './navigation.module.css';
// Data
import { authSelectors } from '../../redux/auth';
//hook
import { useSelector } from 'react-redux';

const Navigation = () => {
  const isAuth = useSelector(authSelectors.getIsAuthenticated);
  return (
    <nav>
      <NavLink
        exact
        to="/"
        className={style.link}
        activeClassName={style.activeLink}
      >
        Home
      </NavLink>

      {isAuth && (
        <NavLink
          exact
          to="/contacts"
          className={style.link}
          activeClassName={style.activeLink}
        >
          Contacts
        </NavLink>
      )}
    </nav>
  );
};

// const mapStateToProps = state => ({
//   isAuth: authSelectors.getIsAuthenticated(state),
// });

export default Navigation;

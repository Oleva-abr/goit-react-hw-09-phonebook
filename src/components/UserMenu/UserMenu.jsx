import React from 'react';
import { connect } from 'react-redux';
import style from './userMenu.module.css';

import { authSelectors, authOperations } from '../../redux/auth';

const UserMenu = ({ name, onLogout }) => {
  return (
    <div className={style.userContent}>
      <span className={style.userText}>Welcome, {name}</span>

      <button className={style.btn} type="button" onClick={onLogout}>
        Logout
      </button>
    </div>
  );
};

const mapStateToProps = state => ({
  name: authSelectors.getUsername(state),
});

const mapDispatchToProps = {
  onLogout: authOperations.logOut,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);

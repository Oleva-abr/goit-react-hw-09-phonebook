import React from 'react';

import style from './appBar.module.css';
// Data
import { authSelectors } from '../../redux/auth';

import Navigations from '../Navigations';
import AuthNav from '../AuthNav';
import UserMenu from '../UserMenu';
//hook
import { useSelector } from 'react-redux';

const AppBar = () => {
  const isAuth = useSelector(authSelectors.getIsAuthenticated);
  return (
    <header className={style.header}>
      <Navigations className={style.navigation} />

      {isAuth ? <UserMenu /> : <AuthNav />}
    </header>
  );
};

export default AppBar;

import React, { Suspense, lazy, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { authOperations } from '../redux/auth';

import { Switch } from 'react-router';

import Container from './Container';
import AppBar from './AppBar';

// Route
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import Spin from './Spinner';

const HomePage = lazy(() =>
  import('../pages/HomePage' /* webpackChunkName: "home-page" */),
);

const ContactsPage = lazy(() =>
  import('../pages/ContactsPage' /* webpackChunkName: "contacts-page" */),
);

const RegisterPage = lazy(() =>
  import('../pages/RegisterPage' /* webpackChunkName: "register-page" */),
);

const LoginPage = lazy(() =>
  import('../pages/LoginPage' /* webpackChunkName: "login-page" */),
);

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(authOperations.getCurrentUser());
  }, [dispatch]);

  return (
    <div>
      <Container>
        <AppBar />
        <Suspense fallback={<Spin />}>
          <Switch>
            <PublicRoute exact path="/" component={HomePage} />
            <PrivateRoute
              path="/contacts"
              redirectTo="/login"
              component={ContactsPage}
            />
            <PublicRoute
              path="/register"
              restricted
              redirectTo="/contacts"
              component={RegisterPage}
            />
            <PublicRoute
              path="/login"
              restricted
              redirectTo="/contacts"
              component={LoginPage}
            />
          </Switch>
        </Suspense>
      </Container>
    </div>
  );
}

export default App;

import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { authSelectors } from '../redux/auth';

const PublicRoute = ({
  component: Component,
  isAuth,
  redirectTo,
  ...routeProps // (path, restricted)
}) => (
  <Route
    {...routeProps}
    render={props =>
      isAuth && routeProps.restricted ? (
        <Redirect to={redirectTo} />
      ) : (
        <Component {...props} />
      )
    }
  />
);

const mapStateToProps = state => ({
  isAuth: authSelectors.getIsAuthenticated(state),
});

export default connect(mapStateToProps)(PublicRoute);

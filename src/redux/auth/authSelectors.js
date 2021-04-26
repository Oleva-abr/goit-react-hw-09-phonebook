const getIsAuthenticated = state => state.auth.isAuth;

const getUsername = state => state.auth.user.name;

export default { getIsAuthenticated, getUsername };

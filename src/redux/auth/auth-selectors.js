const getIsAuthenticated = state => state.auth.isAutenticated;

const getUsername = state => state.auth.user.name;

export default {
  getIsAuthenticated,
  getUsername,
};

export const getUserSignInSelector = (state) => {
  return state.auth.userSignIn;
};

export const getUserSignUpSelector = (state) => {
  return state.auth.userSignUp;
};

export const getDefaultAccountSelector = (state) => {
  return state.auth.defaultAccount;
};

// --------------------------

export const setAuthSelector = (state) => {
  return state.auth.auth;
};

export const authLoadingSelector = (state) => {
  return state.auth.loading;
};

export const authErrorSelector = (state) => {
  return state.auth.authError;
};

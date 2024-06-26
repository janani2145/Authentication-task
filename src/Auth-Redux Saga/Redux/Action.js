export const REGISTER_REQUEST = 'REGISTER_REQUEST';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAILURE = 'REGISTER_FAILURE';

export const registerRequest = (userData,navigate) => ({
  type: REGISTER_REQUEST,
  payload: { ...userData, navigate },
});

export const registerSuccess = (user) => ({
  type: REGISTER_SUCCESS,
  payload: user,
});

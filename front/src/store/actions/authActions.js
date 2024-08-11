import * as api from '../../api';
import { getAlertActions } from './alertActions';

export const authActions = {
  SET_USER_DETAILS: 'AUTH.SET_USER_DETAILS',
};

export const getActions = (dispatch) => {
  return {
    login: (userDetails, navigate) => dispatch(login(userDetails, navigate)),
    register: (userDetails, navigate) =>
      dispatch(register(userDetails, navigate)),
  };
};

export const setUserDetails = (userDetails) => ({
  type: authActions.SET_USER_DETAILS,
  userDetails,
});

const login = (userDetails, navigate) => {
  return async (dispatch) => {
    const response = await api.login(userDetails);

    if (response.error) {
      getAlertActions(dispatch).openAlertMessage(
        response?.exception?.response?.data ?? 'error occured'
      );
    } else {
      localStorage.setItem('user', JSON.stringify(response.data.userDetails));
      dispatch(setUserDetails(userDetails));
      navigate('/dashboard');
    }
  };
};

const register = (userDetails, navigate) => {
  return async (dispatch) => {
    const response = await api.register(userDetails);

    if (response.error) {
      getAlertActions(dispatch).openAlertMessage(
        response?.exception?.response?.data ?? 'error occured'
      );
    } else {
      localStorage.setItem('user', JSON.stringify(response.data.userDetails));
      dispatch(setUserDetails(userDetails));
      navigate('/dashboard');
    }
  };
};

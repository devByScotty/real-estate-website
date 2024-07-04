import axios from 'axios';

// Action Types
const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
const REGISTER_FAILURE = 'REGISTER_FAILURE';
const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
const LOGIN_FAILURE = 'LOGIN_FAILURE';
const FETCH_LOGIN_SUCCESS = 'FETCH_LOGIN_SUCCESS';
const FETCH_LOGIN_FAILURE = 'FETCH_LOGIN_FAILURE';

// Register User
export const createRegistration = (registerData) => async (dispatch) => {
  try {
    const response = await axios.post('https://real-estate-backend-4hnr.onrender.com/api/register', registerData);
    dispatch({
      type: REGISTER_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: REGISTER_FAILURE,
      payload: error.response ? error.response.data.error : error.message,
    });
  }
};

// Login User
export const getLogin = (loginData) => async (dispatch) => {
  try {
    const response = await axios.post('https://real-estate-backend-4hnr.onrender.com/api/login', loginData);
    dispatch({
      type: LOGIN_SUCCESS,
      payload: response.data,
    });
    console.log(loginData);
    console.log(response.data);
  } catch (error) {
    console.error('Error logging in:', error);
    dispatch({
      type: LOGIN_FAILURE,
      payload: error.response ? error.response.data.error : error.message,
    });
  }
};

// Fetch Login Data
export const showLogin = () => async (dispatch) => {
  try {
    const response = await axios.get('https://real-estate-backend-4hnr.onrender.com/api/current-user');
    dispatch({
      type: FETCH_LOGIN_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    console.error('Error fetching login data:', error);
    dispatch({
      type: FETCH_LOGIN_FAILURE,
      payload: error.response ? error.response.data.error : error.message,
    });
  }
};

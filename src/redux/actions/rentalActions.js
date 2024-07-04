// src/redux/actions/rentalActions.js

import axios from 'axios';
import {
  RENT_PROPERTY_REQUEST,
  RENT_PROPERTY_SUCCESS,
  RENT_PROPERTY_FAILURE,
} from './types';

export const rentPropertyRequest = () => ({
  type: RENT_PROPERTY_REQUEST,
});

export const rentPropertySuccess = (transaction) => ({
  type: RENT_PROPERTY_SUCCESS,
  payload: transaction,
});

export const rentPropertyFailure = (error) => ({
  type: RENT_PROPERTY_FAILURE,
  payload: error,
});

export const rentProperty = (propertyId, userData) => {
  return async (dispatch) => {
    dispatch(rentPropertyRequest());
    try {
      const response = await axios.post(`/api/rental/${propertyId}`, userData);
      dispatch(rentPropertySuccess(response.data));
    } catch (error) {
      dispatch(rentPropertyFailure(error.message));
    }
  };
};

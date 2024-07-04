// src/redux/actions/purchaseActions.js

import axios from 'axios';
import {
  PURCHASE_PROPERTY_REQUEST,
  PURCHASE_PROPERTY_SUCCESS,
  PURCHASE_PROPERTY_FAILURE,
} from './types';

export const purchasePropertyRequest = () => ({
  type: PURCHASE_PROPERTY_REQUEST,
});

export const purchasePropertySuccess = (transaction) => ({
  type: PURCHASE_PROPERTY_SUCCESS,
  payload: transaction,
});

export const purchasePropertyFailure = (error) => ({
  type: PURCHASE_PROPERTY_FAILURE,
  payload: error,
});

export const purchaseProperty = (propertyId, userData) => {
  return async (dispatch) => {
    dispatch(purchasePropertyRequest());
    try {
      const response = await axios.post('/api/transactions', userData);
      console.log(response);
      dispatch(purchasePropertySuccess(response.data));
      
    } catch (error) {
      dispatch(purchasePropertyFailure(error.message));
    }
  };
};

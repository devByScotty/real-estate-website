// src/redux/reducers/purchaseReducer.js

import {
    PURCHASE_PROPERTY_REQUEST,
    PURCHASE_PROPERTY_SUCCESS,
    PURCHASE_PROPERTY_FAILURE,
  } from '../actions/types';
  
  const initialState = {
    transaction: null,
    loading: false,
    error: null,
  };
  
  const purchaseReducer = (state = initialState, action) => {
    switch (action.type) {
      case PURCHASE_PROPERTY_REQUEST:
        return {
          ...state,
          loading: true,
          error: null,
        };
      case PURCHASE_PROPERTY_SUCCESS:
        return {
          ...state,
          loading: false,
          transaction: action.payload,
        };
      case PURCHASE_PROPERTY_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default purchaseReducer;
  
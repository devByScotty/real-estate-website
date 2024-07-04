// src/redux/reducers/rentalReducer.js

import {
    RENT_PROPERTY_REQUEST,
    RENT_PROPERTY_SUCCESS,
    RENT_PROPERTY_FAILURE,
  } from '../actions/types';
  
  const initialState = {
    transaction: null,
    loading: false,
    error: null,
  };
  
  const rentalReducer = (state = initialState, action) => {
    switch (action.type) {
      case RENT_PROPERTY_REQUEST:
        return {
          ...state,
          loading: true,
          error: null,
        };
      case RENT_PROPERTY_SUCCESS:
        return {
          ...state,
          loading: false,
          transaction: action.payload,
        };
      case RENT_PROPERTY_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default rentalReducer;
  
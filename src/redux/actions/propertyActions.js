import axios from 'axios';

export const buyProperty = (propertyId, userData) => async (dispatch) => {
    try {
      // Replace with actual API call to buy property
       const response = await axios.post('/api/purchase', { propertyId, userData });
      dispatch({ type: 'BUY_PROPERTY_SUCCESS' },
      console.log('responnse'));
    } catch (error) {
      console.error('Error buying property:', error);
    }
  };
  
  export const rentProperty = (propertyId, userData) => async (dispatch) => {
    try {
      // Replace with actual API call to rent property
      const response = await axios.post(`/api/rental/${propertyId}`, { propertyId, userData });
      dispatch({ type: 'RENT_PROPERTY_SUCCESS' });
    } catch (error) {
      console.error('Error renting property:', error);
    }
  };
  
  
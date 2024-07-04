import axios from 'axios';

export const createPurchase = (purchaseData) => async (dispatch) => {
  try {
    const response = await axios.post('http://localhost:3001/api/transactions', purchaseData);  // Correct port
    dispatch({
      type: 'CREATE_PURCHASE_SUCCESS',
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: 'CREATE_PURCHASE_FAILURE',
      payload: error.message,
    });
  }
};
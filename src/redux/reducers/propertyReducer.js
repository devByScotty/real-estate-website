const initialState = {
    properties: [], // Initial state for properties
    buyingSuccess: false,
    rentingSuccess: false,
  };
  
  const propertyReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'BUY_PROPERTY_SUCCESS':
        return {
          ...state,
          buyingSuccess: true,
        };
      case 'RENT_PROPERTY_SUCCESS':
        return {
          ...state,
          rentingSuccess: true,
        };
      case 'GET_PROPERTIES_SUCCESS':
        return {
          ...state,
          properties: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default propertyReducer;
  
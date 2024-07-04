const initialState = {
    user: null,
    isLogin: false,
    error: null,
  };
  
  const loginandRegReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'REGISTER_SUCCESS':
        return { ...state, user: action.payload, isLogin: true };
      case 'REGISTER_FAILURE':
        return { ...state, error: action.payload };
      case 'LOGIN_SUCCESS':
        return { ...state, user: action.payload, isLogin: true };
      case 'LOGIN_FAILURE':
        return { ...state, error: action.payload };
      default:
        return state;
    }
  };
  
  export default loginandRegReducer;
  
// reducers/index.js
import { combineReducers } from 'redux';
import propertyReducer from './reducers/propertyReducer'; 
import loginandRegReducer from './reducers/loginandRegReducer'// Example reducer, replace with your own

const rootReducer = combineReducers({
  // Add more reducers here as your app grows
  property: propertyReducer,
  user:loginandRegReducer
});

export default rootReducer;

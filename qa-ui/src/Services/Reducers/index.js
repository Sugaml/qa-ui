import { combineReducers } from 'redux';
import loginReducer from './account';


const rootReducer = combineReducers({
  loginData:loginReducer
});

export default rootReducer;

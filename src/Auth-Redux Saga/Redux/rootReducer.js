import { combineReducers } from 'redux';
import userReducer from '../Actions/Reducer';
import authReducer from '../LoginAction/LoginReducer';

const rootReducer = combineReducers({
  user: userReducer,
  auth: authReducer,
});

export default rootReducer;
import {combineReducers} from 'redux';
import AuthReducer from './AuthReducer';
import EmployeeReducer from './EmployeeReducer';
import EmployStuff from './EmployStuff';
import PropertyReducer from './PropertyReducer';

//exports all reducers
export default combineReducers({
  auth: AuthReducer,
  employeeForm: EmployeeReducer,
  employees: EmployStuff,
  property: PropertyReducer,
});

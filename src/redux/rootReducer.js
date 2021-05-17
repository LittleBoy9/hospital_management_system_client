import { combineReducers } from "redux";
import deptReducer from "./department/deptReducer.js";
const rootReducer = combineReducers({
  dept: deptReducer,
});

export default rootReducer;

import { combineReducers } from "redux";

import alert from "./alertReducer";

import user from "./userReducer";

//import techReducer from "./techReducer";

export default combineReducers({
  alert,

  user
});

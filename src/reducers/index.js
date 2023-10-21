import { combineReducers } from "redux";
import auth from "./auth";
import error from "./error";
import customer from "./customer";
import success from "./success";
import _public from "./public";

export default combineReducers({
  auth,
  error,
  success,
  customer,
  _public,
});

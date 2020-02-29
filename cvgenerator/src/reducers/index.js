import { combineReducers } from "redux";
import alert from "./alert";
import auth from "./auth";
import resume from "./resume";
export default combineReducers({ alert, auth, resume });

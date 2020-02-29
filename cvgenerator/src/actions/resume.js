import {
  GET_RESUME,
  RESUME_ERROR,
  GET_A_RESUME,
  CREATE_RESUME,
  CREATE_ERROR
} from "./type";
import axios from "axios";
import { setAlert } from "./alert";
export const getResume = () => async dispatch => {
  try {
    const res = await axios.get("api/resume");
    dispatch({
      type: GET_RESUME,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: RESUME_ERROR
    });
  }
};

export const getAResume = id => async dispatch => {
  try {
    const res = await axios.get(`/api/resume/${id}`);
    dispatch({
      type: GET_A_RESUME,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: RESUME_ERROR,
      payload: {
        msg: err.response.statusText,
        status: err.response.status
      }
    });
  }
};

//Create Resume
export const createResume = ({
  name,
  email,
  phone,
  description,
  sclocation,
  scfrom,
  scto,
  degree,
  company,
  wrlocation,
  wrfrom,
  wrto,
  position,
  title,
  pdescription,
  skills,
  school
}) => async dispatch => {
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };
  const body = JSON.stringify({
    name,
    email,
    phone,
    description,
    sclocation,
    scfrom,
    scto,
    degree,
    company,
    wrlocation,
    wrfrom,
    wrto,
    position,
    title,
    pdescription,
    skills,
    school
  });

  try {
    const res = await axios.post("/api/resume", body, config);
    dispatch({
      type: CREATE_RESUME,
      payload: res.data
    });
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, "danger")));
    }
    dispatch({
      type: CREATE_ERROR
    });
  }
};

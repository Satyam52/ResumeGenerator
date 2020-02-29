import {
  RESUME_ERROR,
  GET_RESUME,
  GET_A_RESUME,
  CREATE_RESUME,
  CREATE_ERROR
} from "../actions/type";

const initialState = {
  resumes: [],
  resume: null,
  loading: true,
  error: {}
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_RESUME:
      return { ...state, resumes: payload, loading: false };
    case RESUME_ERROR:
      return {
        ...state,
        error: payload,
        loading: false
      };
    case GET_A_RESUME: {
      return {
        ...state,
        resume: payload,
        loading: false
      };
    }
    case CREATE_RESUME:
      return {
        ...state,
        resume: payload,
        loading: false
      };
    case CREATE_ERROR:
      return { ...state, error: payload, loading: false };

    default:
      return state;
  }
}

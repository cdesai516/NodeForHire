import axios from "axios";

import { CLEAR_ERRORS, GET_ERRORS, ADD_ROLE } from "./types";

// Add Post
export const addRole = roleData => dispatch => {
  dispatch(clearErrors());
  axios
    .post("/api/role/new", roleData)
    .then(res =>
      dispatch({
        type: ADD_ROLE,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

// Clear errors
export const clearErrors = () => {
  return {
    type: CLEAR_ERRORS
  };
};

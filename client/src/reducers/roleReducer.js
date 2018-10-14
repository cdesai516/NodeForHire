import isEmpty from "../validation/is-empty";

import { ADD_ROLE } from "../actions/types";

const initialState = {
  isAuthenticated: true,
  role: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_ROLE:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        role: action.payload
      };
    default:
      return state;
  }
}

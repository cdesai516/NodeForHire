import { ADD_ROLE } from "../actions/types";

const initialState = {
  isAuthenticated: true
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_ROLE:
      return {
        ...state,
        isAuthenticated: action.payload,
        role: action.payload
      };
    default:
      return state;
  }
}

import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  CLEAR_ERROR,
  TOTAL_COUNT
} from "../actions/types";

const initialState = {
  loading: true,
  user: "",
  error: null,
  count: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case REGISTER_SUCCESS:
      return {
        ...state,
        user: action.payload,
        loading: false
      };
    case REGISTER_FAIL:
      return {
        ...state,
        error: action.payload,
        loading: false
      };
    case TOTAL_COUNT:
      return {
        ...state,
        count: action.payload.length,
        loading: false
      };

    case CLEAR_ERROR:
      return {
        ...state,
        error: null,
        loading: false
      };

    default:
      return state;
  }
}

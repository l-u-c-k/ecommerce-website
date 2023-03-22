import * as types from "../actions/actionTypes";

const initialState = {
  users: [],
  error: null,
  loading: false,
};

const loginReducer = (state = initialState, action) => {
  const response = action.response;
  switch (action.type) {
    case types.LOGIN_USER_SUCCESS:
      return {
        ...state,
        users: response,
      };

    case types.LOGIN_USER_ERROR:
      return {
        ...state,
        error: response,
      };
      case types.LOAD_USERS_START:
      return {
        ...state,
        loading: true,
      };
    case types.LOAD_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        users: action.payload,
      };

    case types.LOAD_USERS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default loginReducer;

import actionTypes from '../constants/actionTypes';

const initialState = {
  users: [],
  posts: [],
  loading: false,
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_USERS:
      return {
        ...state,
        users: action.payload,
        loading: false,
      };

    case actionTypes.SET_LOADING:
      return {
        ...state,
        loading: true,
      };

    default:
      return state;
  }
};

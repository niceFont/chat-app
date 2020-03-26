import {
  LOAD_USERS,
  ADD_USER,
  REMOVE_USER,
  SEND_MESSAGE,
  NEW_MESSAGE
} from "../actions/types";

const intialState = {
  messages: [],
  users: [],
  loading: false,
  error: false
};

export default function(state = intialState, action) {
  const { type, payload } = action;

  switch (type) {
    case LOAD_USERS:
      return {
        ...state,
        users: payload
      };
    case ADD_USER:
      return {
        ...state,
        users: [...state.users, payload]
      };
    case REMOVE_USER:
      return {
        ...state,
        users: state.users.filter(user => user !== payload)
      };
    case SEND_MESSAGE:
    case NEW_MESSAGE:
      return {
        ...state,
        messages: [...state.messages, payload],
        error: false,
        loading: false
      };
    default:
      return state;
  }
}

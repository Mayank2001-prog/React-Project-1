import { ADD_ITEM, UPDATE_ITEM, DELETE_ITEM, ADD_USER, UPDATE_USER, DELETE_USER } from '../types';

const initialItemState = [];
const initialUserState = [];

const itemReducer = (state = initialItemState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return [...state, action.payload];
    case UPDATE_ITEM:
      return state.map(item => item.id === action.payload.id ? action.payload : item);
    case DELETE_ITEM:
      return state.filter(item => item.id !== action.payload);
    default:
      return state;
  }
};

const userReducer = (state = initialUserState, action) => {
  switch (action.type) {
    case ADD_USER:
      return [...state, action.payload];
    case UPDATE_USER:
      return state.map(user => user.id === action.payload.id ? action.payload : user);
    case DELETE_USER:
      return state.filter(user => user.id !== action.payload);
    default:
      return state;
  }
};

export { userReducer, itemReducer };
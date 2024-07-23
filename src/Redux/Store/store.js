// store.js
import { createStore, combineReducers } from 'redux';
import { itemReducer, userReducer } from '../Reducer/reducer';

const rootReducer = combineReducers({
  items: itemReducer,
  users: userReducer,
});

const store = createStore(rootReducer);

export default store;

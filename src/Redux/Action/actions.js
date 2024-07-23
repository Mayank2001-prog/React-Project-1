import { ADD_ITEM, UPDATE_ITEM, DELETE_ITEM,ADD_USER, UPDATE_USER, DELETE_USER } from '../types';

export const addItem = (item) => ({
  type: ADD_ITEM,
  payload: item,
});

export const updateItem = (item) => ({
    type: UPDATE_ITEM,
    payload : item, 
});

export const deleteItem = (id) => ({
  type: DELETE_ITEM,
  payload: id,
});



export const addUser = (user) => ({
  type: ADD_USER,
  payload: user
});

export const updateUser = (user) => ({
  type: UPDATE_USER,
  payload: user
});

export const deleteUser = (userId) => ({
  type: DELETE_USER,
  payload: userId
});

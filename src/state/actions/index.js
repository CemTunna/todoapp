import * as types from '../types';
export const addTodo = (todo) => async (dispatch) => {
  await dispatch({
    type: types.ADD_TODO,
    payload: todo,
  });
};
export const completeTodo = (idx) => async (dispatch) => {
  await dispatch({
    type: types.COMPLETE_TODO,
    payload: idx,
  });
};
export const deleteTodo = (idx) => async (dispatch) => {
  await dispatch({
    type: types.DELETE_TODO,
    payload: idx,
  });
};

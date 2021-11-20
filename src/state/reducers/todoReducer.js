import * as types from '../types';

const initialState = {
  todos: [],
};
const todoReducer = (state = initialState, action) => {
  const { payload, type } = action;

  switch (type) {
    case types.ADD_TODO:
      return { ...state, todos: [...state.todos, payload] };
    case types.COMPLETE_TODO:
      return {
        ...state,
        todos: state.todos.map((todo, index) =>
          index === payload ? { ...todo, completed: !todo.completed } : todo
        ),
      };
    case types.DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo, index) => index !== payload),
      };
    default:
      return state;
  }
};
export default todoReducer;

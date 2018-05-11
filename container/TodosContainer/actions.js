import { INSERT_TODO, DONE_TODO, FILTER_TODO } from './constants';

export const insertTodo = (todo) => ({
  type: INSERT_TODO,
  todo,
});

export const doneTodo = (todo) => ({
  type: DONE_TODO,
  todo,
});

export const filterTodo = (done) => ({
  type: FILTER_TODO,
  done,
});

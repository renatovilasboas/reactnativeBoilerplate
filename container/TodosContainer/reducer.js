import { fromJS } from 'immutable';
import { INSERT_TODO } from './constants';

const initialState = {
  todos: [
    { task: 'Aprender React' },
    { task: 'Aprender React Native' },
    { task: 'Aprender React Boilerplate' },
  ],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case INSERT_TODO:
      return state.set('todos', [action.todo]);

    default:
      console.log('initialState');
      return state;
  }
}

import { fromJS } from 'immutable';
import {
  INSERT_TODO,
  DONE_TODO,
  FILTER_TODO,
  DONE,
  PENDING,
} from './constants';

const initialState = fromJS({
  todos: [
    { task: 'Aprender React', status: PENDING },
    { task: 'Aprender React Native', status: PENDING },
    { task: 'Aprender React Boilerplate', status: PENDING },
  ],
  filtered: [],
  filterDone: false,
});

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case INSERT_TODO: {
      return state.updateIn(['todos'], (array) =>
        array.push({ task: action.todo.task, status: PENDING }));
    }
    case DONE_TODO: {
      let newList = state.get('todos').toJS();
      newList = newList.filter((x) => x.task !== action.todo.task);
      newList.push({ task: action.todo.task, status: DONE });
      return state.set('todos', fromJS(newList));
    }

    case FILTER_TODO: {
      let newList = state.get('todos').toJS();
      const status = action.done ? DONE : PENDING;
      newList = newList.filter((x) => x.status === status);
      return state
        .set('filtered', fromJS(newList))
        .set('filterDone', action.done);
    }

    default:
      return state;
  }
}

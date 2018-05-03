import { combineReducers } from 'redux';
import todos from '../container/TodosContainer/reducer';

const rootReducer = combineReducers({
  todos,
});

export default rootReducer;

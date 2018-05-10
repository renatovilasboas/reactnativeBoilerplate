import { createSelector } from 'reselect';

const todosContainerDomain = (state) => state.todosContainer.toJS();

const todosContainerSelector = createSelector(
  todosContainerDomain,
  (items) => items
);

export default todosContainerSelector;

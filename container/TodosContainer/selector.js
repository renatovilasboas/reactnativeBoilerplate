import { createSelector } from 'reselect';

/* const selectTodosContainerDomain = (state) => {
  console.log('container', state.todosContainer);
  console.log('container.js', state.todosContainer.toJS());
  return state.todosContainer.toJS();
};
 */
const todosContainerDomain = (state) => state.todosContainer.toJS();

const todosContainerSelector = createSelector(
  todosContainerDomain,
  (items) => items
);

// const makeSelectorTodosContainer = () =>
//  createSelector(selectTodosContainerDomain, (container) =>
//    container.todosContainer.toJS());

/* const selectTodosContainerDomain = (state) => {
  console.log(state);
  return state.todosContainer.toJS();
};
const makeSelectorTodosContainer = () =>
  createSelector(selectTodosContainerDomain, (contaner) => {
    console.log('contaner', contaner);
    return contaner;
  }); */

export default todosContainerSelector;

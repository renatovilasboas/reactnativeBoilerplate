import { fromJS } from 'immutable';
import reducer from '../reducer';
import { insertTodo, removeTodo } from '../actions';

describe('Todos Container', () => {
  it('GIVEN a TodosContainer reducer WHEN received InsertTodo THEN insert task correctly', () => {
    // Arrange
    const state = fromJS({ todos: [] });
    const newTodo = { task: 'test' };

    // Act
    const newState = reducer(state, insertTodo(newTodo));

    // Assert
    const todos = newState.get('todos').toJS();
    expect(todos.length).toBe(1);
    expect(todos[0]).toMatchObject(newTodo);
  });

  it('GIVEN a TodosContainer reducer WHEN received removeTodo THEN remove task correctly', () => {
    // Arrange
    const todo1 = { task: 'test1' };
    const todo2 = { task: 'test2' };
    const state = fromJS({ todos: [todo1, todo2] });

    // Act
    const newState = reducer(state, removeTodo({ task: 'test1' }));

    // Assert
    const todos = newState.get('todos').toJS();
    expect(todos.length).toBe(1);
    expect(todos[0]).toMatchObject(todo2);
  });
});

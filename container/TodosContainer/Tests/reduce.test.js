import { fromJS } from 'immutable';
import reducer from '../reducer';
import { insertTodo, doneTodo, filterTodo } from '../actions';
import { DONE, PENDING } from '../constants';

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
    expect(todos[0]).toMatchObject({ task: newTodo.task, status: PENDING });
  });

  it('GIVEN a TodosContainer reducer WHEN i request a task as done THEN the task is marked with done correctly', () => {
    // Arrange
    const todo1 = { task: 'test1', status: PENDING };
    const todo2 = { task: 'test2', status: PENDING };
    const state = fromJS({ todos: [todo1, todo2] });

    // Act
    const newState = reducer(state, doneTodo(todo1));

    // Assert
    const todos = newState.get('todos').toJS();
    expect(todos.length).toBe(2);
    const [done] = todos.filter((x) => x.status === DONE);
    expect(done).toMatchObject({ task: todo1.task, status: DONE });
  });

  it('GIVEN a TodosContainer reducer WHEN a request filter by tasks done THEN return tasks correctly', () => {
    // Arrange
    const todo1 = { task: 'test1', status: PENDING };
    const todo2 = { task: 'test2', status: PENDING };
    const todo3 = { task: 'test3', status: DONE };
    const state = fromJS({ todos: [todo1, todo2, todo3] });

    // Act
    const newState = reducer(state, filterTodo(true));

    // Assert
    const todos = newState.get('filtered').toJS();
    expect(todos.length).toBe(1);
    expect(todos[0]).toMatchObject(todo3);
  });
});

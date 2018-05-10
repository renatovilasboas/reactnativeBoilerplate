import React from 'react';
import renderer from 'react-test-renderer';
import TaskRow from '../component';

test('TaskRow renders correctly', () => {
  // Arrange
  const todo = { task: 'exemplo' };

  // Act
  const tree = renderer
    .create(<TaskRow todo={todo} removeTodo={jest.fn} />)
    .toJSON();

  // Assert
  expect(tree).toMatchSnapshot();
});

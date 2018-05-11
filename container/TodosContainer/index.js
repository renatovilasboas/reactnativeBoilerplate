import React from 'react';
import { connect } from 'react-redux';
import TaskList from '../../components/tasklist';
import { insertTodo, doneTodo, filterTodo } from './actions';
import todosContainerSelector from './selector';

/** eslint-disable */
class TodosContainer extends React.Component {
  static navigationOptions = {
    title: 'Tasks',
    headerStyle: {
      backgroundColor: '#333',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };

  render() {
    return <TaskList {...this.props} />;
  }
}

const mapDispatchToProps = {
  insertTodo,
  doneTodo,
  filterTodo,
};

const mapStateToProps = (state) => ({
  todosContainer: todosContainerSelector(state),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodosContainer);

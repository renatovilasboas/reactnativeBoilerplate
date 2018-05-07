import React from 'react';
import { connect } from 'react-redux';
import TaskList from '../../components/tasklist';
import { insertTodo, removeTodo } from './actions';
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
  removeTodo,
};

const mapStateToProps = (state) => ({
  todosContainer: todosContainerSelector(state),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodosContainer);

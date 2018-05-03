import React from 'react';
import { connect } from 'react-redux';
import TaskList from '../../components/tasklist';
import { insertTodo } from './actions';

/** eslint-disable */
class TodosContainer extends React.Component {
  render() {
    return <TaskList {...this.props} />;
  }
}

const mapDispatchToProps = {
  insertTodo,
};

const mapStateToProps = (state) => ({ todosContainer: state.todos });

export default connect(mapStateToProps, mapDispatchToProps)(TodosContainer);

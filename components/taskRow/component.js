import React from 'react';
import { StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import Render from './render';

class TaskRow extends React.Component {
  render() {
    return Render(styles, this.props.todo, this.props.removeTodo);
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#E7E7E7',
    padding: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10,
    height: 60,
  },
  label: {
    fontSize: 22,
    fontWeight: '300',
    width: '100%',
  },
  doneButton: {
    borderRadius: 5,
    backgroundColor: '#EAEAEA',
    padding: 5,
    marginLeft: -50,
    justifyContent: 'center',
  },
});

TaskRow.propTypes = {
  todo: PropTypes.shape({
    task: PropTypes.string.isRequired,
  }).isRequired,
  removeTodo: PropTypes.func.isRequired,
};

export default TaskRow;

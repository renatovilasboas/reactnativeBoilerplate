import React from 'react';
import { Text, StyleSheet, View, TouchableHighlight } from 'react-native';
import PropTypes from 'prop-types';
import Render from './Render';

/* const TaskRow = ({ todo, removeTodo }) => (
  <View style={styles.container}>
    <Text style={styles.label}>{todo.task}</Text>
    <TouchableHighlight style={styles.doneButton} onPress={() => removeTodo()}>
      <Text>Done</Text>
    </TouchableHighlight>
  </View>
); */

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
});

class TaskRow extends React.Component {
  render() {
    return Render(styles, this.props.todo, this.props.removeTodo);
  }
}

TaskRow.propTypes = {
  removeTodo: PropTypes.func.isRequired,
  todo: PropTypes.shape({
    task: PropTypes.string.isRequired,
  }).isRequired,
};

export default TaskRow;

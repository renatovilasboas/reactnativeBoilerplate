import React from 'react';
import { View, ListView, Switch, Text } from 'react-native';
import PropTypes from 'prop-types';
import TaskRow from './taskRow/component';
import CustomizeButtom from './CustomizeButtom';

const styles = {
  container: {
    paddingTop: 0,
    backgroundColor: '#F7F7F7',
    flex: 1,
    justifyContent: 'flex-start',
  },
  button: {
    height: 60,
    borderColor: '#05A5D1',
    borderWidth: 2,
    backgroundColor: '#333',
    margin: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#FAFAFA',
    fontSize: 20,
    fontWeight: '600',
  },
  switch: {
    marginTop: 20,
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },
};

export default class TaskList extends React.Component {
  constructor(props, context) {
    super(props, context);

    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2,
    });

    const { filtered } = this.props.todosContainer;
    this.state = {
      dataSource: ds.cloneWithRows(filtered),
      done: false,
    };

    this.props.filterTodo(this.state.done);
  }

  componentWillReceiveProps(nextProps) {
    const { filtered } = nextProps.todosContainer;
    const dataSource = this.state.dataSource.cloneWithRows(filtered);
    this.setState({ dataSource });
  }

  renderRow(todo) {
    return (
      <TaskRow
        todo={todo}
        doneTodo={() => {
          this.props.doneTodo(todo);
          this.props.filterTodo(this.state.done);
        }}
      />
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.switch}>
          <View style={{ margin: 15 }}>
            <Switch
              value={this.state.done}
              onValueChange={() =>
                this.setState(
                  {
                    done: !this.state.done,
                  },
                  () => {
                    this.props.filterTodo(this.state.done);
                  }
                )
              }
            />
          </View>
          <View>
            <Text>{this.state.done ? 'Feitos' : 'Pendentes'}</Text>
          </View>
        </View>
        <ListView
          key={this.props.todosContainer.filtered}
          dataSource={this.state.dataSource}
          renderRow={(rowData) => this.renderRow(rowData)}
        />
        <CustomizeButtom
          caption="Add"
          styleButton={styles.button}
          onPressButton={() =>
            this.props.navigation.navigate('Task', {
              ...this.props,
              ...{ done: this.state.done },
            })
          }
        />
      </View>
    );
  }
}

TaskList.propTypes = {
  todosContainer: PropTypes.object.isRequired,
  navigation: PropTypes.object.isRequired,
  doneTodo: PropTypes.func.isRequired,
  filterTodo: PropTypes.func.isRequired,
};

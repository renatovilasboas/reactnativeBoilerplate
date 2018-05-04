import React from 'react';
import { Text, View, TouchableHighlight } from 'react-native';

export default function render(styles, todo, removeTodo) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{`ANDROID:${todo.task}`}</Text>
      <TouchableHighlight
        style={styles.doneButton}
        onPress={() => removeTodo()}
      >
        <Text>Done</Text>
      </TouchableHighlight>
    </View>
  );
}

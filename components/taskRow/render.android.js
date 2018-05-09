import React from 'react';
import { Text, View, TouchableHighlight, Image } from 'react-native';

const localStyle = {
  image: {
    resizeMode: Image.resizeMode.stretch,
    height: 36,
    width: 36,
    backgroundColor: 'transparent',
    padding: 5,
    borderRadius: 50,
  },
};

export default function render(styles, todo, removeTodo) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{todo.task}</Text>
      <TouchableHighlight
        style={styles.doneButton}
        onPress={() => removeTodo(todo)}
      >
        <Image
          source={require('../../img/done.png')}
          style={localStyle.image}
        />
      </TouchableHighlight>
    </View>
  );
}

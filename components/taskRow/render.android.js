import React from 'react';
import { Text, View, TouchableHighlight, Image, Animated } from 'react-native';

export default function render(styles, todo, removeTodo) {
  const doneAnimation = new Animated.ValueXY();

  const localStyle = {
    image: {
      resizeMode: Image.resizeMode.stretch,
      height: 36,
      width: 36,
      backgroundColor: 'transparent',
      padding: 5,
      borderRadius: 50,
    },
    row: {
      transform: doneAnimation.getTranslateTransform(),
    },
  };

  function animatedPress() {
    Animated.spring(doneAnimation, {
      tension: 60,
      friction: 60,
      toValue: {
        x: -500,
        y: 0,
      },
    }).start();
    removeTodo();
  }

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{todo.task}</Text>
      <TouchableHighlight
        style={styles.doneButton}
        onPress={() => animatedPress()}
      >
        <Image
          source={require('../../img/done.png')}
          style={localStyle.image}
        />
      </TouchableHighlight>
    </View>
  );
}

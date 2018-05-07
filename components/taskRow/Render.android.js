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
      friction: 10,
      toValue: {
        x: -500,
        y: 0,
      },
    }).start();
    removeTodo();
  }

  return (
    <Animated.View style={[styles.container, localStyle.row]}>
      <Text style={styles.label}>{`${todo.task}`}</Text>
      <TouchableHighlight
        underlayColor="white"
        style={styles.doneButton}
        onPress={() => animatedPress()}
      >
        <Image
          source={require('../../images/done.png')}
          style={localStyle.image}
        />
      </TouchableHighlight>
    </Animated.View>
  );
}

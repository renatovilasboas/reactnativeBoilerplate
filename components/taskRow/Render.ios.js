import React from 'react';
import { Text, View } from 'react-native';
import { SwipeRow, Button, Icon, Content } from 'native-base';

const IOSstyles = {
  row: {
    borderWidth: 0,
    justifyContent: 'center',
  },
  swipe: {
    marginBottom: 10,
    borderWidth: 0.5,
    borderColor: '#fff',
  },
};

export default function render(styles, todo, removeTodo) {
  return (
    <Content scrollEnabled={false}>
      <SwipeRow
        style={IOSstyles.swipe}
        rightOpenValue={-100}
        body={
          <View style={[styles.container, IOSstyles.row]}>
            <Text style={styles.label}>{`${todo.task}`}</Text>
          </View>
        }
        right={
          <Button
            style={{ backgroundColor: '#05A5D1', marginBottom: 10 }}
            danger
            onPress={() => removeTodo()}
          >
            <Icon active name="trash" />
          </Button>
        }
      />
    </Content>
  );
}

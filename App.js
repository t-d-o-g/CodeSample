import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Card, TextInput, Button, DefaultTheme } from 'react-native-paper'

export default class App extends React.Component {
  render() {
    return (
      <Card style={styles.container}>
          <TextInput 
            style={styles.inputContainerStyle}
            testID='text-input'
            mode='outlined'
          />
      </Card>
    );
  }
}

const styles = StyleSheet.create({
  inputContainerStyle: {
    margin: 128,
  },
});

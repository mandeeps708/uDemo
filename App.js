/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import Toast from 'react-native-simple-toast';
import * as Animatable from 'react-native-animatable';
 
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

Toast.show('Welcome! <3', Toast.LONG);

export default class App extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
        <Animatable.Text animation="zoomInUp">Zoom me up, Scotty</Animatable.Text>
        <Animatable.Text
            animation="zoomIn" 
            delay={1000} 
            duration={500} 
            iterationCount={1} 
            style={{ textAlign: 'center', fontSize: 50 }}>
            ❤️
        </Animatable.Text>
        <Text style={styles.welcome}>
          Oaaa.... Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit App.js
        </Text>
        <Text style={styles.instructions}>
          {instructions}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

const MOVIE_LIST = [
  { title: 'Fight Club', year: '2000', poster: { thumbnail: 'https://s-media-cache-ak0.pinimg.com/736x/fd/5e/66/fd5e662dce1a3a8cd192a5952fa64f02.jpg' }}
];

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

export default class ReactNativeAndroid extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>{MOVIE_LIST[0].title}</Text>
        <Text>{MOVIE_LIST[0].year}</Text>
        <Image source={{ uri: MOVIE_LIST[0].poster.thumbnail}}
          style={styles.thumbnail}
        />
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
  thumbnail: {
    width: 100,
    height:200,
  },
});

AppRegistry.registerComponent('ReactNativeAndroid', () => ReactNativeAndroid);

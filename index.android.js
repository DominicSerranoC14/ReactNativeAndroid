const MOVIE_LIST = [
  { title: 'Fight Club', year: '2000', poster: { thumbnail: 'https://s-media-cache-ak0.pinimg.com/736x/fd/5e/66/fd5e662dce1a3a8cd192a5952fa64f02.jpg' }}
];

import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View,
  Image
} from 'react-native';
import styles from './styles/android.js'

export default class ReactNativeAndroid extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image source={{ uri: MOVIE_LIST[0].poster.thumbnail}}
        style={styles.thumbnail}
        />

      <View style={styles.rightContainer}>
        <Text style={styles.title}>{MOVIE_LIST[0].title}</Text>
        <Text style={styles.year}>{MOVIE_LIST[0].year}</Text>
      </View>

      </View>
    );
  }
}

AppRegistry.registerComponent('ReactNativeAndroid', () => ReactNativeAndroid);

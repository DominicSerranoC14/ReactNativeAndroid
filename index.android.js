'use strict';

import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View,
  Image,
  ListView
} from 'react-native';
import styles from './styles/android.js'

const MOVIE_LIST = [
  { title: 'Fight Club', year: '2000', poster: { thumbnail: 'https://s-media-cache-ak0.pinimg.com/736x/fd/5e/66/fd5e662dce1a3a8cd192a5952fa64f02.jpg' }}
];

export default class ReactNativeAndroid extends Component {

  constructor(props) {
    super(props);
    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      }),
      loaded: false,
    };
  };

  componentDidMount() {
    this.fetchData();
  };

  fetchData() {
    fetch('https://raw.githubusercontent.com/facebook/react-native/master/docs/MoviesExample.json')
    .then((response) => response.json())
    .then((responseData) => {
      console.log("responseData", responseData);
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(responseData.movies.slice(0, 10)),
        loaded: true
      });
    })
    .done();
  };

  render() {
    if (!this.state.loaded) {
      return this.renderLoadingView();
    }

    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={this.renderMovie}
        style={styles.listView}
      />
    );
  }

  renderLoadingView() {
    return (
      <View style={styles.container}>
        <Text>
          Loading movies...
        </Text>
      </View>
    );
  }

  renderMovie(movie) {
    return (
      <View style={styles.container}>
        <Image
          source={{uri: movie.posters.thumbnail}}
          style={styles.thumbnail}
        />
        <View style={styles.rightContainer}>
          <Text style={styles.title}>{movie.title}</Text>
          <Text style={styles.year}>{movie.year}</Text>
        </View>
      </View>
    );
  }
}

AppRegistry.registerComponent('ReactNativeAndroid', () => ReactNativeAndroid);

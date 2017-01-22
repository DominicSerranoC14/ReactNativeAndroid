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
    fetch('http://www.omdbapi.com/?s=Batman')
    .then(response => response.json())
    .then(jsonObj => jsonObj.Search)
    .then(movieArray => {
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(movieArray),
        loaded: true
      });
    })
    .catch(console.error);

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
          source={{uri: movie.Poster}}
          style={styles.thumbnail}
        />
        <View style={styles.rightContainer}>
          <Text style={styles.title}>{movie.Title}</Text>
          <Text style={styles.year}>{movie.Year}</Text>
        </View>
      </View>
    );
  }
}

AppRegistry.registerComponent('ReactNativeAndroid', () => ReactNativeAndroid);

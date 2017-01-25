'use strict';

import React, { Component } from 'react';
import { AppRegistry, Text, TextInput, View, Button, Image, ScrollView } from 'react-native';
import styles from './styles/androidStyles.js';

export default class ReactNativeAndroid extends Component {

  constructor(props) {
    super(props);
    this.state = {
      value: '',
      submitValue: '',
      movieSearch: null,
      movieState: false
    };

    // Must bind function to this if you want use this
    this.searchForMovieTitle = this.searchForMovieTitle.bind(this);
  };

  searchForMovieTitle() {
    fetch(`http://www.omdbapi.com/?s=${this.state.value}`)
    .then(response => response.json())
    .then(jsonObj => jsonObj.Search)
    .then(unsortedArray => unsortedArray.sort((a, b) => b.Year - a.Year))
    .then(movieArray => this.setState({
      movieSearch: movieArray,
      movieState: true
    }))
    .catch(console.error);
  };

  render() {

    if (this.state.movieState) {
      return (
        <ScrollView style={styles.searchContainer}>
          <View style={styles.searchHeaderView}>
            <Button
              onPress={() => this.setState({movieState: false, value: ''})}
              title="Back"
              color="red"
            />
            <Text style={styles.searchHeaderTitle}>Search Results</Text>
          </View>


          {this.state.movieSearch.map((each, i) => {

            if (each.Poster === 'N/A') {
              each.Poster = 'http://vignette2.wikia.nocookie.net/main-cast/images/5/5b/Sorry-image-not-available.png/revision/latest?cb=20160625173435';
            };

            return (

              <View key={i} style={styles.movieContainer}>

                <Image style={styles.movieImage} source={{uri: each.Poster}} />
                <View style={styles.movieTextView}>
                  <Text style={styles.movieTitleText} >{each.Title}</Text>
                  <Text style={styles.movieYearText} >{each.Year}</Text>
                </View>

              </View>
            );
          })}
        </ScrollView>
      )
    };

    return (
      <View style={styles.formContainer}>

        <Text style={styles.formTitle}>Movie Finder</Text>
        <Text style={styles.formDesc}>Search for your favorite movie here to see similar titles and more!</Text>
        <TextInput
          style={styles.formInput}
          placeholder="Search by Movie Title"
          value={this.state.value}
          onChangeText={text => this.setState({value: text})}
          onSubmitEditing={this.searchForMovieTitle}
        />

        <View style={styles.formButton}>
          <Button
            onPress={this.searchForMovieTitle}
            title="Search"
            color="green"
          />
        </View>

      </View>
    );
  }
}


AppRegistry.registerComponent('ReactNativeAndroid', () => ReactNativeAndroid);

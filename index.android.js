'use strict';

import React, { Component } from 'react';
import { AppRegistry, Text, TextInput, View, Button, Image, ScrollView } from 'react-native';

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
    this.onButtonPress = this.onButtonPress.bind(this);
  };

  onButtonPress() {
    console.log(this.state.value);
    alert(this.state.value);

    fetch(`http://www.omdbapi.com/?s=${this.state.value}`)
    .then(response => response.json())
    .then(jsonObj => jsonObj.Search)
    .then(movieArray => this.setState({
      movieSearch: movieArray,
      movieState: true
    }))
    .catch(console.error);

  };

  render() {

    if (this.state.movieState) {
      return (
        <ScrollView >
          <Text style={{fontSize: 30, textAlign: 'center', fontFamily: 'Times New Roman', margin: 10}}>Search Results</Text>

          {this.state.movieSearch.map((each, i) => {
            if (each.Poster === 'N/A') {
              each.Poster = 'http://vignette2.wikia.nocookie.net/main-cast/images/5/5b/Sorry-image-not-available.png/revision/latest?cb=20160625173435';
            };

            return (

              <View key={i} style={{flexDirection: 'row', backgroundColor: 'lightgrey', alignItems: 'center', padding: 10, marginBottom: 10}}>

                <Image style={{width: 150, height: 175}} source={{uri: each.Poster}} />
                <View style={{flex: 1}}>
                  <Text style={{fontSize: 25, textAlign: 'center', fontFamily: 'Times New Roman', color: 'white'}} >{each.Title}</Text>
                  <Text style={{fontSize: 15, textAlign: 'center', fontFamily: 'Times New Roman', color: 'white'}} >{each.Year}</Text>
                </View>

              </View>
            );
          })}
        </ScrollView>
      )
    };

    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>

        <Text style={{fontSize: 30, fontFamily: 'Times New Roman'}}>Movie Finder</Text>
        <TextInput
          style={{height: 40, width: 200, margin: 20}}
          placeholder="Type here"
          value={this.state.value}
          onChangeText={text => this.setState({value: text})}
          onSubmitEditing={this.onButtonPress}
        />

        <View style={{width: 200}}>
          <Button
            onPress={this.onButtonPress}
            title="Search"
            color="green"
          />
        </View>

      </View>
    );
  }
}


AppRegistry.registerComponent('ReactNativeAndroid', () => ReactNativeAndroid);

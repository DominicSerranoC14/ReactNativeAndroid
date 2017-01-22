'use strict';

import React, { Component } from 'react';
import { AppRegistry, Text, TextInput, View, Button } from 'react-native';

export default class ReactNativeAndroid extends Component {

  constructor(props) {
    super(props);
    this.state = {
      value: '',
      submitValue: '',
      movieArray: ''
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
    .then(movieArray => this.setState({movieSearch: movieArray}))
    .catch(console.error);

  };

  render() {

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


class MovieContent extends Component {

  constructor(props) {
    super(props);
  };

  render() {
    return (
      <View style={{flex: 1}}>
        {this.props.movieArray.map((each, i) => <Text key={i}>{each.Title}</Text>)}
      </View>
    )
  };

}


AppRegistry.registerComponent('ReactNativeAndroid', () => ReactNativeAndroid);

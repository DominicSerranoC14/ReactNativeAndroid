'use strict';

import React, { Component } from 'react';
import { AppRegistry, Text, TextInput, View } from 'react-native';

export default class ReactNativeAndroid extends Component {

  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
  };

  render() {
    return (
      <View style={{flex: 1}}>
        <TextInput
          style={{height: 40, width: 100}}
          placeholder="Type here"
          value={this.state.value}
          onChangeText={text => this.setState({value: text})}
        />
        <Text style={{height: 40, width: 100}} >{this.state.value}</Text>
      </View>
    );
  }
}


AppRegistry.registerComponent('ReactNativeAndroid', () => ReactNativeAndroid);

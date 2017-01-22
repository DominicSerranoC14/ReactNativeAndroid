'use strict';

import React, { Component } from 'react';
import { AppRegistry, Text, TextInput, View, Button } from 'react-native';

export default class ReactNativeAndroid extends Component {

  constructor(props) {
    super(props);
    this.state = {
      value: '',
      submitValue: ''
    };

    // Must bind function to this if you want use this
    this.onButtonPress = this.onButtonPress.bind(this);
  };

  onButtonPress() {
    this.setState({submitValue: this.state.value})
  };

  render() {

    return (
      <View style={{flex: 1}}>
        <TextInput
          style={{height: 40, width: 100}}
          placeholder="Type here"
          value={this.state.value}
          onChangeText={text => this.setState({value: text})}
          onSubmitEditing={() => this.setState({ submitValue : this.state.value })}
        />

        <Text style={{height: 40, width: 100}} >{this.state.value}</Text>
        <Text style={{height: 40, width: 100}} >{this.state.submitValue}</Text>

        <Button
          containerStyle={{padding:10, height:45, width: 100}}
          onPress={this.onButtonPress}
          title="Learn More"
          color="#841584"
        />

      </View>
    );
  }
}


AppRegistry.registerComponent('ReactNativeAndroid', () => ReactNativeAndroid);

import React, { Component } from 'react';
import { AppRegistry, Image } from 'react-native';

export default class Bananas extends Component {
  render() {
    return (
      <Image source={require('./doitnative.png')} style={{flex: 1,width: null,height: null,resizeMode: 'contain'}}/>
    );
  }
}


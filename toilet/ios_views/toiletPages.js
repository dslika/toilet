'use static';

import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import TWebView from './twebView'

class ToiletPages extends Component {
  render() {
    return (
      <TWebView url='https://www'/>
    );
  }
}

module.exports = ToiletPages;
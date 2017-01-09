'use static';

import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import TWebView from './twebView'
import Util from './util'

console.log(Util.size());
console.log(Util.size());
class ToiletPages extends Component {
  render() {
    return (
      <TWebView url='https://www.google.co.jp/maps/search/%E3%83%88%E3%82%A4%E3%83%AC/@33.5875624,130.4005903,14.99z'/>
    );
  }
}

module.exports = ToiletPages;
'use static';

import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

class ReadPages extends Component {
  render() {
    return (
      <Text style={styles.text}>
        読む
      </Text>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    fontSize: 40
  }
});

module.exports = ReadPages;
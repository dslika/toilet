'use static';

import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

class toiletPages extends Component {
  render() {
    return (
      <Text style={styles.text}>
        トイレ
      </Text>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    fontSize: 40
  }
});

module.exports = toiletPages;
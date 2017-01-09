'use static';

import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

class SettingPages extends Component {
  render() {
    return (
      <Text style={styles.text}>
        設定
      </Text>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    fontSize: 40
  }
});

module.exports = SettingPages;
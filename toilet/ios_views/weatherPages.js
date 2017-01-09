'use static';

import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

class WeatherPages extends Component {
  render() {
    return (
      <Text style={styles.text}>
        天気
      </Text>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    fontSize: 40
  }
});

module.exports = WeatherPages;
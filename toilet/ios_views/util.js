'use static';

import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  PixelRatio
} from 'react-native';

module.exports = {
  size: {
    height: Dimensions.get('windows').height,
    width: Dimensions.get('windows').width
  },

  pixel: 1 / PixelRatio.get(),

  get: function (url, successCallBack, failCallback) {
    fetch(url)
      .then((response) => response.json())
      .then((responseJson) => {
        successCallBack(responseJson);
      })
      .catch((error) => {
        failCallback(error);
        console.error(error);
      })
  }
};
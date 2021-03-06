'use static';

import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TabBarIOS
} from 'react-native';

import ToiletPages from './ios_views/toiletPages';
import ReadPages from './ios_views/readPages';
import WeatherPages from './ios_views/weatherPages';
import SettingPages from './ios_views/settingPages';

const base64Icon =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEsAAABLCAQAAACSR7JhAAADtUlEQVR4Ac3YA2Bj6QLH0XPT1Fzbtm29tW3btm3bfLZtv7e2ObZnms7d8Uw098tuetPzrxv8wiISrtVudrG2JXQZ4VOv+qUfmqCGGl1mqLhoA52oZlb0mrjsnhKpgeUNEs91Z0pd1kvihA3ULGVHiQO2narKSHKkEMulm9VgUyE60s1aWoMQUbpZOWE+kaqs4eLEjdIlZTcFZB0ndc1+lhB1lZrIuk5P2aib1NBpZaL+JaOGIt0ls47SKzLC7CqrlGF6RZ09HGoNy1lYl2aRSWL5GuzqWU1KafRdoRp0iOQEiDzgZPnG6DbldcomadViflnl/cL93tOoVbsOLVM2jylvdWjXolWX1hmfZbGR/wjypDjFLSZIRov09BgYmtUqPQPlQrPapecLgTIy0jMgPKtTeob2zWtrGH3xvjUkPCtNg/tm1rjwrMa+mdUkPd3hWbH0jArPGiU9ufCsNNWFZ40wpwn+62/66R2RUtoso1OB34tnLOcy7YB1fUdc9e0q3yru8PGM773vXsuZ5YIZX+5xmHwHGVvlrGPN6ZSiP1smOsMMde40wKv2VmwPPVXNut4sVpUreZiLBHi0qln/VQeI/LTMYXpsJtFiclUN+5HVZazim+Ky+7sAvxWnvjXrJFneVtLWLyPJu9K3cXLWeOlbMTlrIelbMDlrLenrjEQOtIF+fuI9xRp9ZBFp6+b6WT8RrxEpdK64BuvHgDk+vUy+b5hYk6zfyfs051gRoNO1usU12WWRWL73/MMEy9pMi9qIrR4ZpV16Rrvduxazmy1FSvuFXRkqTnE7m2kdb5U8xGjLw/spRr1uTov4uOgQE+0N/DvFrG/Jt7i/FzwxbA9kDanhf2w+t4V97G8lrT7wc08aA2QNUkuTfW/KimT01wdlfK4yEw030VfT0RtZbzjeMprNq8m8tnSTASrTLti64oBNdpmMQm0eEwvfPwRbUBywG5TzjPCsdwk3IeAXjQblLCoXnDVeoAz6SfJNk5TTzytCNZk/POtTSV40NwOFWzw86wNJRpubpXsn60NJFlHeqlYRbslqZm2jnEZ3qcSKgm0kTli3zZVS7y/iivZTweYXJ26Y+RTbV1zh3hYkgyFGSTKPfRVbRqWWVReaxYeSLarYv1Qqsmh1s95S7G+eEWK0f3jYKTbV6bOwepjfhtafsvUsqrQvrGC8YhmnO9cSCk3yuY984F1vesdHYhWJ5FvASlacshUsajFt2mUM9pqzvKGcyNJW0arTKN1GGGzQlH0tXwLDgQTurS8eIQAAAABJRU5ErkJggg==';

class toilet extends Component {

  state = {
    selectedTab: 'toilet'
  };

  constructor() {
    super();
  }

  render() {
    return (
      <TabBarIOS>
        <TabBarIOS.Item
          title="トイレ"
          icon={{uri: base64Icon, scale: 3.5}}
          selected={this.state.selectedTab === 'toilet'}
          onPress={() => {
            this.setState({
              selectedTab: 'toilet',
            });
          }}
        >
          {this._renderContent('toilet')}
        </TabBarIOS.Item>

        <TabBarIOS.Item
          title="読む"
          icon={{uri: base64Icon, scale: 3.5}}
          selected={this.state.selectedTab === 'read'}
          onPress={() => {
            this.setState({
              selectedTab: 'read',
            });
          }}
        >
          {this._renderContent('read')}
        </TabBarIOS.Item>

        <TabBarIOS.Item
          title="天気"
          icon={{uri: base64Icon, scale: 3.5}}
          selected={this.state.selectedTab === 'weather'}
          onPress={() => {
            this.setState({
              selectedTab: 'weather',
            });
          }}
        >
          {this._renderContent('weather')}
        </TabBarIOS.Item>

        <TabBarIOS.Item
          title="設定"
          icon={{uri: base64Icon, scale: 3.5}}
          selected={this.state.selectedTab === 'setting'}
          onPress={() => {
            this.setState({
              selectedTab: 'setting',
            });
          }}
        >
          {this._renderContent('setting')}
        </TabBarIOS.Item>
      </TabBarIOS>
    );
  }

  _renderContent = (moduleName: string) => {
    let viewObj;
    switch (moduleName) {
      case 'toilet':
        viewObj = <ToiletPages/>;
        break;
      case 'read':
        viewObj = <ReadPages/>;
        break;
      case 'weather':
        viewObj = <WeatherPages/>;
        break;
      case 'setting':
        viewObj = <SettingPages/>;
        break;
      default:
        viewObj = <ToiletPages/>;
    }

    return viewObj;
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5fcff',
  }
});

AppRegistry.registerComponent('toilet', () => toilet);

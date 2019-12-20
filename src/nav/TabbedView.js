import {Navigation} from 'react-native-navigation';
import React, {Component} from 'react';
import ScrollableTabView, {
  DefaultTabBar,
  ScrollableTabBar,
} from 'react-native-scrollable-tab-view';
import {View, Text} from 'react-native';

import Listings from './Listings';
import Profile from './Profile';

class TabbedView extends Component {
  render() {
    return (
      <ScrollableTabView
        renderTabBar={() => (
          <ScrollableTabBar
            style={styles.scrollStyle}
            tabStyle={styles.tabStyle}
          />
        )}
        tabBarTextStyle={styles.tabBarTextStyle}
        tabBarInactiveTextColor={'white'}
        tabBarActiveTextColor={'white'}
        tabBarUnderlineStyle={styles.underlineStyle}
        initialPage={0}>
        <View key={'1'} tabLabel={'Listings'}>
          <Listings />
        </View>
        <View key={'2'} tabLabel={'Profile'}>
          <Profile />
        </View>
      </ScrollableTabView>
    );
  }
}

const styles = {
  tabStyle: {},
  scrollStyle: {
    backgroundColor: '#3454B4',
    paddingLeft: 0,
    paddingRight: 0,
    justifyContent: 'center',
  },
  tabBarTextStyle: {
    fontSize: 14,
    fontWeight: 'normal',
  },
  underlineStyle: {
    height: 3,
    backgroundColor: 'white',
    borderRadius: 3,
    width: 100,
    justifyContent: 'center'
  },
};
export default TabbedView;

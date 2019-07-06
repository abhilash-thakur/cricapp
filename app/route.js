import React from 'react';
import { Dimensions } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import Home from './screens/Home';
import Matches from './screens/Matches';
import News from './screens/News';
import Videos from './screens/Videos';
import Profile from './screens/Profile';

let screen = Dimensions.get('window');

export const Tabs = createBottomTabNavigator({
  'Home': {
    screen: Home,
    navigationOptions: {
      tabBarLabel: 'Home',
      tabBarIcon: ({ tintColor }) => <Icon name="home" type="entypo" size={28} color={tintColor} />
    },
  },
  'Matches': {
    screen: Matches,
    navigationOptions: {
      tabBarLabel: 'Matches',
      tabBarIcon: ({ tintColor }) => <Icon name="cricket" type="material-community" size={28} color={tintColor} />
    },
  },
  'News': {
    screen: News,
    navigationOptions: {
      tabBarLabel: 'News',
      tabBarIcon: ({ tintColor }) => <Icon name="newsletter" type="entypo" size={28} color={tintColor} />
    },
  },
  'Videos': {
    screen: Videos,
    navigationOptions: {
      tabBarLabel: 'Videos',
      tabBarIcon: ({ tintColor }) => <Icon name="video" type="entypo" size={28} color={tintColor} />
    },
  },
  'Profile': {
    screen: Profile,
    navigationOptions: {
      tabBarLabel: 'Profile',
      tabBarIcon: ({ tintColor }) => <Icon name="face-profile" type="material-community" size={28} color={tintColor} />
    },
  },
});

export const createRootNavigator = () => {
  return createStackNavigator(
      {
          Tabs: {
              screen: Tabs,
              navigationOptions: () => ({
                  gesturesEnabled: false,
              })
          }
      },
      {
          headerMode: "none",
          mode: "modal"
      }
  );
};
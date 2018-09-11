import React, { Component } from 'react';
import {
  TabNavigator,
  TabBarBottom,
  FooterTabs,
  TXTabBar
} from 'react-navigation';
import { Text } from 'react-native';
import Photo from './ProfilePosts';
import Favorites from './ProfileFavorites';

export default (AppStackNavigator = TabNavigator(
  {
    Favorites: {
      screen: Favorites,
      navigationOptions: {
        tabBarLabel: ({ tintColor }) => (
          <Text
            style={{ color: tintColor, textAlign: 'center', marginBottom: 12 }}
          >
            علاقه مندی ها
          </Text>
        )
      }
    },
    Photo: {
      screen: Photo,
      navigationOptions: {
        tabBarLabel: ({ tintColor }) => (
          <Text
            style={{ color: tintColor, textAlign: 'center', marginBottom: 12 }}
          >
            عکس ها
          </Text>
        )
      }
    }
  },
  {
    tabBarPosition: 'top',
    tabBarComponent: TabBarBottom,
    initialRouteName: 'Photo',
    tabBarOptions: {
      style: {
        backgroundColor: 'rgb(239, 239, 239)'
      },
      activeTintColor: 'rgb(25, 50, 75)'
    }
  }
));

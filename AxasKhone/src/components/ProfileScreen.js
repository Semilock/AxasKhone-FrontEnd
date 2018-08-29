import React, { Component } from 'react';
import {
  createStackNavigator,
  TabNavigator,
  TabBarBottom,
  navigatinOptions
} from 'react-navigation';
import { View, Image, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import ProfileStack from '../assets/pages/Profile/index';
import AddPost from '../assets/pages/AddPost/index';
import HomeUser from '../assets/pages/HomeUser/index';
import Notif from '../assets/pages/Notification/index';
import Search from '../assets/pages/Search/index';

export default (AppStackNavigator = TabNavigator(
  {
    Profile: {
      screen: ProfileStack,
      navigationOptions: {
        // tabBarLabel: ({tintColor}) => <Text style={{color: tintColor, textAlign: 'center', marginBottom: 12}}>profile</Text>,
        tabBarIcon: ({ focused }) =>
          focused ? (
            <Icon name="md-person" size={30} color="rgb(133, 69, 255)" />
          ) : (
            <Icon name="md-person" size={30} color="rgb(239, 239, 239)" />
          )
      }
    },
    Notification: {
      screen: Notif,
      navigationOptions: {
        tabBarIcon: ({ focused }) =>
          focused ? (
            <Icon name="md-notifications" size={30} color="rgb(133, 69, 255)" />
          ) : (
            <Icon
              name="md-notifications"
              size={30}
              color="rgb(239, 239, 239)"
            />
          )
      }
    },
    AddPost: {
      screen: AddPost,
      navigationOptions: {
        tabBarIcon: ({ focused }) =>
          focused ? (
            <Icon name="md-add" size={30} color="rgb(133, 69, 255)" />
          ) : (
            <Icon name="md-add" size={30} color="rgb(239, 239, 239)" />
          )
      }
    },
    Search: {
      screen: Search,
      navigationOptions: {
        tabBarIcon: ({ focused }) =>
          focused ? (
            <Icon name="md-search" size={30} color="rgb(133, 69, 255)" />
          ) : (
            <Icon name="md-search" size={30} color="rgb(239, 239, 239)" />
          )
      }
    },
    HomeUser: {
      screen: HomeUser,
      navigationOptions: {
        tabBarIcon: ({ focused }) =>
          focused ? (
            <Icon name="md-home" size={30} color="rgb(133, 69, 255)" />
          ) : (
            <Icon name="md-home" size={30} color="rgb(239, 239, 239)" />
          )
      }
    }
  },
  {
    tabBarPosition: 'bottom',
    tabBarComponent: TabBarBottom,
    tabBarOptions: {
      labelStyle: {
        fontSize: 14
      },
      showLabel: false,
      // showIcon: true,
      style: {
        backgroundColor: 'rgb(25, 50, 75)'
      },
      activeTintColor: 'white'
    }
  }
));

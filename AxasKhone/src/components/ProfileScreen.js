import React, {Component} from 'react';
import { createStackNavigator, TabNavigator, TabBarBottom } from 'react-navigation';
import { View } from 'react-native';

import Profile from './../assets/pages/Profile/index'
import AddPost from './../assets/pages/AddPost/index'
import HomeUser from './../assets/pages/HomeUser/index'
import Notif from './../assets/pages/Notification/index'
import Search from './../assets/pages/Search/index'

export default class ProfileScreen extends Component {
    render() {
      return (
        <AppStackNavigator/>
      );
    }
  }

const AppStackNavigator = TabNavigator({
    Profile: {
        screen: Profile
    },
    Notification: {
        screen: Notif
    },
    AddPost: {
        screen: AddPost
    },
    Search: {
        screen: Search
    },
    HomeUser: {
        screen: HomeUser
    },
},{
    tabBarPosition: 'bottom',
    tabBarComponent: TabBarBottom,
})

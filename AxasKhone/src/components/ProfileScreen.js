import React, {Component} from 'react';
import { createStackNavigator, TabNavigator } from 'react-navigation';
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
    AddPost: {
        screen: AddPost
    },
    HomeUser: {
        screen: HomeUser
    },
    Notification: {
        screen: Notif
    },
    Search: {
        screen: Search
    },
})

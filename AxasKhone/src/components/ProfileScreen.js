import React, {Component} from 'react';
import { createStackNavigator, TabNavigator, TabBarBottom, navigatinOptions } from 'react-navigation';
import { View, Image, Text } from 'react-native';

import ProfileStack from './../assets/pages/Profile/index'
import AddPost from './../assets/pages/AddPost/index'
import HomeUser from './../assets/pages/HomeUser/index'
import Notif from './../assets/pages/Notification/index'
import Search from './../assets/pages/Search/index'



export default class ProfileScreen extends Component {
    render() {
      return (
        // <RootStack />
        <AppStackNavigator/>
      );
    }
  }


const AppStackNavigator = TabNavigator({
    Profile: { screen: ProfileStack, 
        navigationOptions: {
        tabBarLabel: ({tintColor}) => <Text style={{color: tintColor, textAlign: 'center', marginBottom: 12}}>profile</Text>,
        },
      },
    Notification: { screen: Notif },
    AddPost: { screen: AddPost },
    Search: { screen: Search },
    HomeUser: { screen: HomeUser },
},{
    tabBarPosition: 'bottom',
    tabBarComponent: TabBarBottom,
    tabBarOptions: {
      labelStyle: {
        fontSize: 14,
      },
      // showLabel: false, 
      // showIcon: true,
      style: {
        backgroundColor: 'rgb(25, 50, 75)',
      },
      activeTintColor: 'white'
    }
})

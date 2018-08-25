import React, {Component} from 'react';
import { View, Text, Image, ScrollView, StatusBar, TouchableOpacity, TextInput } from 'react-native';
import { createStackNavigator, TabNavigator, TabBarBottom, navigatinOptions } from 'react-navigation';

import styles from './Profile.style'


export default class Setting extends Component {

  static navigationOptions = {
    tabBarVisible: true,
    headerStyle: {
      backgroundColor: 'rgb(25, 50, 75)',
      elevation: 0,
     },
     headerTintColor: 'white',
     headerRight: <Text style={[style={alignItems: 'center', margin: 10, color: 'white', fontSize: 18}]}>تنظیمات</Text>, 
 }

  render() {
    return (
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
      <View style={styles.container}>
      
        <StatusBar
          backgroundColor='rgb(25, 50, 75)'
        />

        <View style={[style={alignItems: 'center', margin: 10}]}>
          <Image borderRadius={45} source={require('../../img/id1.jpg')} />
        </View>

        <View style={[{justifyContent: 'center'}]}>
          <TouchableOpacity activeOpacity={.8}>
              <Text style={styles.buttomSubmit}>ذخیره تغییرات</Text>
          </TouchableOpacity>
        </View>
      
      </View>
      </ScrollView>
    );
  }
}

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

        <View style={[style={ marginTop: 15 }]}>
          <TouchableOpacity activeOpacity={.8} onPress={() => this.props.navigation.navigate('SignUp')}>
            <Text style={[{color: 'black', borderTopWidth: 1, borderBottomWidth: 1,fontSize: 16, textAlign: 'right', padding: 15,}]}>تغییر رمز عبور</Text>
          </TouchableOpacity>
        </View>

        <View style={[{flex: 1,justifyContent: 'flex-end'}]}>
          <TouchableOpacity activeOpacity={.8}>
            <Text style={[styles.buttomSubmit, {backgroundColor: 'red', color: 'white'}]}>خروج از حساب</Text>
          </TouchableOpacity>
        </View>
      
      </View>
      </ScrollView>
    );
  }
}

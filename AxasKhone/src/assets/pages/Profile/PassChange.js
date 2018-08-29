import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  StatusBar,
  TouchableOpacity,
  TextInput
} from 'react-native';
import {
  createStackNavigator,
  TabNavigator,
  TabBarBottom,
  navigatinOptions
} from 'react-navigation';

import styles from './Profile.style';

export default class PassChange extends Component {
  static navigationOptions = {
    tabBarVisible: true,
    headerStyle: {
      backgroundColor: 'rgb(25, 50, 75)',
      elevation: 0
    },
    headerTintColor: 'white',
    headerRight: (
      <Text
        style={[
          (style = {
            alignItems: 'center',
            margin: 10,
            color: 'white',
            fontSize: 18
          })
        ]}
      >
        تغییر رمز عبور
      </Text>
    )
  };

  render() {
    return (
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={styles.container}>
          <StatusBar backgroundColor="rgb(25, 50, 75)" />

          <View style={[(style = { alignItems: 'center', margin: 30 })]}>
            <Image borderRadius={45} source={require('../../img/id1.jpg')} />
          </View>

          <View style={[{ justifyContent: 'center' }]}>
            <TextInput
              style={styles.inputText}
              placeholder="رمز قدیمی خود را وارد کنید "
              secureTextEntry
              underlineColorAndroid="transparent"
            />
            <TextInput
              style={styles.inputText}
              placeholder=" رمز جدید را وارد کنید "
              secureTextEntry
              underlineColorAndroid="transparent"
            />
          </View>

          <View style={[{ flex: 1, justifyContent: 'flex-end' }]}>
            <TouchableOpacity activeOpacity={0.8}>
              <Text style={[styles.buttomSubmit]}> ثبت رمز عبور جدید </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    );
  }
}

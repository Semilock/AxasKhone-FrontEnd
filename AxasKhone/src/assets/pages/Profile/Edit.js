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

export default class Edit extends Component {
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
        ویرایش پروفایل
      </Text>
    )
  };

  render() {
    return (
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={styles.container}>
          <StatusBar backgroundColor="rgb(25, 50, 75)" />

          <View style={[(style = { alignItems: 'center', margin: 10 })]}>
            <Image borderRadius={45} source={require('../../img/id1.jpg')} />
          </View>

          <View style={[{ justifyContent: 'center' }]}>
            <TextInput
              style={styles.inputText}
              placeholder="samyar.mirkazemi"
              underlineColorAndroid="transparent"
            />
            <TextInput
              style={styles.inputText}
              placeholder="سامیار میرکاظمی"
              secureTextEntry={false}
              underlineColorAndroid="transparent"
            />
            <TextInput
              style={styles.inputText}
              placeholder="sammirkazemi@outlook.com"
              secureTextEntry={false}
              underlineColorAndroid="transparent"
            />
            <TextInput
              style={[styles.inputText, (style = { height: 150 })]}
              placeholder="برنامه نویسی اندروید"
              secureTextEntry={false}
              underlineColorAndroid="transparent"
            />
            <TouchableOpacity activeOpacity={0.8}>
              <Text style={styles.buttomSubmit}>ذخیره تغییرات</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    );
  }
}

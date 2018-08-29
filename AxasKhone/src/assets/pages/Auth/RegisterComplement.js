import React, { Component } from 'react';
import LinearGradient from 'react-native-linear-gradient';

import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  StatusBar,
  ScrollView
} from 'react-native';

import styles from '../../styles/login.style';

export default class RegisterComplement extends Component {
  static navigationOptions = {
    headerStyle: {
      backgroundColor: 'rgb(25, 50, 75)',
      elevation: 0
    },
    //  headerTintColor: 'rgb(180, 180, 180)',
    headerTintColor: 'white'
  };

  render() {
    return (
      <LinearGradient
        colors={['rgb(25, 50, 75)', 'rgb(25, 50, 75)', 'rgb(133, 69, 255)']}
        style={styles.linearGradient}
      >
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <View style={styles.container}>
            <StatusBar backgroundColor="rgb(25, 50, 75)" />

            <View
              opacity={0.8}
              style={[(style = { alignItems: 'center', margin: 20 })]}
            >
              <Image borderRadius={45} />
            </View>
            <TextInput
              style={styles.inputText}
              placeholder="نام کاربری"
              underlineColorAndroid="transparent"
            />
            <TextInput
              style={styles.inputText}
              placeholder="نام و نام خانوادگی"
              secureTextEntry
              underlineColorAndroid="transparent"
            />
            <TextInput
              style={styles.inputText}
              placeholder="ایمیل"
              secureTextEntry
              underlineColorAndroid="transparent"
            />
            <TextInput
              style={[styles.inputText, { height: 150 }]}
              placeholder="درباره خودتون بگید"
              secureTextEntry
              underlineColorAndroid="transparent"
            />
            <TouchableOpacity activeOpacity={0.8}>
              <Text style={styles.loginButton}>تکمیل اطلاعات</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </LinearGradient>
    );
  }
}

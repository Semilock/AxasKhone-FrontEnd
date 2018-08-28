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

export default class Register extends Component {
  static navigationOptions = {
    // headerStyle: {
    //   backgroundColor: 'rgb(25, 50, 75)',
    //   elevation: 0
    // },
    //  headerTintColor: 'rgb(180, 180, 180)',
    // headerTintColor: 'white'
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false
    }
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
              style={[styles.item, (style = { alignItems: 'center' })]}
            >
              <Image borderRadius={35} />
              <Text style={styles.title}>عکاسخونه</Text>
            </View>

            <View
              opacity={0.6}
              style={[styles.item, { justifyContent: 'center', flex: 5 }]}
            >
              <TextInput
                style={styles.inputText}
                placeholder="آدرس ایمیل"
                underlineColorAndroid="transparent"
              />
              <TextInput
                style={styles.inputText}
                placeholder="رمز عبور"
                secureTextEntry
                underlineColorAndroid="transparent"
              />
              <TextInput
                style={styles.inputText}
                placeholder="تکرار رمز عبور"
                secureTextEntry
                underlineColorAndroid="transparent"
              />
              <TouchableOpacity activeOpacity={0.8}>
                <Text style={styles.loginButton}>ثبت نام</Text>
              </TouchableOpacity>
            </View>

            <View
              opacity={0.6}
              style={[styles.item, { justifyContent: 'flex-end' }]}
            >
              <TouchableOpacity activeOpacity={0.8}>
                <Text style={[styles.loginButton, {}]}>ورود با حساب گوگل</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => this.props.navigation.pop()}>
                <Text style={[styles.forgetPass, { paddingBottom: 15 }]}>
                  ورود به برنامه
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </LinearGradient>
    );
  }
}

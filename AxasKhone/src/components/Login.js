import React, {Component} from 'react';
import LinearGradient from 'react-native-linear-gradient';

import {Text, 
        View, 
        TextInput,
        TouchableOpacity,
        Image,
        StatusBar,
        } from 'react-native';


import styles from '../assets/styles/login.style'

export default class Login extends Component {
  render() {
    return (
      <LinearGradient colors={['rgb(0, 100, 130)', 'rgb(0, 100, 130)', 'rgb(150, 50, 160)']} style={styles.linearGradient}>
      <View style={styles.container}>

        <StatusBar
          backgroundColor='rgb(0, 100, 130)'
        />

        <View style={[styles.item, style={alignItems: 'center'}]}>
          <Image borderRadius={35} source={require('../assets/img/logo.jpg')} />
          <Text style={styles.title}>عکاسخونه</Text>
        </View>

        <View style={[styles.item, {justifyContent: 'center',flex: 5}]}>
          <TextInput 
            style={styles.inputText} 
            placeholder="آدرس ایمیل" 
            underlineColorAndroid="transparent"
          />
          <TextInput 
            style={styles.inputText} 
            placeholder="رمز عبور" 
            secureTextEntry={true}
            underlineColorAndroid="transparent"
          />
          <TouchableOpacity activeOpacity={.8}>
              <Text style={styles.loginButton}>ورود</Text>
          </TouchableOpacity>
          <TouchableOpacity>
              <Text style={styles.forgetPass}>رمز عبور خود را فراموش کرده اید؟</Text>
          </TouchableOpacity>
        </View>

        <View style={[styles.item, {justifyContent: 'flex-end'}]}>
          <TouchableOpacity activeOpacity={.8}>
              <Text style={[styles.loginButton, {}]}>ورود با حساب گوگل</Text>
          </TouchableOpacity>
          <TouchableOpacity>
              <Text style={[styles.forgetPass, {paddingBottom: 15}]}>ثبت نام</Text>
          </TouchableOpacity>
        </View>

      </View>
      </LinearGradient>
    );
  }
}

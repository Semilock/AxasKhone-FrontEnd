import React, {Component} from 'react';
import LinearGradient from 'react-native-linear-gradient';

import {Text, 
        View, 
        TextInput,
        TouchableOpacity,
        Image,
        StatusBar,
        ScrollView
        } from 'react-native';


import styles from '../assets/styles/login.style'

export default class Login extends Component {

  static navigationOptions = {
      header: null,
   }
  render() {
    return (
      <LinearGradient colors={['rgb(25, 50, 75)', 'rgb(25, 50, 75)', 'rgb(133, 69, 255)']} style={styles.linearGradient}>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
      <View style={styles.container}>
      
        <StatusBar
          backgroundColor='rgb(25, 50, 75)'
        />

        <View opacity={0.8} style={[styles.item, style={alignItems: 'center'}]}>
          <Image borderRadius={35} source={require('../assets/img/logo.jpg')} />
          <Text style={styles.title}>عکاسخونه</Text>
        </View>

        <View opacity={0.6} style={[styles.item, {justifyContent: 'center',flex: 5}]}>
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

        <View  opacity={0.6} style={[styles.item, {justifyContent: 'flex-end'}]}>
          <TouchableOpacity activeOpacity={.8}>
              <Text style={[styles.loginButton, {}]}>ورود با حساب گوگل</Text>
          </TouchableOpacity>
          <TouchableOpacity>
              <Text 
              style={[styles.forgetPass, {paddingBottom: 15}]} 
              onPress={() => this.props.navigation.navigate('SignUp')}>
              ثبت نام
              </Text>
          </TouchableOpacity>
        </View>
      
      </View>
      </ScrollView>
      </LinearGradient>
    );
  }
}

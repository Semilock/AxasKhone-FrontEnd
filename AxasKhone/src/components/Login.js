import React, {Component} from 'react';
import {Text, 
        View, 
        TextInput,
        Button,
        TouchableOpacity,
        Image,
        ScrollView,
    } from 'react-native';
import styles from '../assets/styles/login.style'

export default class Login extends Component {
  render() {
    return (
      <ScrollView contentContainerStyle={styles.contentContainer}>
      <View style={styles.container}>
        <View style={styles.logo}> 
         <Image borderRadius={35} source={require('../assets/img/logo.jpg')} />
        </View>
        <Text style={styles.title}>عکاسخونه</Text>
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
        <TouchableOpacity>
            <Text style={styles.loginButton}>ورود</Text>
        </TouchableOpacity>
        <TouchableOpacity>
            <Text style={styles.forgetPass}>رمز عبور خود را فراموش کرده اید؟</Text>
        </TouchableOpacity>
        <TouchableOpacity>
            <Text style={[styles.loginButton, {marginTop: 70}]}>ورود با حساب گوگل</Text>
        </TouchableOpacity>
        <TouchableOpacity>
            <Text style={[styles.forgetPass, {marginBottom: 20}]}>ثبت نام</Text>
        </TouchableOpacity>
      </View>
      </ScrollView>
    );
  }
}

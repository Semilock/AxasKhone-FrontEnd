import React, {Component} from 'react';
import {Text, 
        View, 
        TextInput,
        Button,
        TouchableOpacity,
        Image,
    } from 'react-native';
import styles from '../assets/styles/login.style'

type Props = {};
export default class Login extends Component<Props> {
  render() {
    return (
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
            <Text style={styles.forgetPass}>ثبت نام</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

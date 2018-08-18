import React, {Component} from 'react';
import {Text, View, TextInput, Button} from 'react-native';
import styles from '../assets/styles/login.style'

type Props = {};
export default class Login extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>عکاسخانه</Text>
        <TextInput 
        style={styles.inputText} 
        placeholder="آدرس ایمیل" 
        underlineColorAndroid="transparent"
        />
        <TextInput 
        style={styles.inputText} 
        placeholder="رمز عبور" 
        underlineColorAndroid="transparent"
        />
        <Button
        title="ورود"
        color="red"
        />
      </View>
    );
  }
}

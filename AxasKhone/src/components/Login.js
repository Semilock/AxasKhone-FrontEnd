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
  constructor(props) {
    super(props);
    this.state = {
      // Validation state
      email: "",
      password: "", 
      errors : {}
    };
  }
  
  // set state e.g : [fieldName:value]
  HandleChange = fieldName => value => {
    this.setState({ [fieldName]: value });
  };

  // in button press handler to validation  
  HandlePress = event => {};

  render() {
    return (
      <LinearGradient colors={['rgb(0, 100, 130)', 'rgb(0, 100, 130)', 'rgb(150, 50, 160)']} style={styles.linearGradient}>
      <View style={styles.container}>

        <StatusBar
          backgroundColor='rgb(0, 100, 130)'
        />

        <View opacity={0.8} style={[styles.item, style={alignItems: 'center'}]}>
          <Image borderRadius={35} source={require('../assets/img/logo.jpg')} />
          <Text style={styles.title}>عکاسخونه</Text>
        </View>

        <View opacity={0.8} style={[styles.item, {justifyContent: 'center',flex: 5}]}>
          <TextInput 
            style={[styles.inputText, (this.state.errors.email !== undefined)? styles.borderError :null ]}
            placeholder="آدرس ایمیل" 
            underlineColorAndroid="transparent"
            value={this.state.username}
            onChangeText={this.HandleChange('email')}
          />
          {/* showing errors validation message */}
          {(this.state.errors.email !== undefined) ? <Text style={styles.borderError}> {this.state.errors.email}</Text> : null}

          <TextInput 
            style={[styles.inputText, (this.state.errors.password !== undefined)? styles.borderError :null ]}
            placeholder="رمز عبور" 
            secureTextEntry={true}
            underlineColorAndroid="transparent"
            value={this.state.password}
            onChangeText={this.HandleChange('password')}
          />
          {/* showing errors validation message */}
          {(this.state.errors.password !== undefined) ? <Text style={styles.borderError}> {this.state.errors.password}</Text> : null}

          <TouchableOpacity activeOpacity={.8} onPress={this.HandlePress}>
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
              <Text style={[styles.forgetPass, {paddingBottom: 15}]}>ثبت نام</Text>
          </TouchableOpacity>
        </View>

      </View>
      </LinearGradient>
    );
  }
}

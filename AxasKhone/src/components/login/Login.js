import React, { Component } from "react";
import {
  Text,
  View,
  TextInput,
  Button,
  TouchableOpacity,
  Image,
  ScrollView
} from "react-native";
import styles from "../../assets/styles/login.style";
import t from "tcomb-form-native";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }
  HandleChange = fieldName => value => {
    // console.log({[fieldName]: value});
    this.setState({ [fieldName]: value });
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.logo}>
          <Image borderRadius={35} source={require("../../assets/img/logo.jpg")} />
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
        {/* <Form
            ref={c => (this._form = c)}
            type={User}
            // options={options}
          /> */}
        <TouchableOpacity>
          <Text style={styles.loginButton}>ورود</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.forgetPass}>
            رمز عبور خود را فراموش کرده اید؟
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={[styles.loginButton, { marginTop: 70 }]}>
            ورود با حساب گوگل
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={[styles.forgetPass, { marginBottom: 20 }]}>ثبت نام</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

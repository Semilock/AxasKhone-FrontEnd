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
import { connect } from 'react-redux';
import styles from '../../styles/login.style';
import userRegister from '../../../actions/userRegister';
import validator from '../../../helpers/validator';

class Register extends Component {
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

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      passwordConfirm: '',
      errors: {}
    };
  }

  // set state e.g : [fieldName:value]
  HandleChange = fieldName => value => {
    this.setState({ [fieldName]: value });
  };

  NextStep = () => {
    const { email, password, passwordConfirm } = this.state;
    const emailError = validator('email', email);
    const passwordError = validator('password', password);
    const passObject = {
      password,
      conf_password: passwordConfirm
    };
    const passwordConfirmError = validator('confirm_password', passObject);
    this.setState({
      errors: {
        email: emailError,
        password: passwordError,
        passwordConfirm: passwordConfirmError
      }
    });
    if (!emailError && !passwordError && !passwordConfirmError) {
      //   //TODO: dispatch login request api
      this.props.setEmail(email);
      this.props.setPassword(password);
      this.props.navigation.navigate('RegisterComplement');
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
                style={[
                  styles.inputText,
                  this.state.errors.email !== undefined
                    ? styles.borderError
                    : null
                ]}
                placeholder="آدرس ایمیل"
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
                value={this.state.email}
                onChangeText={this.HandleChange('email')}
                underlineColorAndroid="transparent"
              />
              {/* showing errors validation message */}
              {this.state.errors.email !== undefined ? (
                <Text style={styles.textError}> {this.state.errors.email}</Text>
              ) : null}

              <TextInput
                style={[
                  styles.inputText,
                  this.state.errors.password !== undefined
                    ? styles.borderError
                    : null
                ]}
                placeholder="رمز عبور"
                autoCapitalize="none"
                autoCorrect={false}
                secureTextEntry
                value={this.state.password}
                underlineColorAndroid="transparent"
                onChangeText={this.HandleChange('password')}
              />
              {/* showing errors validation message */}
              {this.state.errors.password !== undefined ? (
                <Text style={styles.textError}>
                  {' '}
                  {this.state.errors.password}
                </Text>
              ) : null}
              <TextInput
                style={[
                  styles.inputText,
                  this.state.errors.passwordConfirm !== undefined
                    ? styles.borderError
                    : null
                ]}
                placeholder="تکرار رمز عبور"
                autoCapitalize="none"
                autoCorrect={false}
                secureTextEntry
                value={this.state.passwordConfirm}
                onChangeText={this.HandleChange('passwordConfirm')}
                underlineColorAndroid="transparent"
              />
              {/* showing errors validation message */}
              {this.state.errors.passwordConfirm !== undefined ? (
                <Text style={styles.textError}>
                  {this.state.errors.passwordConfirm}
                </Text>
              ) : null}

              <TouchableOpacity activeOpacity={0.8} onPress={this.NextStep}>
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

const mapDispatchToProps = dispatch => {
  return {
    setEmail: email => dispatch(userRegister.setEmail(email)),
    setPassword: pass => dispatch(userRegister.setPassword(pass))
  };
};

function mapStateToProps(state) {
  const { RegisterEmail, RegisterPassword } = state.register;
  return {
    RegisterEmail,
    RegisterPassword
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Register);

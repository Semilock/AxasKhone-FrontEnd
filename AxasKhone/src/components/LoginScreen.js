import React, { Component } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  StatusBar,
  ScrollView,
  ActivityIndicator
} from 'react-native';
import { connect } from 'react-redux';
import validator from '../helpers/validator';
import styles from '../assets/styles/login.style';
import userActions from '../actions/userAuth';

class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // Validation state
      email: 's@s.com',
      password: 'amirmasoud',
      errors: {}
    };
  }

  // set state e.g : [fieldName:value]
  HandleChange = fieldName => value => {
    this.setState({ [fieldName]: value });
  };

  // in button press handler to validation
  HandlePress = () => {
    const { email, password } = this.state;
    const emailError = validator('email', email);
    const passwordError = validator('password', password);
    this.setState({
      errors: {
        email: emailError,
        password: passwordError
      }
    });

    if (!emailError && !passwordError) {
      //   //TODO: dispatch login request api
      // this.props.login(email, password);
    }
  };

  render() {
    return (
      <LinearGradient
        colors={['rgb(0, 100, 130)', 'rgb(0, 100, 130)', 'rgb(150, 50, 160)']}
        style={styles.linearGradient}
      >
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <View style={styles.container}>
            {this.props.isFetching === true ? <ActivityIndicator /> : null}

            <StatusBar backgroundColor="rgb(25, 50, 75)" />

            <View
              opacity={0.8}
              style={[styles.item, (style = { alignItems: 'center' })]}
            >
              <Image
                borderRadius={35}
                source={require('../assets/img/logo.jpg')}
              />
              <Text style={styles.title}>عکاسخونه</Text>
            </View>

            <View
              opacity={0.8}
              style={[styles.item, { justifyContent: 'center', flex: 5 }]}
            >
              {/* showing server errors message */}
              {this.props.error !== undefined ? (
                <Text style={styles.textError}> {this.props.error}</Text>
              ) : null}
              <TextInput
                style={[
                  styles.inputText,
                  this.state.errors.email !== undefined
                    ? styles.borderError
                    : null
                ]}
                keyboardType="email-address"
                autoCorrect={false}
                placeholder="آدرس ایمیل"
                underlineColorAndroid="transparent"
                autoCapitalize="none"
                value={this.state.email}
                onChangeText={this.HandleChange('email')}
                onSubmitEditing={() => this.password.focus()}
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
                autoCorrect={false}
                placeholder="رمز عبور"
                secureTextEntry
                underlineColorAndroid="transparent"
                value={this.state.password}
                ref={input => (this.password = input)}
                onChangeText={this.HandleChange('password')}
              />
              {/* showing errors validation message */}
              {this.state.errors.password !== undefined ? (
                <Text style={styles.textError}>
                  {' '}
                  {this.state.errors.password}
                </Text>
              ) : null}
              <TouchableOpacity activeOpacity={0.8} onPress={this.HandlePress}>
                <Text style={styles.loginButton}>ورود</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={styles.forgetPass}>
                  رمز عبور خود را فراموش کرده اید؟
                </Text>
              </TouchableOpacity>
            </View>

            <View
              opacity={0.6}
              style={[styles.item, { justifyContent: 'flex-end' }]}
            >
              <TouchableOpacity activeOpacity={0.8}>
                <Text style={[styles.loginButton, {}]}>ورود با حساب گوگل</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text
                  style={[styles.forgetPass, { paddingBottom: 15 }]}
                  onPress={() => this.props.navigation.navigate('PassChange')}
                >
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

const mapDispatchToProps = dispatch => {
  return {
    login: (username, password) =>
      dispatch(userActions.login(username, password))
  };
};

function mapStateToProps(state) {
  const { isFetching, isAuthenticated, user, error } = state.auth;
  return {
    isFetching,
    isAuthenticated,
    user,
    error
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginScreen);

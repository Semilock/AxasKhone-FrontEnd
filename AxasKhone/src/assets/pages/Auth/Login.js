import React, { Component } from 'react';
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
import LinearGradient from 'react-native-linear-gradient';
import validator from '../../../helpers/validator';
import styles from '../../styles/login.style';
import userActions from '../../../actions/userAuth';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      errors: {}
    };
  }
  // set state e.g : [fieldName:value]
  HandleChange = fieldName => value => {
    this.setState({ [fieldName]: value });
    this.setState(prevState => ({
      errors: {
        ...prevState.errors,
        [fieldName]: validator(fieldName, value)
      }
    }));
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
      this.props.login(email, password);
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
            {/* {this.props.isFetching === true ? <ActivityIndicator /> : null} */}

            <StatusBar backgroundColor="rgb(25, 50, 75)" />

            <View
              opacity={0.8}
              style={[styles.item, (style = { alignItems: 'center' })]}
            >
              <Image borderRadius={35} source={require('../../img/logo.jpg')} />
              <Text style={styles.title}>عکاسخونه</Text>
            </View>

            <View
              opacity={0.8}
              style={[styles.item, { justifyContent: 'center', flex: 5 }]}
            >
              {/* showing server errors message */}
              {this.props.errors !== undefined ? (
                <Text style={styles.textError}>
                  {this.props.errors.wrong !== undefined
                    ? this.props.errors.wrong
                    : ''}
                </Text>
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
                maxLength={50}
              />
              {/* showing errors validation message */}
              {this.state.errors.email !== undefined ? (
                <Text style={styles.textError}> {this.state.errors.email}</Text>
              ) : null}

              {/* showing server errors message */}
              {this.props.errors !== undefined ? (
                <Text style={styles.textError}>
                  {this.props.errors.email !== undefined
                    ? this.props.errors.email
                    : ''}
                </Text>
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
                maxLength={32}
              />
              {/* showing errors validation message */}
              {this.state.errors.password !== undefined ? (
                <Text style={styles.textError}>
                  {' '}
                  {this.state.errors.password}
                </Text>
              ) : null}
              {/* showing server errors message */}
              {this.props.errors !== undefined ? (
                <Text style={styles.textError}>
                  {this.props.errors.password !== undefined
                    ? this.props.errors.password
                    : ''}
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
                  onPress={() => this.props.navigation.navigate('Register')}
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
  const { isFetching, isAuthenticated, errors } = state.auth;
  return {
    isFetching,
    isAuthenticated,
    errors
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);

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
import userRegister from '../../../actions/userRegister';
import validator from '../../../helpers/validator';
import styles from '../../styles/login.style';

class RegisterComplement extends Component {
  static navigationOptions = {
    headerStyle: {
      backgroundColor: 'rgb(25, 50, 75)',
      elevation: 0
    },
    //  headerTintColor: 'rgb(180, 180, 180)',
    headerTintColor: 'white'
  };

  constructor(props) {
    super(props);
    this.state = {
      email: this.props.RegisterEmail,
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

    this.setState({
      errors: {
        email: emailError
      }
    });
    if (!emailError) {
      //   //TODO: dispatch login request api

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
              style={[(style = { alignItems: 'center', margin: 20 })]}
            >
              <Image borderRadius={45} />
            </View>
            <TextInput
              style={styles.inputText}
              placeholder="نام کاربری"
              underlineColorAndroid="transparent"
            />
            <TextInput
              style={styles.inputText}
              placeholder="نام و نام خانوادگی"
              underlineColorAndroid="transparent"
            />
            <TextInput
              style={styles.inputText}
              placeholder="ایمیل"
              editable={false}
              value={this.state.email}
              underlineColorAndroid="transparent"
            />
            <TextInput
              style={[styles.inputText, { height: 150 }]}
              placeholder="درباره خودتون بگید"
              underlineColorAndroid="transparent"
            />
            <TouchableOpacity activeOpacity={0.8}>
              <Text style={styles.loginButton}>تکمیل اطلاعات</Text>
            </TouchableOpacity>
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
  const { RegisterEmail, RegisterPassword } = state.register;
  return {
    RegisterEmail,
    RegisterPassword
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RegisterComplement);

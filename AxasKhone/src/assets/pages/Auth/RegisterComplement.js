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
import ImagePicker from 'react-native-image-crop-picker';
import userRegister from '../../../actions/userRegister';
import styles from '../../styles/login.style';
import validator from '../../../helpers/validator';

class RegisterComplement extends Component {
  // static navigationOptions = {
  //   headerStyle: {
  //     backgroundColor: 'rgb(25, 50, 75)',
  //     elevation: 0
  //   },
  //   //  headerTintColor: 'rgb(180, 180, 180)',
  //   headerTintColor: 'white'
  // };

  constructor(props) {
    super(props);
    this.state = {
      email: this.props.RegisterEmail,
      username: '',
      fullname: '',
      bio: '',
      errors: {},
      profilePicture: require('../../img/gallaryLogo.jpg')
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

  NextStep = () => {
    const usernameError = validator('username', this.state.username);
    this.setState(prevState => ({
      errors: {
        ...prevState.errors,
        username: usernameError
      }
    }));
    const password = this.props.RegisterPassword;
    const user = {
      email: this.state.email,
      password,
      username: this.state.username,
      fullname: this.state.fullname,
      bio: this.state.bio,
      pic: this.state.profilePicture
    };
    if (!usernameError) {
      this.props.register(user);
    }
  };

  pickFromGallary() {
    ImagePicker.openPicker({
      width: 200,
      height: 200,
      cropping: true
    }).then(image => {
      this.setState({
        profilePicture: {
          uri: image.path,
          width: image.width,
          height: image.height,
          mime: image.mime
        }
      });
    });
  }

  render() {
    return (
      <LinearGradient
        colors={['rgb(25, 50, 75)', 'rgb(25, 50, 75)', 'rgb(133, 69, 255)']}
        style={styles.linearGradient}
      >
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <View opacity={0.8} style={styles.container}>
            <StatusBar backgroundColor="rgb(25, 50, 75)" />

            <View
              opacity={0.8}
              style={[
                (style = {
                  alignItems: 'center',
                  margin: 20
                })
              ]}
            >
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => this.pickFromGallary()}
              >
                <Image
                  style={{
                    width: 90,
                    height: 90,
                    borderRadius: 45
                  }}
                  source={this.state.profilePicture}
                />
              </TouchableOpacity>
            </View>
            {this.props.RegisterErrors !== false ? (
              <Text style={styles.textError}>{this.props.RegisterErrors}</Text>
            ) : null}
            <TextInput
              style={[
                styles.inputText,
                this.state.errors.username !== undefined
                  ? styles.borderError
                  : null
              ]}
              placeholder="نام کاربری"
              value={this.state.username}
              underlineColorAndroid="transparent"
              onChangeText={this.HandleChange('username')}
              maxLength={30}
            />
            {/* showing errors validation message */}
            {this.state.errors.username !== undefined ? (
              <Text style={styles.textError}>{this.state.errors.username}</Text>
            ) : null}
            <TextInput
              style={styles.inputText}
              placeholder="نام و نام خانوادگی"
              value={this.state.fullname}
              underlineColorAndroid="transparent"
              onChangeText={this.HandleChange('fullname')}
              maxLength={30}
            />
            <TextInput
              style={styles.inputText}
              placeholder="ایمیل"
              editable={false}
              value={this.state.email}
              underlineColorAndroid="transparent"
              maxLength={50}
            />
            <TextInput
              style={[styles.inputText, { height: 150 }]}
              placeholder="درباره خودتون بگید"
              value={this.state.bio}
              underlineColorAndroid="transparent"
              onChangeText={this.HandleChange('bio')}
              multiline
              numberOfLines={3}
              maxLength={190}
            />
            <TouchableOpacity activeOpacity={0.8} onPress={this.NextStep}>
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
    register: user => dispatch(userRegister.registerUser(user))
  };
};

function mapStateToProps(state) {
  const { RegisterEmail, RegisterPassword, RegisterErrors } = state.register;
  return {
    RegisterEmail,
    RegisterPassword,
    RegisterErrors
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RegisterComplement);

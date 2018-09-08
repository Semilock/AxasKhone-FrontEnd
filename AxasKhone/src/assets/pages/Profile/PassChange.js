import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  StatusBar,
  TouchableOpacity,
  TextInput
} from 'react-native';
import {
  createStackNavigator,
  TabNavigator,
  TabBarBottom,
  navigatinOptions
} from 'react-navigation';
import { connect } from 'react-redux';
import profileActions from '../../../actions/userProfile';

import styles from './Profile.style';

class PassChange extends Component {
  static navigationOptions = {
    tabBarVisible: true,
    headerStyle: {
      backgroundColor: 'rgb(25, 50, 75)',
      elevation: 0
    },
    headerTintColor: 'white',
    headerRight: (
      <Text
        style={[
          (style = {
            alignItems: 'center',
            margin: 10,
            color: 'white',
            fontSize: 18
          })
        ]}
      >
        تغییر رمز عبور
      </Text>
    )
  };

  constructor(props) {
    super(props);
    this.state = {
      oldPassword: '',
      newPassword: ''
    };
  }

  HandleChange = fieldName => value => {
    this.setState({ [fieldName]: value });
  };

  changePassword = () => {
    const user = {
      old_password: this.state.oldPassword,
      new_password: this.state.newPassword
    };
    this.props.changeUserPassword(user);
  };

  componentWillUnmount() {
    this.props.removeEditProfileState();
  }

  render() {
    return (
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={styles.container}>
          <StatusBar backgroundColor="rgb(25, 50, 75)" />

          <View style={[(style = { alignItems: 'center', margin: 30 })]}>
            <Image
              style={{
                width: 90,
                height: 90,
                borderRadius: 45
              }}
              source={{ uri: `http://${this.props.profilePic}` }}
            />
          </View>

          <TextInput
            style={styles.inputText}
            placeholder="رمز قدیمی خود را وارد کنید "
            secureTextEntry
            value={this.state.oldPassword}
            onChangeText={this.HandleChange('oldPassword')}
            underlineColorAndroid="transparent"
          />
          <TextInput
            style={styles.inputText}
            placeholder=" رمز جدید را وارد کنید "
            secureTextEntry
            value={this.state.newPassword}
            onChangeText={this.HandleChange('newPassword')}
            underlineColorAndroid="transparent"
          />

          <View style={[{ justifyContent: 'center' }]}>
            {this.props.profileEditStatus !== undefined ? (
              <Text>{this.props.profileEditStatus}</Text>
            ) : null}

            {this.props.errors !== undefined ? (
              <Text
                style={{
                  marginHorizontal: 20,
                  marginTop: 15,
                  textAlign: 'center',
                  color: 'red',
                  fontSize: 14
                }}
              >
                {this.props.errors}
              </Text>
            ) : null}
          </View>

          <View style={[{ flex: 1, justifyContent: 'flex-end' }]}>
            <TouchableOpacity activeOpacity={0.8} onPress={this.changePassword}>
              <Text style={[styles.buttomSubmit]}> ثبت رمز عبور جدید </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    changeUserPassword: user => dispatch(profileActions.changePassword(user)),
    removeEditProfileState: () =>
      dispatch(profileActions.removeEditProfileState())
  };
};

function mapStateToProps(state) {
  const { isFetching, isAuthenticated } = state.auth;
  const { profilePic, profileEditStatus, errors } = state.profile;
  return {
    isFetching,
    isAuthenticated,
    profilePic,
    profileEditStatus,
    errors
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PassChange);

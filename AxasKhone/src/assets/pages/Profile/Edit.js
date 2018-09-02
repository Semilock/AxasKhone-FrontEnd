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
import styles from './Profile.style';
import profileActions from '../../../actions/userProfile';

class Edit extends Component {
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
        ویرایش پروفایل
      </Text>
    )
  };
  constructor(props) {
    super(props);
    this.state = {
      email:this.props.email,
      username:this.props.username,
      fullname:this.props.fullname,
      biography:this.props.biography,
      profilePic:this.props.profilePic,
    };
  }
  componentDidMount() {
    this.props.getProfile();
  }
  render() {
    return (
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={styles.container}>
          <StatusBar backgroundColor="rgb(25, 50, 75)" />

          <View style={[(style = { alignItems: 'center', margin: 10 })]}>
            <Image
              borderRadius={45}
              style={{ width: 90, height: 90 }}
              source={{ uri: `http://${this.state.profilePic}` }}
            />
          </View>

          <View style={[{ justifyContent: 'center' }]}>
            <TextInput
              style={styles.inputText}
              value={this.state.username}
              underlineColorAndroid="transparent"
            />
            <TextInput
              style={styles.inputText}
              value={this.state.fullname}
              underlineColorAndroid="transparent"
            />
            <TextInput
              style={styles.email}
              value={this.state.email}
              editable={false}
              underlineColorAndroid="transparent"
            />
            <TextInput
              style={[styles.inputText, (style = { height: 150 })]}
              value={this.state.biography}
              underlineColorAndroid="transparent"
            />
            <TouchableOpacity activeOpacity={0.8}>
              <Text style={styles.buttomSubmit}>ذخیره تغییرات</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getProfile: () => dispatch(profileActions.getProfile())
  };
};

function mapStateToProps(state) {
  const { isFetching, isAuthenticated } = state.auth;
  const {
    email,
    username,
    fullname,
    biography,
    profilePic,
  } = state.profile;
  const profileIsFetching = state.profile.isFetching;
  return {
    isFetching,
    isAuthenticated,
    email,
    username,
    fullname,
    biography,
    profilePic
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Edit);

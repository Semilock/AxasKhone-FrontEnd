import React, { Component } from 'react';
import {
  View,
  Image,
  ScrollView,
  Text,
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
import ImagePicker from 'react-native-image-crop-picker';
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
      fullname: this.props.fullname,
      biography: this.props.biography,
      editProfilePic: false,
      profilePic: { uri: `http://${this.props.profilePic}`, mime: 'image/jpeg' }
    };
  }
  componentDidMount() {
    this.props.getProfile();
  }

  componentWillUnmount() {
    this.props.removeEditProfileState();
  }
  // set state e.g : [fieldName:value]
  HandleChange = fieldName => value => {
    this.setState({ [fieldName]: value });
  };

  changeProfile = () => {
    const user = {
      fullname: this.state.fullname,
      bio: this.state.biography
    };
    if (this.state.editProfilePic === true) {
      user.pic = this.state.profilePic;
    }

    this.props.editProfile(user);
    // this.props.getProfile();
  };

  pickFromGallary() {
    ImagePicker.openPicker({
      width: 200,
      height: 200,
      cropping: true
    })
      .then(image => {
        this.setState({
          profilePic: {
            uri: image.path,
            width: image.width,
            height: image.height,
            mime: image.mime
          },
          editProfilePic: true
        });
      })
      .catch(e => {
        console.log(e);
        Alert.alert(e.message ? e.message : e);
      });
  }

  render() {
    return (
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={styles.container}>
          <StatusBar backgroundColor="rgb(25, 50, 75)" />

          <View
            opacity={0.8}
            style={[
              (style = {
                alignItems: 'center',
                margin: 10
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
                source={this.state.profilePic}
              />
            </TouchableOpacity>
          </View>

          <View style={[{ justifyContent: 'center' }]}>
            {this.props.profileEditStatus !== undefined ? (
              <Text>{this.props.profileEditStatus}</Text>
            ) : null}
            <View style={styles.holderTextInput}>
              <Text>{this.props.username}</Text>
            </View>
            <TextInput
              style={styles.inputText}
              value={this.state.fullname}
              onChangeText={this.HandleChange('fullname')}
              underlineColorAndroid="transparent"
            />
            <View style={styles.holderTextInput}>
              <Text>{this.props.email}</Text>
            </View>
            <TextInput
              style={[
                styles.inputText,
                (style = { height: 150, textAlignVertical: 'top' })
              ]}
              value={this.state.biography}
              onChangeText={this.HandleChange('biography')}
              underlineColorAndroid="transparent"
            />
            <TouchableOpacity activeOpacity={0.8} onPress={this.changeProfile}>
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
    getProfile: () => dispatch(profileActions.getProfile()),
    editProfile: user => dispatch(profileActions.editProfile(user)),
    removeEditProfileState: () =>
      dispatch(profileActions.removeEditProfileState())
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
    profileEditStatus
  } = state.profile;
  const profileIsFetching = state.profile.isFetching;
  return {
    isFetching,
    isAuthenticated,
    email,
    username,
    fullname,
    biography,
    profilePic,
    profileEditStatus
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Edit);

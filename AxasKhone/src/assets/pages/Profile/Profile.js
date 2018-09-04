import React, { Component } from 'react';
import { View, Text, Image, StatusBar, TouchableOpacity } from 'react-native';
// import { createStackNavigator, TabNavigator, TabBarBottom, rootNavigation } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';
import { connect } from 'react-redux';
import Spinner from 'react-native-loading-spinner-overlay';
import styles from './Profile.style';
import ProfileTab from './ProfileTab';
import profileActions from '../../../actions/userProfile';

class Profile extends Component {
  static navigationOptions = ({ navigation }) => ({
    header: null
  });
  componentDidMount() {
    this.props.getProfile();
  }
  render() {
    return (
      <View style={styles.container}>
        <Spinner
          visible={this.props.profileIsFetching}
          textContent="در حال بارگذاری پروفایل"
          textStyle={{ color: '#fff' }}
          overlayColor="rgba(0, 0, 0, 0.75)"
        />
        <StatusBar backgroundColor="rgb(25, 50, 75)" />
        <View style={styles.navBarContainer}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Edit')}
          >
            <Icon
              style={{}}
              name="md-more"
              size={30}
              color="rgb(239, 239, 239)"
              // onPress={() => this.props.navigation.navigate('Edit')}
            />
          </TouchableOpacity>
          <Text style={[styles.titleNavbar, { flex: 1, textAlign: 'center' }]}>
            {this.props.username}
          </Text>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Setting')}
          >
            <Icon
              style={{}}
              name="md-cog"
              size={30}
              color="rgb(239, 239, 239)"
            />
          </TouchableOpacity>
        </View>

        <View style={styles.boxUp}>
          <View style={styles.profileImage}>
            <Image
              borderRadius={45}
              style={{ width: 90, height: 90 }}
              source={{
                uri: `http://${this.props.profilePic}`
              }}
            />
          </View>
          <View style={styles.profileInfo}>
            <Text style={styles.title}>{this.props.fullname}</Text>
            <View style={styles.folowSection}>
              <Text fontWeight="bold" style={{ marginLeft: 10 }}>
                {' '}
                دنبال کننده {this.props.followersNumber}
              </Text>
              <Text> دنبال شونده {this.props.followingNumber}</Text>
            </View>
            <Text numberOfLines={3} style={{ flexWrap: 'nowrap' }}>
              {this.props.biography}
            </Text>
          </View>
        </View>

        <View style={styles.BoxDown}>
          <ProfileTab />
        </View>
      </View>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getProfile: () => dispatch(profileActions.getProfile())
  };
};

function mapStateToProps(state) {
  const { isFetching, isAuthenticated, token } = state.auth;
  const {
    username,
    fullname,
    biography,
    profilePic,
    followersNumber,
    followingNumber
  } = state.profile;
  const profileIsFetching = state.profile.isFetching;
  return {
    isFetching,
    isAuthenticated,
    token,
    username,
    fullname,
    biography,
    profilePic,
    followersNumber,
    followingNumber,
    profileIsFetching
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);

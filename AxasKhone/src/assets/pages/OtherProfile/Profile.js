import React, { Component } from 'react';
import { View, Text, Image, StatusBar } from 'react-native';
import { connect } from 'react-redux';
import profileActions from '../../../actions/userProfile';
import styles from '../Profile/Profile.style';

class OtherUserProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profile: undefined
    };
  }

  componentWillMount() {
    const profile = this.props.navigation.getParam('profile');
    this.setState({
      profile: profile
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="rgb(25, 50, 75)" />
        <View style={styles.navBarContainer}>
          <Text style={[styles.titleNavbar, { flex: 1, textAlign: 'center' }]}>
            {this.state.profile.main_username}
          </Text>
        </View>

        <View style={styles.boxUp}>
          <View style={styles.profileImage}>
            <Image
              borderRadius={45}
              style={{ width: 90, height: 90 }}
              source={{
                uri: `http://${this.state.profile.profile_picture}`
              }}
            />
          </View>
          <View style={styles.profileInfo}>
            <Text style={styles.title}>{this.state.profile.fullname}</Text>
            <View style={styles.folowSection}>
              <Text fontWeight="bold" style={{ marginLeft: 10 }}>
                دنبال کننده {this.state.profile.follower_number}
              </Text>
              <Text> دنبال شونده {this.state.profile.following_number}</Text>
            </View>
            <Text numberOfLines={3} style={{ flexWrap: 'nowrap' }}>
              {this.state.profile.bio}
            </Text>
          </View>
        </View>

        <View style={styles.BoxDown}>{/* <ProfileTab /> */}</View>
      </View>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {};
};

function mapStateToProps(state) {
  const { isFetching, isAuthenticated, token } = state.auth;

  const profileIsFetching = state.profile.isFetching;
  return {
    isFetching,
    isAuthenticated,
    token,
    profileIsFetching
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OtherUserProfile);

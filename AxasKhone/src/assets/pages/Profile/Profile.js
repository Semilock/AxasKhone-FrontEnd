import React, { Component } from 'react';
import { View, Text, Image, StatusBar, TouchableOpacity } from 'react-native';
// import { createStackNavigator, TabNavigator, TabBarBottom, rootNavigation } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';
import { connect } from 'react-redux';
import styles from './Profile.style';
import ProfileTab from './ProfileTab';
import profileActions from '../../../actions/userProfile';

class Profile extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerStyle: {
      backgroundColor: 'rgb(25, 50, 75)',
      elevation: 0
    },
    headerTintColor: 'white',
    header: null
    // headerRight: <Text style={styles.titleNavbar}>sam.mirkazemi</Text>,
    // headerLeft: (
    //   <View style={styles.titleNavbar}>
    //     <Icon
    //       style={{ paddingRight: 20, paddingLeft: 15 }}
    //       name="md-more"
    //       size={30}
    //       color="rgb(239, 239, 239)"
    //       onPress={() => navigation.navigate('Edit')}
    //     />
    //     <Icon
    //       style={{ paddingLeft: 0 }}
    //       name="md-cog"
    //       size={30}
    //       color="rgb(239, 239, 239)"
    //       onPress={() => navigation.navigate('Setting')}
    //     />
    //   </View>
    // )
  });
  componentDidMount() {
    this.props.getProfile();
  }
  render() {
    return (
      <View style={styles.container}>
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
            <Image borderRadius={45} source={{ uri: this.props.profilePi }} />
          </View>
          <View style={styles.profileInfo}>
            <Text style={styles.title}>{this.props.fullname}</Text>
            <View style={styles.folowSection}>
              <Text>{this.props.followersNumber} دنبال کننده</Text>
              <Text>{this.props.followingNumber} دنبال شونده</Text>
            </View>
          </View>
          <Text style={{ flexWrap: 'nowrap' }}>{this.props.biography}</Text>
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

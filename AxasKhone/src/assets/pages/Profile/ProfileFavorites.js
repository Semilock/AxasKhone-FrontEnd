import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import profileActions from '../../../actions/userProfile';

class Favorites extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: 'rgb(239, 239, 239)',
          justifyContent: 'center'
        }}
      >
        <Text
          style={{
            textAlign: 'center',
            Color: 'rgb(57, 57, 57)',
            fontSize: 24
          }}
        >
          hi :))
        </Text>
      </View>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getProfilePosts: () => dispatch(profileActions.getProfilePosts())
  };
};

const mapStateToProps = state => {
  const { isFetching, isAuthenticated, token } = state.auth;
  // const { posts, errors } = state.profile;
  // const profilePostisFetching = state.profile.isFetching;
  return {
    isFetching,
    isAuthenticated,
    token
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Favorites);

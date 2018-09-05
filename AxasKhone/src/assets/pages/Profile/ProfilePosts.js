import React, { Component } from 'react';
import { View, FlatList, Image, Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import profileActions from '../../../actions/userProfile';

class Photo extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getProfilePosts();
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1, margin: 3 }}>
          {this.props.posts !== undefined ? (
            <FlatList
              data={this.props.posts.results}
              numColumns={2}
              renderItem={({ item }) => (
                <View
                  style={{
                    flex: 0.5,
                    height: 180,
                    margin: 3
                  }}
                >
                  <TouchableOpacity activeOpacity={0.8}>
                    <Image
                      style={{ width: '100%', height: 180 }}
                      resizeMode="cover"
                      source={{ uri: item.image }}
                    />
                  </TouchableOpacity>
                </View>
              )}
            />
          ) : (
            <Text>not found</Text>
          )}
        </View>
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
  const { posts, errors } = state.profile;
  const ProfileIsFetching = state.profile.isFetching;
  return {
    isFetching,
    isAuthenticated,
    token,
    posts,
    errors,
    ProfileIsFetching
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Photo);

import React, { Component } from 'react';
import { View, FlatList, Image, Text } from 'react-native';
import { connect } from 'react-redux';
import profileActions from '../../../actions/userProfile';

class Photo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [
        {
          imageUrl: './../../img/logo.jpg'
        },
        {
          imageUrl: './../../img/id1.jpg'
        }
      ]
    };
  }

  componentDidMount() {
    this.props.getProfilePosts();
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1, justifyContent: 'space-around' }}>
          {this.props.posts !== undefined ? (
            <FlatList
              data={this.props.posts.results}
              numColumns={2}
              renderItem={({ item }) => (
                <View
                  style={{
                    flex: 0.5,
                    borderWidth: 5,
                    height: 150,
                    borderColor: 'white'
                  }}
                >
                  <Image
                    style={{ width: 90, height: 150 }}
                    // resizeMode="stretch"
                    source={{ uri: item.image }}
                  />
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

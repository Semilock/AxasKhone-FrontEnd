import React, { Component } from 'react';
import { View, FlatList, Image } from 'react-native';
import { connect } from 'react-redux';
import profileActions from '../../../actions/userProfile';

class Photo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      offset: 0,
      limit: 6
    };
  }

  componentDidMount() {
    this.getPosts(this.state.limit, this.state.offset);
  }

  getPosts(limit, offset) {
    this.props.getProfilePosts(limit, offset);
    this.setState(prevState => ({
      offset: prevState.offset + prevState.limit
    }));
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1 }}>
          {this.props.posts !== undefined ? (
            <FlatList
              data={this.props.posts}
              numColumns={2}
              onEndReached={() =>
                this.getPosts(this.state.limit, this.state.offset)
              }
              onEndReachedThreshold={0.5}
              renderItem={({ item }) => (
                <View
                  style={{
                    flex: 0.5,
                    height: 180,
                    margin: 2
                  }}
                >
                  <Image
                    style={{ width: '100%', height: 180 }}
                    resizeMode="cover"
                    source={{ uri: item.image }}
                  />
                </View>
              )}
            />
          ) : null}
        </View>
      </View>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getProfilePosts: (limit, offset) =>
      dispatch(profileActions.getProfilePosts(limit, offset))
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

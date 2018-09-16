import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, FlatList, Image, Text, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';
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
    this.props.refreshProfilePosts();
    this.getPosts(this.state.limit, this.state.offset);
  }

  getPosts(limit, offset) {
    this.props.getOtherUserProfilePosts(this.props.username, limit, offset);
    this.setState(prevState => ({
      offset: prevState.offset + prevState.limit
    }));
  }

  refreshPosts = () => {
    this.props.refreshProfilePosts();
    this.setState(
      {
        offset: 0,
        limit: 6
      },
      () => {
        this.getPosts(this.state.limit, this.state.offset);
      }
    );
  };

  openPost = post => {
    this.props.navigation.navigate('SinglePost', {
      post
    });
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1, margin: 3 }}>
          {this.props.otherProfilePosts !== undefined ? (
            <FlatList
              data={this.props.otherProfilePosts}
              numColumns={2}
              onEndReached={() =>
                this.getPosts(this.state.limit, this.state.offset)
              }
              onEndReachedThreshold={0.5}
              refreshing={this.props.postIsRefreshing}
              onRefresh={this.refreshPosts}
              renderItem={({ item }) => (
                <View
                  style={{
                    flex: 0.5,
                    height: 180,
                    margin: 3
                  }}
                >
                  <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={() => this.openPost(item)}
                  >
                    <Image
                      style={{ width: '100%', height: 180 }}
                      resizeMode="cover"
                      source={{ uri: item.image }}
                    />
                  </TouchableOpacity>
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
    getOtherUserProfilePosts: (username, limit, offset) =>
      dispatch(
        profileActions.getOtherUserProfilePosts(username, limit, offset)
      ),
    refreshProfilePosts: () => dispatch(profileActions.refreshProfilePosts())
  };
};

const mapStateToProps = state => {
  const { isFetching, isAuthenticated, token } = state.auth;
  const { otherProfilePosts, errors } = state.profile;
  const { postIsRefreshing } = state.profile;
  return {
    isFetching,
    isAuthenticated,
    token,
    otherProfilePosts,
    errors,
    postIsRefreshing
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withNavigation(Photo));

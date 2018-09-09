import React, { Component } from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import { connect } from 'react-redux';
import profileActions from '../../../actions/userProfile';
import styles from './Profile.style';
import FavoriteBox from './FavoriteBox';

class Favorites extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        count: 1,
        next: null,
        previous: null,
        results: [
          {
            title: 'عکس های صغرا خانوم',
            pk: 2
          },
          {
            title: 'ماه اصل علی خانی',
            pk: 2
          }
        ]
      }
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.data.results}
          renderItem={this.renderFavoriteBox}
          // renderItem={({ item }) => <Text>sam</Text>}
        />
      </View>
    );
  }
  renderFavoriteBox({ item }) {
    return <FavoriteBox favoriteBox={item} />;
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

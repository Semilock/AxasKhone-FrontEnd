import React, { Component } from 'react';
import { View, FlatList, TouchableOpacity, Text } from 'react-native';
import { connect } from 'react-redux';
import profileActions from '../../../actions/userProfile';
import styles from './Profile.style';
import FavoriteBox from './FavoriteBox';

class Favorites extends Component {
  constructor(props) {
    super(props);
    this.state = {
      offset: 0,
      limit: 6
    };
  }
  componentDidMount() {
    this.getFavoriteList(this.state.limit, this.state.offset);
  }
  getFavoriteList = (limit, offset) => {
    this.props.getProfileFavoriteList(limit, offset);
    this.setState(prevState => ({
      offset: prevState.offset + prevState.limit
    }));
  };
  renderFavoriteBox = ({ item }) => {
    return <FavoriteBox favoriteBox={item} />;
  };
  render() {
    return (
      <View style={styles.container}>
        {this.props.favoriteList !== undefined ? (
          <FlatList
            data={this.props.favoriteList}
            renderItem={this.renderFavoriteBox}
            // renderItem={({ item }) => <Text>sam</Text>}
          />
        ) : null}
      </View>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getProfileFavoriteList: (limit, offset) =>
      dispatch(profileActions.getProfileFavoriteList(limit, offset))
  };
};

const mapStateToProps = state => {
  const { isFetching, isAuthenticated, token } = state.auth;
  const { favoriteList } = state.profile;
  const profilePostisFetching = state.profile.isFetching;
  return {
    isFetching,
    isAuthenticated,
    token,
    favoriteList,
    profilePostisFetching
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Favorites);

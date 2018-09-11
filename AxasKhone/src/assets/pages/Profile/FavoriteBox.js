import React, { Component } from 'react';
import { View, Text, TouchableOpacity, FlatList, Image } from 'react-native';
import { connect } from 'react-redux';
import { withNavigation } from 'react-navigation';
import profileActions from '../../../actions/userProfile';
import styles from './Profile.style';
import FavoriteItem from './FavorateItem';

class FavoriteBox extends Component {
  constructor() {
    super();
    this.state = {
      FavoriteItem: undefined,
      limit: 6,
      offset: 0
    };
  }
  componentDidMount() {
    this.getFavoriteListItem(
      this.props.favoriteBox.pk,
      this.state.limit,
      this.state.offset
    );
  }

  getFavoriteListItem = (id, limit, offset) => {
    this.props.getProfileFavoriteListItem(id, limit, offset).then(res => {
      this.setState({ FavoriteItem: res });
    });
    this.setState(prevState => ({
      offset: prevState.offset + prevState.limit
    }));
  };

  renderFavoriteItem = ({ item }) => {
    return <FavoriteItem favoriteItem={item} />;
  };

  gotoFavoriteFullPage = () => {};

  render() {
    return (
      // const favoriteBox = this.props.favoriteBox;
      <View style={styles.favoriteContainer}>
        <View style={styles.favoriteNavbar}>
          <TouchableOpacity
            activeOpacity={0.6}
            onPress={() => {
              this.props.navigation.navigate('FavorateFullpage', {
                favoriteId: this.props.favoriteBox.pk,
                favoriteTitle: this.props.favoriteBox.title
              });
            }}
          >
            <Text style={{ fontSize: 14 }}>همه</Text>
          </TouchableOpacity>
          <Text style={{ fontSize: 14 }}>{this.props.favoriteBox.title}</Text>
        </View>
        <View style={styles.favoriteMain}>
          {this.state.FavoriteItem !== undefined ? (
            <FlatList
              data={this.state.FavoriteItem}
              renderItem={this.renderFavoriteItem}
              horizontal
            />
          ) : null}
        </View>
      </View>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getProfileFavoriteList: (limit, offset) =>
      dispatch(profileActions.getProfileFavoriteList(limit, offset)),
    getProfileFavoriteListItem: (id, limit, offset) =>
      dispatch(profileActions.getProfileFavoriteListItems(id, limit, offset))
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
)(withNavigation(FavoriteBox));

import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  StatusBar,
  TouchableOpacity,
  FlatList
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { connect } from 'react-redux';
import Reactotron from 'reactotron-react-native';
import profileActions from '../../../actions/userProfile';
import styles from './Profile.style';

class FavorateFullpage extends Component {
  static navigationOptions = ({ navigation }) => ({
    header: null
  });

  constructor(props) {
    super(props);
    this.state = {
      offset: 0,
      limit: 6,
      FavoriteItem: undefined,
      favoriteId: undefined,
      favoriteTitle: undefined
    };
  }

  componentDidMount() {
    this.setState(
      {
        favoriteId: this.props.navigation.getParam('favoriteId'),
        favoriteTitle: this.props.navigation.getParam('favoriteTitle')
      },
      () =>
        this.getFavoriteListItem(
          this.state.favoriteId,
          this.state.limit,
          this.state.offset
        )
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

  getMore = () => {
    this.getFavoriteListItem(
      this.state.favoriteId,
      this.state.limit,
      this.state.offset
    );
  };

  // refreshFavoriteItems = () => {
  //   this.props.refreshFavoriteItems();
  //   this.setState(
  //     {
  //       offset: 0,
  //       limit: 6
  //     },
  //     () => {
  //       this.getPosts(this.state.limit, this.state.offset);
  //     }
  //   );
  // };

  render() {
    // const data = this.state.data;
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="rgb(25, 50, 75)" />
        <View style={styles.navBarContainer}>
          <View style={{ width: 25 }}>
            <TouchableOpacity onPress={() => this.props.navigation.pop()}>
              <Icon
                name="ios-arrow-round-back"
                size={40}
                color="rgb(239, 239, 239)"
              />
            </TouchableOpacity>
          </View>
          <Text style={[styles.titleNavbar, { flex: 1, textAlign: 'center' }]}>
            {this.state.favoriteTitle}
          </Text>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Setting')}
            style={{ marginRight: 15 }}
          >
            <Icon
              style={{}}
              name="ios-trash"
              size={30}
              color="rgb(239, 239, 239)"
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Setting')}
          >
            <Icon
              style={{}}
              name="md-add"
              size={30}
              color="rgb(239, 239, 239)"
            />
          </TouchableOpacity>
        </View>
        <View style={{ flex: 1, margin: 3 }}>
          {this.state.FavoriteItem !== undefined ? (
            <FlatList
              data={this.state.FavoriteItem}
              numColumns={3}
              //TODO: complete onRefreshing
              // onEndReached={this.getMore}
              // onEndReachedThreshold={0.5}
              // refreshing={this.props.profilePostisFetching}
              // onRefresh={this.refreshPosts}
              renderItem={({ item }) => (
                <View
                  style={{
                    flex: 0.333,
                    height: 120,
                    margin: 3,
                    backgroundColor: 'gray'
                  }}
                >
                  <TouchableOpacity activeOpacity={0.8}>
                    <Image
                      style={{ width: '100%', height: 120 }}
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
    getProfileFavoriteListItem: (id, limit, offset) =>
      dispatch(profileActions.getProfileFavoriteListItems(id, limit, offset))
    // ,refreshFavoriteItems: () => dispatch(profileActions.refreshFavoriteItems())
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
)(FavorateFullpage);
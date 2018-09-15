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
import { withNavigation } from 'react-navigation';
import searchActions from '../../../actions/search';

class Tags extends Component {
  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);
    this.state = {
      offset: 0,
      limit: 6,
      TagsItem: undefined,
      TagsId: undefined,
      TagsTitle: undefined
    };
  }

  componentDidMount() {
    this.props.refreshTagPostItems();
    this.setState(
      {
        TagsTitle: this.props.navigation.getParam('tag')
      },
      () =>
        this.getTagsPost(
          this.state.TagsTitle,
          this.state.limit,
          this.state.offset
        )
    );
  }

  getTagsPost = (tag, limit, offset) => {
    this.props.getTagPostItems(tag, limit, offset);
    this.setState(prevState => ({
      offset: prevState.offset + prevState.limit
    }));
  };

  refreshTagPosts = () => {
    this.props.refreshTagPostItems();
    this.setState(
      {
        offset: 0,
        limit: 6
      },
      () => {
        this.getTagsPost(
          this.state.TagsTitle,
          this.state.limit,
          this.state.offset
        );
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
      <View
        style={{
          flex: 1
        }}
      >
        <StatusBar backgroundColor="rgb(25, 50, 75)" />
        <View
          style={{
            flexDirection: 'row',
            backgroundColor: 'rgb(25, 50, 75)',
            height: 60,
            paddingHorizontal: 25,
            alignItems: 'center'
          }}
        >
          <View style={{ width: 25 }}>
            <TouchableOpacity onPress={() => this.props.navigation.pop()}>
              <Icon
                name="ios-arrow-round-back"
                size={40}
                color="rgb(239, 239, 239)"
              />
            </TouchableOpacity>
          </View>
          <Text
            style={[
              {
                fontSize: 16,
                marginHorizontal: 10,
                flexDirection: 'row',
                color: 'white'
              },
              { flex: 1, textAlign: 'center' }
            ]}
          >
            #{this.state.TagsTitle}
          </Text>
        </View>
        <View style={{ flex: 1, margin: 3 }}>
          {this.props.tagPostItems !== undefined ? (
            <FlatList
              data={this.props.tagPostItems}
              numColumns={2}
              //TODO: complete onRefreshing
              onEndReached={() =>
                this.getTagsPost(
                  this.state.TagsTitle,
                  this.state.limit,
                  this.state.offset
                )
              }
              onEndReachedThreshold={0.5}
              refreshing={this.props.SearchIsFetching}
              onRefresh={this.refreshTagPosts}
              renderItem={({ item }) => (
                <View
                  style={{
                    flex: 0.333,
                    height: 120,
                    margin: 3,
                    backgroundColor: 'gray'
                  }}
                >
                  <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={() => this.openPost(item)}
                  >
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
    getTagPostItems: (tag, limit, offset) =>
      dispatch(searchActions.getTagPostItems(tag, limit, offset)),
    refreshTagPostItems: () => dispatch(searchActions.refreshTagPostItems())
  };
};

const mapStateToProps = state => {
  const { isFetching, isAuthenticated, token } = state.auth;
  const { tagPostItems } = state.search;
  const SearchIsFetching = state.search.isFetching;
  return {
    isFetching,
    isAuthenticated,
    token,
    tagPostItems,
    SearchIsFetching
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withNavigation(Tags));

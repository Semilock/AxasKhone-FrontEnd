import React, { Component } from 'react';
import {
  View,
  StatusBar,
  TouchableOpacity,
  FlatList,
  TextInput,
  ScrollView,
  Image,
  ToastAndroid
} from 'react-native';
import {
  Card,
  CardItem,
  Thumbnail,
  Text,
  Button,
  Icon,
  Left,
  Right,
  Body,
  List,
  ListItem,
  Content
} from 'native-base';
// import Reactotoron from 'reactotron-react-native';
import { connect } from 'react-redux';
import Comment from './Comment';
import userProfile from '../../../actions/userProfile';
import CModal from '../../../components/Modal';
import humanReadableTime from '../../../helpers/time';

class SingelPost extends Component {
  // static navigationOptions = {
  //   header: null
  // };

  constructor(props) {
    super(props);
    this.state = {
      commentText: '',
      post: undefined,
      limit: 5,
      offset: 0,
      isModalVisible: false,
      likeNumber: this.props.post.like_number,
      commentNumber: this.props.post.comment_number
    };
  }

  componentWillMount() {
    this.setState({
      post: this.props.post
    });
  }

  componentDidMount() {
    this.props.refreshComments();
    this.getComments();
  }

  _toggleModal = () => {
    this.setState({ isModalVisible: !this.state.isModalVisible });
  };

  getComments = () => {
    this.props.getComments(
      this.state.post.pk,
      this.state.limit,
      this.state.offset
    );
    this.setState(prevState => ({
      offset: prevState.offset + prevState.limit
    }));
  };

  refreshComments = () => {
    this.props.refreshComments();
    this.setState(
      {
        offset: 0,
        limit: 6
      },
      () => {
        this.getComments();
      }
    );
  };

  renderComment = ({ item }) => {
    return <Comment comment={item} />;
  };

  sendComment = () => {
    this.props
      .sendComment(this.state.post.pk, this.state.commentText)
      .then(res => {
        this.props.refreshComments();
        this.props.getComments(this.state.post.pk, this.state.offset + 1, 0);
        this.setState(prevState => ({
          commentNumber: prevState.commentNumber + 1,
          commentText: '',
          offset: prevState.offset + 1
        }));
        ToastAndroid.show(res, ToastAndroid.SHORT);
      });
  };

  like = () => {
    this.props.likePost(this.state.post.pk).then(res => {
      if (res === 'unlike') {
        this.setState(prevState => ({
          likeNumber: prevState.likeNumber - 1
        }));
      } else if (res === 'like') {
        this.setState(prevState => ({
          likeNumber: prevState.likeNumber + 1
        }));
      }
    });
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <CModal
            postId={this.state.post.pk}
            addFavoriteAction={this.props.addFavorite}
            favoriteList={this.props.favoriteList}
            isModalVisible={this.state.isModalVisible}
            BackdropFunc={() => this.setState({ isModalVisible: false })}
          />
          <View style={{ backgroundColor: 'white', flex: 1 }}>
            <Card>
              <CardItem>
                <Left>
                  <Button
                    transparent
                    style={{ paddingLeft: 15 }}
                    onPress={this._toggleModal}
                  >
                    <Icon name="apps" />
                  </Button>
                  <Body>
                    <Text style={{ marginRight: 20, textAlign: 'right' }}>
                      {this.state.post.profile.fullname}
                    </Text>
                    <Text style={{ textAlign: 'right' }} note>
                      {humanReadableTime(this.state.post.time)}
                    </Text>
                  </Body>

                  <Thumbnail
                    source={{
                      uri: `http://${this.state.post.profile.profile_picture}`
                    }}
                  />
                </Left>
              </CardItem>
              <CardItem cardBody>
                <Image
                  source={{ uri: this.state.post.image }}
                  style={{ height: 200, width: null, flex: 1 }}
                />
              </CardItem>
              <CardItem>
                <Text style={{ textAlign: 'right' }}>
                  {this.state.post.caption}
                </Text>
              </CardItem>
              <CardItem>
                <Left>
                  <Button
                    transparent
                    style={{ paddingLeft: 15 }}
                    onPress={this.like}
                  >
                    <Icon active name="thumbs-up" />
                    <Text>{this.state.likeNumber}</Text>
                  </Button>
                  <Button transparent style={{ paddingLeft: 15 }}>
                    <Icon active name="chatbubbles" />
                    <Text>{this.state.commentNumber}</Text>
                  </Button>
                </Left>
                <Right>
                  <Text style={{ textAlign: 'right' }}>
                    {this.state.post.location}
                  </Text>
                </Right>
              </CardItem>
              <CardItem>
                <View style={{ flex: 1 }}>
                  {this.props.postComments !== undefined ? (
                    <FlatList
                      data={this.props.postComments}
                      renderItem={this.renderComment}
                      onEndReached={this.getComments}
                      onEndReachedThreshold={0.5}
                      refreshing={this.props.profileIsFetching}
                      onRefresh={this.refreshComments}
                    />
                  ) : null}
                </View>
              </CardItem>
            </Card>
          </View>
        </ScrollView>
        <View style={{ height: 50 }}>
          <View
            style={{
              height: 50,
              // backgroundColor: 'orange',
              flexDirection: 'row-reverse',
              paddingLeft: 15
            }}
          >
            <View
              style={{
                // backgroundColor: 'yellow',
                justifyContent: 'center',
                marginHorizontal: 5
              }}
            >
              <Image
                borderRadius={20}
                style={{ width: 40, height: 40 }}
                source={{ uri: `http://${this.props.profilePic}` }}
              />
            </View>
            <View
              style={{
                // backgroundColor: 'red',
                flex: 8,
                flexDirection: 'column',
                paddingRight: 5,
                justifyContent: 'center'
              }}
            >
              <TextInput
                style={{
                  borderColor: 'gray',
                  borderWidth: 1,
                  borderRadius: 5,
                  fontSize: 9,
                  height: 40
                }}
                onChangeText={text => this.setState({ commentText: text })}
                value={this.state.commentText}
                maxLength={500}
                multiline
                underlineColorAndroid="transparent"
                placeholder="نظر خود را وارد کنید .."
              />
            </View>
            <View
              style={{
                flex: 2,
                justifyContent: 'center',
                alignContent: 'center'
              }}
            >
              <TouchableOpacity activeOpacity={0.8} onPress={this.sendComment}>
                <View
                  style={{
                    borderRadius: 5,
                    marginHorizontal: 5,
                    padding: 5,
                    borderColor: 'gray',
                    borderWidth: 1,
                    backgroundColor: 'gray'
                  }}
                >
                  <Text
                    style={{
                      fontSize: 10,
                      textAlign: 'center',
                      color: 'white',
                      height: 20,
                      marginTop: 5
                    }}
                  >
                    ارسال
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getComments: (postId, limit, offset) =>
      dispatch(userProfile.getComments(postId, limit, offset)),
    refreshComments: () => dispatch(userProfile.refreshComments()),
    sendComment: (postId, text) =>
      dispatch(userProfile.sendComment(postId, text)),
    addFavorite: (postId, favorite) =>
      dispatch(userProfile.addPostToFavorite(postId, favorite)),
    likePost: postId => dispatch(userProfile.like(postId))
  };
};
const mapStateToProps = state => {
  const { isFetching, isAuthenticated, token } = state.auth;
  const { profilePic, postComments, favoriteList } = state.profile;
  const profileIsFetching = state.profile.isFetching;
  return {
    isFetching,
    isAuthenticated,
    token,
    profilePic,
    profileIsFetching,
    postComments,
    favoriteList
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SingelPost);

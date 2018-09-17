import React, { Component } from 'react';
import { Image, TouchableOpacity, View, ToastAndroid } from 'react-native';
import {
  Card,
  CardItem,
  Thumbnail,
  Text,
  Button,
  Icon,
  Left,
  Right,
  Body
} from 'native-base';
// import Reactotron from 'reactotron-react-native';
import { withNavigation } from 'react-navigation';
import { connect } from 'react-redux';
import humanReadableTime from '../../../helpers/time';
import CModal from '../../../components/Modal';
import profileActions from '../../../actions/userProfile';

class Feed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalVisible: false,
      likeNumber: this.props.feeds.like_number
    };
  }

  _toggleModal = () => {
    this.setState({ isModalVisible: !this.state.isModalVisible });
  };

  openPost = () => {
    this.props.navigation.navigate('SinglePost', {
      post: { ...this.props.feeds, like_number: this.state.likeNumber }
    });
  };

  openUserProfile = () => {
    this.props.navigation.navigate('OtherUserProfile', {
      profile: this.props.feeds.profile
    });
  };

  like = () => {
    this.props.likePost(this.props.feeds.pk).then(res => {
      // ToastAndroid.show(res, ToastAndroid.SHORT);
      // Reactotron.warn(res);
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
    const feed = this.props.feeds;
    return (
      <Card style={{ borderRadius: 8 }}>
        <CModal
          postId={feed.pk}
          addFavoriteAction={this.props.addFavorite}
          favoriteList={this.props.favoriteList}
          isModalVisible={this.state.isModalVisible}
          BackdropFunc={() => this.setState({ isModalVisible: false })}
        />
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
              <TouchableOpacity onPress={this.openUserProfile}>
                <Text style={{ marginRight: 20, textAlign: 'right' }}>
                  {feed.profile.fullname}
                </Text>
              </TouchableOpacity>
              <Text style={{ textAlign: 'right' }} note>
                {humanReadableTime(feed.time)}
              </Text>
            </Body>
            <TouchableOpacity onPress={this.openUserProfile}>
              <Thumbnail
                source={{ uri: `http://${feed.profile.profile_picture}` }}
              />
            </TouchableOpacity>
          </Left>
        </CardItem>
        <TouchableOpacity onPress={this.openPost}>
          <CardItem cardBody>
            <Image
              source={{ uri: feed.image }}
              style={{ height: 200, width: null, flex: 1 }}
            />
          </CardItem>
        </TouchableOpacity>
        <CardItem>
          <Text style={{ textAlign: 'right' }} numberOfLines={3}>
            {feed.caption}
          </Text>
        </CardItem>
        <CardItem>
          <Left>
            <Button transparent style={{ paddingLeft: 15 }} onPress={this.like}>
              <Icon active name="thumbs-up" />
              <Text>{this.state.likeNumber}</Text>
            </Button>
            <Button
              transparent
              style={{ paddingLeft: 15 }}
              onPress={this.openPost}
            >
              <Icon active name="chatbubbles" />
              <Text>{feed.comment_number}</Text>
            </Button>
          </Left>
          <Right>
            <Text style={{ textAlign: 'right' }}>{feed.location}</Text>
          </Right>
        </CardItem>
      </Card>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addFavorite: (postId, favorite) =>
      dispatch(profileActions.addPostToFavorite(postId, favorite)),
    likePost: postId => dispatch(profileActions.like(postId))
  };
};

const mapStateToProps = state => {
  const { favoriteList } = state.profile;
  return {
    favoriteList
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withNavigation(Feed));

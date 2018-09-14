import React, { Component } from 'react';
import { Image, TouchableOpacity, View } from 'react-native';
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
import Reactotron from 'reactotron-react-native';
import { withNavigation } from 'react-navigation';

class Feed extends Component {
  openPost = () => {
    this.props.navigation.navigate('SinglePost', {
      post: this.props.feeds
    });
  };
  openUserProfile = () => {
    this.props.navigation.navigate('OtherUserProfile', {
      profile: this.props.feeds.profile
    });
  };
  render() {
    const feed = this.props.feeds;
    return (
      <Card style={{ borderRadius: 8 }}>
        <CardItem>
          <Left>
            <Button transparent style={{ paddingLeft: 15 }}>
              <Icon name="apps" />
            </Button>
            <Body>
              <TouchableOpacity onPress={this.openUserProfile}>
                <Text style={{ marginRight: 20, textAlign: 'right' }}>
                  {feed.profile.fullname}
                </Text>
              </TouchableOpacity>
              <Text style={{ textAlign: 'right' }} note>
                2 روز پیش
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
            <Button transparent style={{ paddingLeft: 15 }}>
              <Icon active name="thumbs-up" />
              <Text>{feed.like_number}</Text>
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

export default withNavigation(Feed);

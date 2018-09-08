import React, { Component } from 'react';
import { Image } from 'react-native';
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

export default class Feed extends Component {
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
              <Text style={{ marginRight: 20, textAlign: 'right' }}>
                {feed.profile.fullname}
              </Text>
              <Text style={{ textAlign: 'right' }} note>
                2 روز پیش
              </Text>
            </Body>

            <Thumbnail
              source={{ uri: `http://${feed.profile.profile_picture}` }}
            />
            {/* <Thumbnail source={require('../../img/id1.jpg')} /> */}
          </Left>
        </CardItem>
        <CardItem cardBody>
          {/* <Image
                source={{ uri: 'Image URL' }}
                style={{ height: 200, width: null, flex: 1 }}
              /> */}
          <Image
            // source={require('../../img/id1.jpg')}
            source={{ uri: feed.image }}
            style={{ height: 200, width: null, flex: 1 }}
          />
        </CardItem>
        <CardItem>
          <Text style={{ textAlign: 'right' }} numberOfLines={3}>
            {feed.caption}
          </Text>
        </CardItem>
        <CardItem>
          <Left>
            <Button transparent style={{ paddingLeft: 15 }}>
              <Icon active name="thumbs-up" />
              <Text>12</Text>
            </Button>
            <Button transparent style={{ paddingLeft: 15 }}>
              <Icon active name="chatbubbles" />
              <Text>4</Text>
            </Button>
          </Left>
          <Right>
            <Text style={{ textAlign: 'right' }}>سهروردی شمالی</Text>
          </Right>
        </CardItem>
      </Card>
    );
  }
}

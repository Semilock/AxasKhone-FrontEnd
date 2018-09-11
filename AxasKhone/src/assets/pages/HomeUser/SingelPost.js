import React, { Component } from 'react';
import {
  View,
  StatusBar,
  TouchableOpacity,
  FlatList,
  Image
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

export default class SingelPost extends Component {
  //   static navigationOptions = {
  //     header: null
  //   };

  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="rgb(25, 50, 75)" />
        <Content>
          <Card style={{ borderRadius: 8 }}>
            <CardItem>
              <Left>
                <Button transparent style={{ paddingLeft: 15 }}>
                  <Icon name="apps" />
                </Button>
                <Body>
                  <Text style={{ marginRight: 20, textAlign: 'right' }}>
                    {/* {feed.profile.fullname} */}
                    سامیار
                  </Text>
                  <Text style={{ textAlign: 'right' }} note>
                    2 روز پیش
                  </Text>
                </Body>

                <Thumbnail
                // source={{ uri: `http://${feed.profile.profile_picture}` }}
                />
                <Thumbnail source={require('../../img/id1.jpg')} />
              </Left>
            </CardItem>
            <CardItem cardBody>
              {/* <Image
                source={{ uri: 'Image URL' }}
                style={{ height: 200, width: null, flex: 1 }}
              /> */}
              <Image
                source={require('../../img/id1.jpg')}
                //   source={{ uri: feed.image }}
                style={{ height: 200, width: null, flex: 1 }}
              />
            </CardItem>
            <CardItem>
              <Text style={{ textAlign: 'right' }} numberOfLines={3}>
                {/* {feed.caption} */}
                دارم دارم دارم من
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
            <CardItem />
          </Card>
          <List>
            <ListItem avatar>
              <Left>
                <Text note>3:43 pm</Text>
              </Left>
              <Body>
                <Text>Kumar Pratik</Text>
                <Text note>
                  Doing what you like will always keep you happy . .
                </Text>
              </Body>
              <Right>
                <Thumbnail source={require('../../img/id1.jpg')} />
              </Right>
            </ListItem>
            <ListItem avatar>
              <Left>
                <Text note>3:43 pm</Text>
              </Left>
              <Body>
                <Text>Kumar Pratik</Text>
                <Text note>
                  Doing what you like will always keep you happy . .
                </Text>
              </Body>
              <Right>
                <Thumbnail source={require('../../img/id1.jpg')} />
              </Right>
            </ListItem>
          </List>
        </Content>
      </View>
    );
  }
}

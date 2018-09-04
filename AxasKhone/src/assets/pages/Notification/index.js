import React, { Component } from 'react';
import { Image } from 'react-native';
import {
  Container,
  Header,
  Content,
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

export default class Notif extends Component {
  render() {
    return (
      <Container>
        <Content style={{ paddingHorizontal: 15, paddingTop: 20 }}>
          <Card style={{ borderRadius: 8 }}>
            <CardItem>
              <Left>
                <Button transparent style={{ paddingLeft: 15 }}>
                  <Icon name="apps" />
                </Button>
                <Body>
                  <Text style={{ marginRight: 20, textAlign: 'right' }}>
                    سام میرکاظمی
                  </Text>
                  <Text style={{ textAlign: 'right' }} note>
                    2 روز پیش
                  </Text>
                </Body>

                {/* <Thumbnail source={{ uri: 'Image URL' }} /> */}
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
                style={{ height: 200, width: null, flex: 1 }}
              />
            </CardItem>
            <CardItem>
              <Text style={{ textAlign: 'right' }} numberOfLines={3}>
                من در این روزی که بودم این چنین عاشق تو من در این روزی که بودم
                این چنین عاشق تو من در این روزی که بودم این چنین عاشق تو من در
                این روزی که بودم این چنین عاشق تو من در این روزی که بودم این من
                در این روزی که بودم این چنین عاشق تو من در این روزی که بودم این
                چنین عاشق تو من در این روزی که بودم این چنین عاشق تو من در این
                روزی که بودم این چنین عاشق تو چنین عاشق تو
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
        </Content>
      </Container>
    );
  }
}

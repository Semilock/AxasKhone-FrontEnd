import React, { Component } from 'react';
import {
  View,
  StatusBar,
  TouchableOpacity,
  FlatList,
  Keyboard
} from 'react-native';
import {
  Container,
  Content,
  Header,
  Item,
  Input,
  Icon,
  Button,
  Text,
  Tab,
  Tabs
} from 'native-base';

export default class Main extends Component {
  static navigationOptions = {
    header: null
  };

  render() {
    return (
      <Container>
        <Content>
          <Header searchBar rounded>
            <StatusBar backgroundColor="rgb(63, 81, 181)" />
            <Item>
              <Input placeholder="جستجو" onKeyPress />
              <Icon name="ios-search" />
            </Item>
          </Header>
        </Content>
      </Container>
    );
  }
}

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
          <Header
            searchBar
            rounded
            backgroundColor="rgb(25, 50, 75)"
            androidStatusBarColor="rgb(25, 50, 75)"
          >
            <StatusBar backgroundColor="rgb(25, 50, 75)" />
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

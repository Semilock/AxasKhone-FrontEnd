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
import navigationOptions from 'react-navigation';

export default class Search extends Component {
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
              <Icon name="ios-people" />
              <Input placeholder="جستجو" />
              <Icon name="ios-search" />
            </Item>
          </Header>
          <Tabs>
            <Tab heading="هشتگ">{/* <Tab2 /> */}</Tab>
            <Tab heading="کاربران">{/* <Tab1 /> */}</Tab>
          </Tabs>
        </Content>
      </Container>
    );
  }
}

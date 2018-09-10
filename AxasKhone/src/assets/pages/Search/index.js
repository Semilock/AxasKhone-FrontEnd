import React, { Component } from 'react';
import {
  Container,
  Header,
  Item,
  Input,
  Icon,
  Button,
  Text,
  Tab,
  Tabs
} from 'native-base';

export default class Search extends Component {
  render() {
    return (
      <Container>
        <Header searchBar rounded>
          <Item>
            <Icon name="ios-people" />
            <Input placeholder="جستجو" />
            <Icon name="ios-search" />
          </Item>
        </Header>
        <Tabs>
          <Tab heading="کاربران">{/* <Tab1 /> */}</Tab>
          <Tab heading="هشتگ">{/* <Tab2 /> */}</Tab>
        </Tabs>
      </Container>
    );
  }
}

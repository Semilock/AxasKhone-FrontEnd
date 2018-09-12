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
  Tabs,
  List,
  ListItem,
  Left,
  Body,
  Right,
  Thumbnail
} from 'native-base';
import navigationOptions from 'react-navigation';
import HashtagTab from './HashtagTab';
import PersonsTag from './PersonsTag';

export default class Search extends Component {
  static navigationOptions = {
    header: null
  };

  // renderPersons = ({ item }) => {
  //   return <HashtagTab favoriteBox={item} />;

  // renderHashtag = ({ item }) => {
  //   return <PersonsTag favoriteBox={item} />;

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
            <Tab heading="هشتگ">
              <Container>
                {/* <FlatList
                  data={this.props.favoriteList}
                  renderItem={this.renderHashtag}
                /> */}
              </Container>
            </Tab>
            <Tab heading="کاربران">
              <View>
                {/* <FlatList
                  data={this.props.favoriteList}
                  renderItem={this.renderPersons}
                /> */}
              </View>
            </Tab>
          </Tabs>
        </Content>
      </Container>
    );
  }
}

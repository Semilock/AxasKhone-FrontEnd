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
import Photo from './ProfilePosts';

export default class ProfileTab extends Component {
  static navigationOptions = {
    header: null
  };

  render() {
    return (
      <Container>
        <Tabs
          locked
          tabBarUnderlineStyle={{
            backgroundColor: 'gray'
          }}
        >
          <Tab
            heading="عکس ها"
            activeTabStyle={{ backgroundColor: 'white' }}
            tabStyle={{ backgroundColor: 'white' }}
            textStyle={{ color: 'black' }}
            activeTextStyle={{ color: 'black' }}
          >
            <Photo username={this.props.username} />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}

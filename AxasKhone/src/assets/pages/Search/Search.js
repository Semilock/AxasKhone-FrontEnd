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
import { connect } from 'react-redux';
import navigationOptions from 'react-navigation';
import HashtagTab from './HashtagTab';
import PersonsTag from './PersonsTag';
import searchActions from '../../../actions/search';

class Search extends Component {
  static navigationOptions = ({ navigation }) => ({
    header: null
  });

  renderPersons = ({ item }) => {
    return <PersonsTag person={item} />;
  };

  renderHashtag = ({ item }) => {
    return <HashtagTab hashTag={item} />;
  };

  searchTag = tag => {
    this.props.searchByTag(tag);
  };

  render() {
    return (
      <Container>
        <Content>
          <Header
            searchBar
            rounded
            style={{ backgroundColor: 'rgb(25, 50, 75)' }}
          >
            <StatusBar backgroundColor="rgb(25, 50, 75)" />
            <Item>
              <Input
                placeholder="جستجو"
                onChangeText={text => {
                  this.props.search(text);
                }}
              />
              <Icon name="ios-search" />
            </Item>
          </Header>
          <Tabs>
            <Tab
              heading="هشتگ"
              activeTabStyle={{ backgroundColor: 'rgb(25, 50, 75)' }}
              tabStyle={{ backgroundColor: 'rgb(25, 50, 75)' }}
              textStyle={{ color: 'rgb(200, 200, 200)' }}
              activeTextStyle={{ color: 'rgb(200, 200, 200)' }}
            >
              <Container>
                {this.props.tags !== undefined ? (
                  <FlatList
                    data={this.props.tags}
                    renderItem={this.renderHashtag}
                  />
                ) : null}
              </Container>
            </Tab>
            <Tab
              heading="کاربران"
              activeTabStyle={{ backgroundColor: 'rgb(25, 50, 75)' }}
              tabStyle={{ backgroundColor: 'rgb(25, 50, 75)' }}
              textStyle={{ color: 'rgb(200, 200, 200)' }}
              activeTextStyle={{ color: 'rgb(200, 200, 200)' }}
            >
              <View>
                {this.props.users !== undefined ? (
                  <FlatList
                    data={this.props.users}
                    renderItem={this.renderPersons}
                  />
                ) : null}
              </View>
            </Tab>
          </Tabs>
        </Content>
      </Container>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    search: input => dispatch(searchActions.search(input))
  };
};
const mapStateToProps = state => {
  const { tags, users } = state.search;
  return {
    tags,
    users
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);

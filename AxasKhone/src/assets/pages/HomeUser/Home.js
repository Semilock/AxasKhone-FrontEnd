import React, { Component } from 'react';
import {
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  FlatList
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { connect } from 'react-redux';
import styles from './HomeUser.style';
import Feed from './Feed';
import feedActions from '../../../actions/userFeed';

class Home extends Component {
  static navigationOptions = {
    header: null
  };
  constructor(props) {
    super(props);
    this.state = {
      offset: 0,
      limit: 5
    };
  }

  componentDidMount() {
    this.getFeeds(this.state.limit, this.state.offset);
  }

  getFeeds(limit, offset) {
    this.props.getUserFeeds(limit, offset);
    this.setState(prevState => ({
      offset: prevState.offset + prevState.limit
    }));
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="rgb(25, 50, 75)" />
        <View style={styles.navBarContainer}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('FriendInvite')}
          >
            <Icon name="md-person-add" size={28} color="rgb(239, 239, 239)" />
          </TouchableOpacity>
          <Text
            style={[
              {
                flex: 1,
                textAlign: 'center',
                fontSize: 20,
                color: 'rgb(239, 239, 239)'
              }
            ]}
          >
            عکاسخونه
          </Text>
        </View>
        <View style={[styles.container, { margin: 5 }]}>
          {this.props.feeds !== undefined ? (
            <FlatList
              data={this.props.feeds}
              // renderItem={({ item }) => <Text>sam</Text>}
              renderItem={this.renderItem}
            />
          ) : null}
        </View>
      </View>
    );
  }
  renderItem({ item }) {
    return <Feed feeds={item} />;
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getUserFeeds: (limit, offset) =>
      dispatch(feedActions.getfeeds(limit, offset))
  };
};

const mapStateToProps = state => {
  const { isFetching, isAuthenticated, token } = state.auth;
  const { feeds } = state.feed;
  return {
    isFetching,
    isAuthenticated,
    token,
    feeds
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);

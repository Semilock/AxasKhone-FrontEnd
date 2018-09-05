import React, { Component } from 'react';
import {
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  FlatList
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './HomeUser.style';
import Posts from './Posts';

export default class Home extends Component {
  static navigationOptions = {
    header: null
  };
  constructor(props) {
    super(props);
    this.state = {
      // a: [
      //   {
      //     b: { key: 'a' },
      //     c: { key: 'b' }
      //   },
      //   {
      //     b: { key: 'a' },
      //     c: { key: 'b' }
      //   }
      // ]
      data: {
        count: 2,
        next: null,
        previous: null,
        results: [
          {
            url: 'http://127.0.0.1:8000/user/post/13/',
            image:
              'http://127.0.0.1:8000/media/images/user_17/1536097997528.jpg',
            caption: 'my caption',
            profile: {
              fullname: 'a aa',
              bio: 'nemigam',
              main_username: 'ddddd',
              is_following: true,
              is_public: false,
              email: 'ddddd@gmail.com',
              follower_number: 3,
              following_number: 0,
              profile_picture:
                '127.0.0.1:8000/media/profile_photos/user_28/1536092427762.jpg'
            }
          },
          {
            url: 'http://127.0.0.1:8000/user/post/11/',
            image:
              'http://127.0.0.1:8000/media/images/user_18/1536097384568.jpg',
            caption: 'my caption',
            profile: {
              fullname: 'a aa',
              bio: 'nemigam',
              main_username: 'eeeee',
              is_following: true,
              is_public: true,
              email: 'eeeee@gmail.com',
              follower_number: 1,
              following_number: 0,
              profile_picture:
                '127.0.0.1:8000/media/profile_photos/user_29/1536092437897.jpg'
            }
          }
        ]
      }
    };
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
          <FlatList
            data={this.state.data.results}
            // renderItem={({ item }) => <Text>sam</Text>}
            renderItem={this.renderItem}
          />
        </View>
      </View>
    );
  }
  renderItem({ item }) {
    return <Posts />;
  }
}

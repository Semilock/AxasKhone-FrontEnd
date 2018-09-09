import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  StatusBar,
  TouchableOpacity,
  FlatList
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './Profile.style';

export default class FavorateFullpage extends Component {
  static navigationOptions = ({ navigation }) => ({
    header: null
  });

  constructor() {
    super();
    this.state = {
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
            pk: 1
          },
          {
            url: 'http://127.0.0.1:8000/user/post/13/',
            image:
              'http://127.0.0.1:8000/media/images/user_17/1536097997528.jpg',
            caption: 'my caption',
            pk: 1
          },
          {
            url: 'http://127.0.0.1:8000/user/post/13/',
            image:
              'http://127.0.0.1:8000/media/images/user_17/1536097997528.jpg',
            caption: 'my caption',
            pk: 1
          },
          {
            url: 'http://127.0.0.1:8000/user/post/13/',
            image:
              'http://127.0.0.1:8000/media/images/user_17/1536097997528.jpg',
            caption: 'my caption',
            pk: 1
          },
          {
            url: 'http://127.0.0.1:8000/user/post/13/',
            image:
              'http://127.0.0.1:8000/media/images/user_17/1536097997528.jpg',
            caption: 'my caption',
            pk: 1
          }
        ]
      }
    };
  }

  render() {
    return (
      <View>
        <StatusBar backgroundColor="rgb(25, 50, 75)" />
        <View style={styles.navBarContainer}>
          <View style={{ width: 25 }}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Edit')}
            >
              <Icon
                style={{}}
                name="ios-arrow-round-back"
                size={40}
                color="rgb(239, 239, 239)"
              />
            </TouchableOpacity>
          </View>
          <Text style={[styles.titleNavbar, { flex: 1, textAlign: 'center' }]}>
            {/* {this.props.username} */}
            عکس قدیمی صغرا خانوم
          </Text>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Setting')}
            style={{ marginRight: 15 }}
          >
            <Icon
              style={{}}
              name="ios-trash"
              size={30}
              color="rgb(239, 239, 239)"
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Setting')}
          >
            <Icon
              style={{}}
              name="md-add"
              size={30}
              color="rgb(239, 239, 239)"
            />
          </TouchableOpacity>
        </View>
        <View style={styles.container}>
          <View style={{ flex: 1, margin: 3 }}>
            <FlatList
              data={this.props.posts}
              numColumns={2}
              onEndReached={() =>
                this.getPosts(this.state.limit, this.state.offset)
              }
              onEndReachedThreshold={0.5}
              renderItem={({ item }) => (
                <View
                  style={{
                    flex: 0.5,
                    height: 180,
                    margin: 3
                  }}
                >
                  <TouchableOpacity activeOpacity={0.8}>
                    <Image
                      style={{ width: '100%', height: 180 }}
                      resizeMode="cover"
                      source={{ uri: item.image }}
                    />
                  </TouchableOpacity>
                </View>
              )}
            />
          </View>
        </View>
      </View>
    );
  }
}

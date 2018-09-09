import React, { Component } from 'react';
import { View, Text, TouchableOpacity, FlatList, Image } from 'react-native';
import { connect } from 'react-redux';
import profileActions from '../../../actions/userProfile';
import styles from './Profile.style';
import FavoriteItem from './FavorateItem';

export default class FavoriteBox extends Component {
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
            image: 'https://cdn.isna.ir/d/2018/06/02/3/57688748.jpg',
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
    const favoriteBox = this.props.favoriteBox;
    return (
      <View style={styles.favoriteContainer}>
        <View style={styles.favoriteNavbar}>
          <TouchableOpacity activeOpacity={0.6}>
            <Text style={{ fontSize: 14 }}>همه</Text>
          </TouchableOpacity>
          <Text style={{ fontSize: 14 }}>{favoriteBox.title}</Text>
        </View>
        <View style={styles.favoriteMain}>
          <FlatList
            data={this.state.data.results}
            renderItem={this.renderFavoriteItem}
            horizontal
          />
        </View>
      </View>
    );
  }
  renderFavoriteItem({ item }) {
    return <FavoriteItem favoriteItem={item} />;
  }
}

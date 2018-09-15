import React, { Component } from 'react';
import { View, Text, TouchableOpacity, FlatList, Image } from 'react-native';
import { connect } from 'react-redux';
import { withNavigation } from 'react-navigation';
import profileActions from '../../../actions/userProfile';
import styles from './Profile.style';

class FavorateItem extends Component {
  openPost = post => {
    this.props.navigation.navigate('SinglePost', {
      post
    });
  };

  render() {
    const favoriteItem = this.props.favoriteItem;
    return (
      <View style={styles.pictureContainerFavoriteBox}>
        <TouchableOpacity
          activeOpacity={0.6}
          onPress={() => this.openPost(favoriteItem)}
        >
          <Image
            style={{ width: '100%', height: '100%', borderRadius: 10 }}
            resizeMode="cover"
            source={{ uri: favoriteItem.image }}
          />
        </TouchableOpacity>
      </View>
    );
  }
}

export default withNavigation(FavorateItem);

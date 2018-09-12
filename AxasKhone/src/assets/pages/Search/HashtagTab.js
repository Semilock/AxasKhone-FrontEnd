import React, { Component } from 'react';
import { View, Text, TouchableOpacity, FlatList, Image } from 'react-native';
import { connect } from 'react-redux';
import profileActions from '../../../actions/userProfile';

export default class HashtagTab extends Component {
  constructor() {
    super();
    this.state = {
      FavoriteItem: undefined
    };
  }

  render() {
    return (
      // const favoriteBox = this.props.favoriteBox;
      <View style={styles.favoriteContainer} />
    );
  }
}

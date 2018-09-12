import React, { Component } from 'react';
import { View, Text, TouchableOpacity, FlatList, Image } from 'react-native';
import { Icon } from 'native-base';

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
      // <View style={styles.favoriteContainer} />

      <View
        style={{
          height: 50,
          // backgroundColor: 'red',
          flexDirection: 'row-reverse',
          borderBottomColor: 'gray',
          borderBottomWidth: 0.5
        }}
      >
        <View
          style={{
            // backgroundColor: 'yellow',
            justifyContent: 'center',
            marginHorizontal: 5
          }}
        >
          <Icon type="FontAwesome" name="hashtag" style={{ fontSize: 15 }} />
        </View>
        <View
          style={{
            flex: 2,
            flexDirection: 'column',
            paddingRight: 5,
            justifyContent: 'center'
          }}
        >
          <Text style={{ textAlign: 'right', fontSize: 18 }}>
            {this.props.hashTag}
          </Text>
        </View>
        <View
          style={{
            flex: 2,
            justifyContent: 'center',
            alignContent: 'center'
          }}
        />
      </View>
    );
  }
}

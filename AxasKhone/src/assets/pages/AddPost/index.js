import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class AddPost extends Component {

  static navigationOptions = {
    tabBarLabel: ({tintColor}) => <Text style={{color: tintColor, textAlign: 'center', marginBottom: 12}}>add post</Text>
  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: 'white'}}>
        <Text>add post page</Text>
      </View>
    );
  }
}
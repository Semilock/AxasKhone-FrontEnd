import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class FriendInvite extends Component {
  static navigationOptions = {
    tabBarVisible: true,
    headerStyle: {
      backgroundColor: 'rgb(25, 50, 75)',
      elevation: 0
    },
    headerTintColor: 'white',
    headerRight: (
      <Text
        style={[
          (style = {
            alignItems: 'center',
            margin: 10,
            color: 'white',
            fontSize: 18
          })
        ]}
      >
        دعوت از دوستان
      </Text>
    )
  };

  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: 'rgb(239, 239, 239)',
          justifyContent: 'center'
        }}
      >
        <Text
          style={{
            textAlign: 'center',
            Color: 'rgb(57, 57, 57)',
            fontSize: 24
          }}
        >
          under develop :))
        </Text>
      </View>
    );
  }
}

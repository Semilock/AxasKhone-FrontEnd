import React, { Component } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Thumbnail, Text, Left, Right, Body, ListItem } from 'native-base';

export default class Comment extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <ListItem avatar>
        <Left />
        <Body>
          <View style={{ flexDirection: 'column' }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between'
              }}
            >
              <Text note style={{ textAlign: 'right' }}>
                الان
              </Text>
              <Text
                note
                style={{
                  textAlign: 'left',
                  justifyContent: 'center'
                }}
              >
                {this.props.comment.username}
              </Text>
            </View>
            <Text style={{ textAlign: 'right', fontSize: 12 }}>
              {this.props.comment.text}
            </Text>
          </View>
        </Body>
        <Right>
          <Thumbnail
            small
            source={{ uri: `http://${this.props.comment.user_picture}` }}
          />
        </Right>
      </ListItem>
    );
  }
}

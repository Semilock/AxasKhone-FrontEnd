import React, { Component } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Thumbnail, Text, Left, Right, Body, ListItem } from 'native-base';
import { withNavigation } from 'react-navigation';
import humanReadableTime from '../../../helpers/time';

class Comment extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  openUserProfile = () => {
    this.props.navigation.navigate('OtherUserProfile', {
      profile: this.props.comment.profile
    });
  };
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
                {humanReadableTime(this.props.comment.time)}
              </Text>
              <TouchableOpacity onPress={this.openUserProfile}>
                <Text
                  note
                  style={{
                    textAlign: 'left',
                    justifyContent: 'center'
                  }}
                >
                  {this.props.comment.profile.main_username}
                </Text>
              </TouchableOpacity>
            </View>
            <Text style={{ textAlign: 'right', fontSize: 12 }}>
              {this.props.comment.text}
            </Text>
          </View>
        </Body>
        <Right>
          <TouchableOpacity onPress={this.openUserProfile}>
            <Thumbnail
              small
              source={{
                uri: `http://${this.props.comment.profile.profile_picture}`
              }}
            />
          </TouchableOpacity>
        </Right>
      </ListItem>
    );
  }
}

export default withNavigation(Comment);

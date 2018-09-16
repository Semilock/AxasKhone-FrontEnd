import React, { Component } from 'react';
import { Text, View, TouchableOpacity, FlatList, Image } from 'react-native';
import { withNavigation } from 'react-navigation';
import compareNotification from '../../../helpers/compareNotification';

class NotificationItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notification: compareNotification(this.props.notif),
      user: undefined,
      post: undefined
    };
  }

  render() {
    return (
      <View
        style={{
          height: 50,
          flexDirection: 'row-reverse',
          borderBottomColor: 'gray',
          borderBottomWidth: 0.5
        }}
      >
        <View
          style={{
            justifyContent: 'center',
            marginHorizontal: 5
          }}
        >
          <Image
            borderRadius={20}
            style={{ width: 40, height: 40 }}
            source={{
              uri: `${this.state.notification.avatar}`
            }}
          />
        </View>
        <View
          style={{
            flex: 2,
            flexDirection: 'column',
            paddingRight: 5,
            justifyContent: 'center'
          }}
        >
          <Text style={{ textAlign: 'right', direction: 'rtl', fontSize: 15 }}>
            {this.state.notification.type === 'comment'
              ? `${
                  this.state.notification.senderName
                } برای پست شما نظر ثبت کرد.`
              : null}
            {this.state.notification.type === 'like'
              ? `${this.state.notification.senderName} پست شما را پسندید.`
              : null}
            {this.state.notification.type === 'follow'
              ? `${this.state.notification.sender.fullname} پست ${
                  this.state.notification.person
                } را پسندید.`
              : null}
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

export default withNavigation(NotificationItem);

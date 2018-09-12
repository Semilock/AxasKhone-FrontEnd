import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

export default class Notif extends Component {
  constructor() {
    super();
    this.state = {
      fullname: 'null',
      userId: 'null',
      mode: 'follow',
      profilePic:
        'http://images.hamshahrionline.ir/images/2018/9/position24/18-9-10-151411.jpg'
    };
  }

  render() {
    return (
      <View>
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
            <Image
              borderRadius={20}
              style={{ width: 40, height: 40 }}
              // source={{ uri: `http://${this.props.profilePic}` }}
              source={{ uri: `${this.state.profilePic}` }}
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
            <Text style={{ textAlign: 'right', fontSize: 15 }}>
              {this.state.userId}
            </Text>
            <Text style={{ textAlign: 'right', fontSize: 9, color: 'gray' }}>
              {this.state.fullname}
            </Text>
          </View>
          <View
            style={{
              flex: 2,
              justifyContent: 'center',
              alignContent: 'center'
            }}
          >
            <TouchableOpacity activeOpacity={0.8}>
              <View
                style={{
                  borderRadius: 5,
                  textAlign: 'center',
                  marginHorizontal: 15,
                  padding: 5,
                  backgroundColor: [
                    this.state.mode === 'follow' ? 'green' : null,
                    this.state.mode === 'unfollow' ? 'gray' : null,
                    this.state.mode === 'invite' ? 'blue' : null,
                    this.state.mode === 'invited' ? 'gray' : null
                  ].filter(item => {
                    if (item !== null) {
                      return item;
                    }
                  })[0]
                }}
              >
                <Text
                  style={{
                    alignContent: 'center',
                    textAlign: 'center',

                    color: 'white'
                  }}
                >
                  {
                    [
                      this.state.mode === 'follow' ? 'دنبال کردن' : null,
                      this.state.mode === 'unfollow' ? 'دنبال شده است' : null,
                      this.state.mode === 'invite' ? 'دعوت کردن' : null,
                      this.state.mode === 'invited' ? 'دعوت شده است' : null
                    ].filter(item => {
                      if (item !== null) {
                        return item;
                      }
                    })[0]
                  }
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

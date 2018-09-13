import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';

export default class PersonsTag extends Component {
  constructor() {
    super();
    this.state = {
      profilePic: undefined,
      username: undefined,
      fullname: undefined,
      mode: undefined
    };
  }

  componentWillReceiveProps() {
    const { person } = this.props;
    this.setState({
      profilePic: person.profile_picture,
      username: person.main_username,
      fullname: person.fullname,
      mode: person.is_following
    });
  }

  render() {
    return (
      <View>
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
              source={{ uri: `http://${this.state.profilePic}` }}
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
              {this.state.username}
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
                    this.state.mode === false ? 'green' : null,
                    this.state.mode === true ? 'gray' : null
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
                      this.state.mode === false ? 'دنبال کردن' : null,
                      this.state.mode === true ? 'دنبال شده است' : null
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

import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  TextInput,
  Image
} from 'react-native';
import { Icon } from 'native-base';
import { connect } from 'react-redux';
import notificationActions from '../../../actions/userNotifications';

class Notif extends Component {
  constructor() {
    super();
    this.state = {
      fullname: 'null',
      userId: 'null',
      mode: 'accept',
      profilePic:
        'http://images.hamshahrionline.ir/images/2018/9/position24/18-9-10-151411.jpg'
    };
  }

  componentDidMount() {
    this.props.getNotifications(5, 0);
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
                    this.state.mode === 'accept' ? 'rgb(50,50,50)' : null,
                    this.state.mode === 'request' ? 'rgb(200,150,0)' : null
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
                      this.state.mode === 'accept' ? 'پذیرش' : null,
                      this.state.mode === 'request' ? 'درخواست داده شد' : null
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

const mapDispatchToProps = dispatch => {
  return {
    getNotifications: (limit, offset) =>
      dispatch(notificationActions.getNotifications(limit, offset))
  };
};

const mapStateToProps = state => {
  const { isFetching, isAuthenticated } = state.auth;
  const notificationIsFetching = state.notification.isFetching;
  const { notifications, error } = state.notification;
  // const contacts = state.contact.contacts;
  return {
    isFetching,
    isAuthenticated,
    notifications,
    error,
    notificationIsFetching
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Notif);

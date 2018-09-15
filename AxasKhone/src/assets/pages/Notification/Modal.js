import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  TextInput
} from 'react-native';
import Modal from 'react-native-modal';
import { Icon } from 'native-base';

export default class Modal extends Component {
  state = {
    isModalVisible: false
  };

  _toggleModal = () =>
    this.setState({ isModalVisible: !this.state.isModalVisible });

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: 'yellow' }}>
        <TouchableOpacity onPress={this._toggleModal}>
          <Text>Show Modal</Text>
        </TouchableOpacity>
        <Modal
          isVisible={this.state.isModalVisible}
          style={{ alignSelf: 'center' }}
          onBackdropPress={() => this.setState({ isModalVisible: false })}
        >
          <View
            style={{
              width: 250,
              height: 350,
              backgroundColor: 'rgba(255,255,255,0.9)',
              borderRadius: 5
            }}
          >
            <View
              style={{
                height: 60,
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <Text style={{ fontSize: 16, fontWeight: 'bold' }}>
                اضافه به علاقه مندی ها
              </Text>
              <Text style={{ fontSize: 11 }}>
                یکی از برد های زیر را انتخاب کنید
              </Text>
            </View>
            <TouchableOpacity activeOpacity={0.8}>
              <View
                style={{
                  backgroundColor: 'rgba(200,200,200,1)',
                  height: 40,
                  justifyContent: 'center',
                  alignItems: 'center',
                  justifyContent: 'space-around',
                  flexDirection: 'row'
                }}
              >
                <TextInput
                  style={{
                    height: 25,
                    borderColor: 'gray',
                    borderWidth: 0.5,
                    width: 200,
                    textAlign: 'right'
                  }}
                  onChangeText={text => this.setState({ text })}
                  value={this.state.text}
                  placeholder=" ساخت برد جدید"
                  underlineColorAndroid="transparent"
                  maxLength={20}
                  fontSize={7}
                />
                <TouchableOpacity>
                  <Icon
                    style={{ fontSize: 22, paddingRight: 10 }}
                    name="add-circle"
                  />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
            <FlatList
              data={this.props.favoriteList}
              renderItem={this.renderFavoriteBox}
              // renderItem={({ item }) => <Text>sam</Text>}
            />
          </View>
        </Modal>
      </View>
    );
  }
}

class Quote extends Component {
  render() {
    return (
      <TouchableOpacity activeOpacity={0.5}>
        <View
          style={{
            borderBottomColor: 'rgba(200,200,200,1)',
            borderBottomWidth: 0.5,
            height: 40,
            justifyContent: 'center',
            paddingHorizontal: 10
          }}
        >
          <Text style={{ fontSize: 14, fontWeight: 'bold' }}>
            عکس های قدیمی دوستان
          </Text>
        </View>
      </TouchableOpacity>
    );
  }
}

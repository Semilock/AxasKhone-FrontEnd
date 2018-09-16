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

export default class CModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favoriteList: undefined,
      createBoard: false,
      text: '',
      favorite: undefined
    };
  }
  componentWillReceiveProps() {
    this.setState({
      favoriteList: this.props.favoriteList
    });
  }
  addFavorite = (
    favorite = this.state.favorite,
    postId = this.props.postId
  ) => {
    this.props.addFavoriteAction(postId, favorite);
    this.setState({ createBoard: false, favorite: '' });
    this.props.BackdropFunc();
  };
  createNewFavorite = () => {
    this.setState(
      { favorite: this.state.text, text: '', createBoard: false },
      () => {
        this.addFavorite(this.state.favorite, this.props.postId);
      }
    );
  };
  render() {
    return (
      <Modal
        isVisible={this.props.isModalVisible}
        style={{ alignSelf: 'center' }}
        onBackdropPress={() => this.props.BackdropFunc()}
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
            {this.state.createBoard === false ? (
              <TouchableOpacity
                onPress={() => this.setState({ createBoard: true })}
                activeOpacity={0.8}
              >
                <Text style={{ fontSize: 16 }}>+ ساخت برد جدید</Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => this.setState({ createBoard: false })}
              >
                <View
                  style={{
                    flex: 1,
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                    height: 40,
                    alignItems: 'center'
                  }}
                >
                  <TextInput
                    style={{
                      width: 200,
                      textAlign: 'right',
                      fontSize: 15
                    }}
                    onChangeText={text => this.setState({ text })}
                    value={this.state.text}
                    placeholder=" ساخت برد جدید"
                    underlineColorAndroid="transparent"
                    maxLength={20}
                  />
                  <TouchableOpacity onPress={this.createNewFavorite}>
                    <Icon
                      style={{ fontSize: 22, paddingRight: 5 }}
                      name="add-circle"
                    />
                  </TouchableOpacity>
                </View>
              </TouchableOpacity>
            )}
          </View>
          <View
            style={{
              flex: 1
            }}
          >
            {this.state.favoriteList !== undefined ? (
              <FlatList
                data={this.state.favoriteList}
                // renderItem={this.renderFavoriteBox}
                renderItem={({ item }) => (
                  <TouchableOpacity
                    onPress={() => {
                      this.setState({ favorite: item.title }, () =>
                        this.addFavorite()
                      );
                    }}
                  >
                    <Text style={{ margin: 10 }}>{item.title}</Text>
                  </TouchableOpacity>
                )}
              />
            ) : null}
          </View>
        </View>
      </Modal>
    );
  }
}

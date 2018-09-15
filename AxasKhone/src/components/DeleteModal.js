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

export default class DeleteModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      action: ''
    };
  }

  removeFavorite = () => {
    if (this.state.action === 'yes') {
      this.props.DeleteFavoriteAction(this.props.favoriteId).then(res => {
        this.props.isDeleteFavorite();
        this.setState({ action: '' });
        this.props.BackdropFunc();
      });
    }
  };

  render() {
    return (
      <View>
        <Modal
          isVisible={this.props.isModalVisible}
          style={{ alignSelf: 'center' }}
          onBackdropPress={() => this.props.BackdropFunc()}
        >
          <View
            style={{
              width: 250,
              //   height: 350,
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
                از حذف این بورد مطمئن هستید؟
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
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => this.setState({ action: 'no' })}
              >
                <Text>خیر</Text>
              </TouchableOpacity>

              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => {
                  this.setState({ action: 'yes' }, () => this.removeFavorite());
                }}
              >
                <Text>حذف</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}

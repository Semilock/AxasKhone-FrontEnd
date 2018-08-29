import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Alert,
  Image,
  TouchableOpacity,
  NativeModules,
  Dimensions
} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';

// var ImagePicker = NativeModules.ImageCropPicker;

export default class AddPost extends Component {
  constructor() {
    super();
    this.state = {
      image: null
    };
  }

  pickWithCamera() {
    ImagePicker.openCamera({
      cropping: true,
      width: 200,
      height: 200,
      includeExif: true
    })
      .then(image => {
        this.setState({
          image: { uri: image.path, width: image.width, height: image.height }
        });
      })
      .catch(e => alert(e));
  }

  pickFromGallary() {
    ImagePicker.openPicker({
      width: 200,
      height: 200,
      cropping: true
    })
      .then(image => {
        this.setState({
          image: {
            uri: image.path,
            width: image.width,
            height: image.height,
            mime: image.mime
          }
        });
      })
      .catch(e => {
        console.log(e);
        Alert.alert(e.message ? e.message : e);
      });
  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: 'white' }}>
        <TouchableOpacity onPress={() => this.pickWithCamera()}>
          <Text
            style={{
              backgroundColor: 'yellow',
              padding: 10,
              fontSize: 18,
              textAlign: 'center'
            }}
          >
            انتخاب عکس با دوربین
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.pickFromGallary()}>
          <Text
            style={{
              backgroundColor: 'green',
              padding: 10,
              fontSize: 18,
              textAlign: 'center'
            }}
          >
            انتخاب عکس در گالری
          </Text>
        </TouchableOpacity>
        <View
          style={{
            alignItems: 'center'
          }}
        >
          <Image resizeMode="stretch" source={this.state.image} />
        </View>
      </View>
    );
  }
}

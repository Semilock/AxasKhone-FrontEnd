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

  pickSingleWithCamera() {
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

  pickSingle(circular = false) {
    ImagePicker.openPicker({
      width: 300,
      height: 300,
      cropping: true,
      cropperCircleOverlay: circular,
      compressImageMaxWidth: 640,
      compressImageMaxHeight: 480,
      compressImageQuality: 0.5,
      compressVideoPreset: 'MediumQuality',
      includeExif: true
    })
      .then(image => {
        console.log('received image', image);
        this.setState({
          image: {
            uri: image.path,
            width: image.width,
            height: image.height,
            mime: image.mime
          },
          images: null
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
        <TouchableOpacity onPress={() => this.pickSingleWithCamera()}>
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
        <TouchableOpacity onPress={() => this.pickSingle()}>
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

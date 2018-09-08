import React from 'react';

import { View, TouchableOpacity, Text, Image } from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';

export default class Camera extends React.Component {
  pickSingleWithCamera() {
    ImagePicker.openCamera({
      cropping: true,
      width: 200,
      height: 200,
      includeExif: true
    })
      .then(image => {
        this.setState({
          selected: {
            uri: image.path,
            width: image.width,
            height: image.height
          }
        });
      })
      .catch(e => alert(e));
  }

  constructor() {
    super();
    this.state = {
      selected: null
    };
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
        <View
          style={{
            alignItems: 'center'
          }}
        >
          <Image resizeMode="stretch" source={this.state.selected} />
        </View>
      </View>
    );
  }
}

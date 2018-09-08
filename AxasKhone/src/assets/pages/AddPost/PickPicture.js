import React from 'react';

import {
  Text,
  View,
  Dimensions,
  Image,
  Animated,
  TouchableOpacity
} from 'react-native';
import { CameraKitCamera } from 'react-native-camera-kit';
import SlidingUpPanel from 'rn-sliding-up-panel';
import CameraRollPicker from 'react-native-camera-roll-picker';
import ImagePicker from 'react-native-image-crop-picker';
import Reactotron from 'reactotron-react-native';

const { height } = Dimensions.get('window');

export default class PickPicture extends React.Component {
  static navigationOptions = {
    header: null
  };

  static defaultProps = {
    draggableRange: {
      top: height / 1.27,
      bottom: 160
    }
  };

  constructor() {
    super();

    this.state = {
      selected: null
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
          selected: {
            uri: image.path,
            width: image.width,
            height: image.height
          }
        });
      })
      .catch(e => alert(e));
  }

  _draggedValue = new Animated.Value(-120);

  getSelectedImages(images) {
    this.setState({
      selected: images
    });
  }

  render() {
    return (
      <View style={styles.containerUp}>
        <TouchableOpacity
          style={{ flex: 1 }}
          onPress={() => this.pickSingleWithCamera()}
        >
          <CameraKitCamera
            ref={cam => (this.camera = cam)}
            style={{
              flex: 1,
              backgroundColor: 'white'
            }}
          />
        </TouchableOpacity>
        <SlidingUpPanel
          visible
          startCollapsed
          showBackdrop={false}
          ref={c => (this._panel = c)}
          draggableRange={this.props.draggableRange}
          onDrag={v => this._draggedValue.setValue(v)}
        >
          <View style={styles.panel}>
            <View style={styles.panelHeader}>
              <View style={styles.oval} />
            </View>
            <View style={styles.containerDown}>
              <CameraRollPicker
                scrollRenderAheadDistance={12}
                // selected={this.state.selected}
                backgroundColor="rgb(239, 239, 239)"
                imagesPerRow={3}
                imageMargin={5}
                selectSingleItem="true"
                callback={this.getSelectedImages.bind(this)}
              />
            </View>
          </View>
        </SlidingUpPanel>
        {this.state.selected !== null ? (
          <TouchableOpacity activeOpacity={0.8}>
            <Text style={styles.buttomSubmit}> مرحله بعد </Text>
          </TouchableOpacity>
        ) : null}
      </View>
    );
  }
}

const styles = {
  containerUp: {
    flex: 1
  },
  containerDown: {
    flex: 1
  },
  panel: {
    flex: 1,
    backgroundColor: 'black',
    position: 'relative'
  },
  panelHeader: {
    paddingTop: 5,
    height: 20,
    backgroundColor: 'rgb(239, 239, 239)',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 0,
    borderColor: 'black'
  },
  oval: {
    width: 100,
    height: 8,
    borderRadius: 50,
    backgroundColor: 'rgb(190, 190, 190)'
  },
  submitBox: {
    // position: 'absolute',
    // justifyContent: 'center',
    // alignItems: 'center',
    // width: 260,
    // marginTop: height - 150
  },
  buttomSubmit: {
    backgroundColor: 'rgb(210, 230, 200)',
    color: 'green',
    fontSize: 18,
    borderRadius: 10,
    marginTop: 15,
    marginBottom: 15,
    textAlign: 'center',
    marginHorizontal: 15,
    padding: 5,
    borderColor: 'green',
    borderWidth: 2
  }
};
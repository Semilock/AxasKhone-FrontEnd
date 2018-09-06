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

const { height } = Dimensions.get('window');

export default class AddPost extends React.Component {
  static defaultProps = {
    draggableRange: {
      top: height / 1.27,
      bottom: 160
    }
  };

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
  }
};

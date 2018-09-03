import React from 'react';

import {
  AppRegistry,
  Text,
  View,
  Dimensions,
  Image,
  Animated
} from 'react-native';

import SlidingUpPanel from 'rn-sliding-up-panel';
import CameraRollPicker from 'react-native-camera-roll-picker';

const { height } = Dimensions.get('window');

export default class HomeUser extends React.Component {
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

  _draggedValue = new Animated.Value(-120);

  getSelectedImages(images) {
    this.setState({
      selected: images
    });
  }

  render() {
    return (
      <View style={styles.containerUp}>
        <Text>Hello world</Text>
        <Image
          style={{
            width: 90,
            height: 90,
            borderRadius: 45
          }}
          source={this.state.selected}
        />
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
    flex: 1,
    backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'center'
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

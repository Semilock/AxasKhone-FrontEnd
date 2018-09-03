import React from 'react';

import { Text, View, Dimensions, Image, Animated } from 'react-native';

import SlidingUpPanel from 'rn-sliding-up-panel';

export default class HomeUser extends React.Component {
  static defaultProps = {
    draggableRange: {
      top: height / 1.25,
      bottom: 160
    }
  };

  _draggedValue = new Animated.Value(-120);

  render() {
    return (
      <View style={styles.container}>
        <Text>Hello world</Text>
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
              <Text style={{ color: '#FFF' }}>Bottom Sheet Peek</Text>
            </View>
            <View>
              <Text style={{ color: '#FFF' }}>
                Bottom Sheet Cbbbbbbbbbbbbbbbbbbbbbbontent
              </Text>
            </View>
          </View>
        </SlidingUpPanel>
      </View>
    );
  }
}

const { height } = Dimensions.get('window');

const styles = {
  container: {
    flex: 1,
    backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'center'
  },
  panel: {
    flex: 1,
    backgroundColor: 'black',
    position: 'relative'
  },
  panelHeader: {
    height: 30,
    backgroundColor: '#b197fc',
    alignItems: 'center',
    justifyContent: 'center'
  }
};

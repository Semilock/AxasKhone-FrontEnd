import React, {Component} from 'react';
import { View } from 'react-native';
import AnimatedLinearGradient, {presetColors} from 'react-native-animated-linear-gradient'

export default class Bazi extends Component {
  render() {
    return (
      <View style={style={flex: 1}}>
      <AnimatedLinearGradient customColors={[
      'rgb(106, 57, 171)',
      'rgb(151, 52, 160)',
      'rgb(197, 57, 92)',
      'rgb(231, 166, 73)',
      'rgb(181, 70, 92)',
      ]} speed={8000}></AnimatedLinearGradient>
      {this.props.children}
      </View>
    );
  }
}

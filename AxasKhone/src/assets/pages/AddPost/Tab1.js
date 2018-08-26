import React, {Component} from 'react';
import { View, Text, Image, ScrollView, StatusBar, TouchableOpacity, TextInput } from 'react-native';
import { createStackNavigator, TabNavigator, TabBarBottom, navigatinOptions } from 'react-navigation';



export default class Tab1 extends Component {

  render() {
    return (
      <Text 
              style={[{paddingBottom: 15}]} 
              onPress={() => this.props.navigation.navigate('Tab2')}>
              navigate to tab2
              </Text>
    );
  }
}

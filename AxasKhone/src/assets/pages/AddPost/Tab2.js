import React, {Component} from 'react';
import { View, Text, Image, ScrollView, StatusBar, TouchableOpacity, TextInput } from 'react-native';
import { createStackNavigator, TabNavigator, TabBarBottom, navigatinOptions } from 'react-navigation';



export default class Tab2 extends Component {

  render() {
    return (
      <View>
      <Text 
              style={[{paddingBottom: 15}]} 
              onPress={() => this.props.navigation.navigate('Tab1')}>
              navigate to tab1
      </Text>
      <Text 
      style={[{paddingBottom: 15}]} 
      onPress={() => this.props.navigation.navigate('ProfileStack', { name: 'Setting' })}>
      navigate to tab1
      </Text>
      </View>
    );
  }
}

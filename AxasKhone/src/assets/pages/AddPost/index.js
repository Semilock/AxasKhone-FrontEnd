// import React, { Component } from 'react';
// import { View, Text } from 'react-native';

// export default class AddPost extends Component {

//   static navigationOptions = {
//     tabBarLabel: ({tintColor}) => <Text style={{color: tintColor, textAlign: 'center', marginBottom: 12}}>add post</Text>
//   }

//   render() {
//     return (
//       <View style={{ flex: 1, backgroundColor: 'white'}}>
//         <Text>add post page</Text>
//       </View>
//     );
//   }
// }


import { createStackNavigator } from 'react-navigation';

import Tab1 from './Tab1'
import Tab2 from './Tab2'


export default ProfileStack = createStackNavigator({
  Tab1: { screen: Tab1 },
  Tab2: { screen: Tab2 },
});  
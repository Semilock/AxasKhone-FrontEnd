import React, { Component } from 'react';
import { View, Text, Image, StatusBar, TouchableOpacity } from 'react-native';
// import { createStackNavigator, TabNavigator, TabBarBottom, rootNavigation } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './Profile.style';
import ProfileTab from './ProfileTab';

export default class Profile extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerStyle: {
      backgroundColor: 'rgb(25, 50, 75)',
      elevation: 0
    },
    headerTintColor: 'white',
    header: null
    // headerRight: <Text style={styles.titleNavbar}>sam.mirkazemi</Text>,
    // headerLeft: (
    //   <View style={styles.titleNavbar}>
    //     <Icon
    //       style={{ paddingRight: 20, paddingLeft: 15 }}
    //       name="md-more"
    //       size={30}
    //       color="rgb(239, 239, 239)"
    //       onPress={() => navigation.navigate('Edit')}
    //     />
    //     <Icon
    //       style={{ paddingLeft: 0 }}
    //       name="md-cog"
    //       size={30}
    //       color="rgb(239, 239, 239)"
    //       onPress={() => navigation.navigate('Setting')}
    //     />
    //   </View>
    // )
  });

  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="rgb(25, 50, 75)" />
        <View style={styles.navBarContainer}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Edit')}
          >
            <Icon
              style={{}}
              name="md-more"
              size={30}
              color="rgb(239, 239, 239)"
              // onPress={() => this.props.navigation.navigate('Edit')}
            />
          </TouchableOpacity>
          <Text style={[styles.titleNavbar, { flex: 1, textAlign: 'center' }]}>
            sam.mirkazemi
          </Text>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Setting')}
          >
            <Icon
              style={{}}
              name="md-cog"
              size={30}
              color="rgb(239, 239, 239)"
            />
          </TouchableOpacity>
        </View>

        <View style={styles.boxUp}>
          <View style={styles.profileImage}>
            <Image borderRadius={45} source={require('../../img/id1.jpg')} />
          </View>
          <View style={styles.profileInfo}>
            <Text style={styles.title}>سام میرکاظمی</Text>
            <Text>سام میرکاظمی</Text>
            <Text>سام میرکاظمی</Text>
          </View>
        </View>

        <View style={styles.BoxDown}>
          <ProfileTab />
        </View>
      </View>
    );
  }
}

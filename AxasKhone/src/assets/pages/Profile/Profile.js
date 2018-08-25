import React, {Component} from 'react';
import { View, Text, Image, StatusBar } from 'react-native';
import { createStackNavigator, TabNavigator, TabBarBottom, navigatinOptions } from 'react-navigation';
import styles from './Profile.style'

import ProfileTab from './ProfileTab'


export default class Profile extends Component {

    static navigationOptions = ({navigation}) => ({
        headerStyle: {
         backgroundColor: 'rgb(25, 50, 75)',
         elevation: 0,
        },
        headerTintColor: 'white',
        headerRight: <Text style={styles.titleNavbar}>userID</Text>, 
        headerLeft: 
        <View style={styles.titleNavbar}>
        <Text style={{ paddingRight: 10 , color: 'white', fontSize: 18}} onPress={() => navigation.navigate('Edit')}>ویرایش</Text>
        <Text style={{ color: 'white', fontSize: 18}} onPress={() => navigation.navigate('Setting')}>تنظیمات</Text>
        </View>      
      })

  render() {
    return (
      
      <View style={styles.container}>
      <StatusBar backgroundColor='rgb(25, 50, 75)'/>
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
          <ProfileTab/>
        </View>

      </View>
    );
  }
}




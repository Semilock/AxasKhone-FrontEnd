import React, {Component} from 'react';
import {Text, View} from 'react-native';
import styles from '../assets/styles/login.style'

type Props = {};
export default class Login extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>hi gogoli :))</Text>
      </View>
    );
  }
}

import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Dimensions
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const { height } = Dimensions.get('window');

export default class CompletionAddPost extends Component {
  static navigationOptions = {
    tabBarVisible: true,
    headerStyle: {
      backgroundColor: 'rgb(25, 50, 75)',
      elevation: 0
    },
    headerTintColor: 'white'
    // headerRight: <Text style={styles.headerRightStyle}>ثبت توضیح</Text>
  };

  render() {
    // var { picture } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.topBox}>
          <View style={styles.pictureBox} />
          <View style={styles.captionBox}>
            <TextInput
              style={[
                styles.inputText,
                (style = {
                  height: 89,
                  borderColor: 'gray',
                  borderWidth: 1,
                  fontSize: 10,
                  textAlignVertical: 'top'
                })
              ]}
              underlineColorAndroid="transparent"
              placeholder="توضیحات عکس"
              multiline
            />
          </View>
        </View>
        <View style={styles.gioBox}>
          <Icon name="md-location" size={30} color="black" />
          <TextInput
            style={[
              styles.inputText,
              (style = {
                width: 280,
                fontSize: 14
              })
            ]}
            underlineColorAndroid="transparent"
            placeholder="موقعیت"
          />
        </View>
        <View style={styles.gioBox}>
          <TextInput
            style={[
              styles.inputText,
              (style = {
                width: 290,
                fontSize: 10
              })
            ]}
            underlineColorAndroid="transparent"
            placeholder="اضافه کردن تگ"
          />
        </View>
        <View style={styles.submitBox}>
          <TouchableOpacity activeOpacity={0.8}>
            <Text style={styles.buttomSubmit}> ارسال پست</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  topBox: {
    flexDirection: 'row-reverse',
    // backgroundColor: 'pink',
    padding: 15,
    height: 120,
    borderBottom: 1,
    borderBottomWidth: 1,
    borderColor: 'gray'
  },
  pictureBox: {
    flex: 3,
    backgroundColor: 'black',
    marginLeft: 10,
    borderRadius: 5
  },
  captionBox: {
    flex: 7,
    // backgroundColor: 'yellow',
    borderRadius: 10
  },
  inputText: {
    color: 'black',
    paddingHorizontal: 10,
    borderRadius: 5,
    textAlign: 'right',
    backgroundColor: 'white'
  },
  headerRightStyle: {
    alignItems: 'center',
    margin: 10,
    color: 'white',
    fontSize: 18
  },
  gioBox: {
    // backgroundColor: 'orange',
    flexDirection: 'row-reverse',
    padding: 5,
    paddingHorizontal: 15,
    height: 50,
    borderBottomWidth: 1,
    borderColor: 'gray'
  },
  submitBox: {
    position: 'absolute',
    width: '100%',
    marginTop: height - 150
  },
  buttomSubmit: {
    backgroundColor: 'rgb(25, 50, 75)',
    color: 'rgb(182, 182, 182)',
    fontSize: 20,
    borderRadius: 10,
    marginTop: 15,
    marginBottom: 15,
    textAlign: 'center',
    marginHorizontal: 15,
    padding: 10
    // borderWidth: 1,
  }
};

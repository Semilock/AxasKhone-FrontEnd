import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Dimensions,
  Image
} from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';
import { connect } from 'react-redux';
import profileActions from '../../../actions/userProfile';

import Tags from './TagInput/index';

const { height } = Dimensions.get('window');

class CompletionAddPost extends Component {
  static navigationOptions = {
    tabBarVisible: true,
    headerStyle: {
      backgroundColor: 'rgb(25, 50, 75)',
      elevation: 0
    },
    headerTintColor: 'white'
    // headerRight: <Text style={styles.headerRightStyle}>ثبت توضیح</Text>
  };

  constructor(props) {
    super(props);
    this.state = {
      image: undefined,
      caption: undefined,
      location: undefined,
      tags: undefined
    };
  }

  componentDidMount = () => {
    const image = this.props.navigation.getParam('image');
    this.setState({ image });
    // if (this.state.image === undefined)
    //   this.props.navigation.navigate('PickPicture');
  };

  HandleChange = fieldName => value => {
    this.setState({ [fieldName]: value });
  };

  changeTags = tags => {
    this.setState({ tags });
  };

  addPost = () => {
    let post = {
      image: this.state.image,
      caption: this.state.caption,
      tag_string: this.state.tags,
      location: this.state.location
    };
    this.setState({
      image: undefined,
      caption: undefined,
      location: undefined,
      tags: undefined
    });
    this.props.addPost(post).then(res => {
      this.props.navigation.navigate('Profile');
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.topBox}>
          <View style={styles.pictureBox}>
            <Image
              style={{
                width: 110,
                height: 90
              }}
              source={this.state.image}
            />
          </View>
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
              value={this.state.caption}
              onChangeText={this.HandleChange('caption')}
            />
          </View>
        </View>
        <View style={styles.gioBox}>
          <Icon name="location" size={30} color="black" />
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
            value={this.state.location}
            onChangeText={this.HandleChange('location')}
          />
        </View>
        <View style={styles.tagBox}>
          <Tags
            onChangeTags={this.changeTags}
            inputStyle={{
              color: 'rgb(125, 125, 125)',
              backgroundColor: 'white'
            }}
            tagContainerStyle={{
              backgroundColor: 'rgb(25, 50, 75)'
            }}
            placeholder="تگ ها"
          />
        </View>
        <View style={styles.submitBox}>
          <TouchableOpacity activeOpacity={0.8} onPress={this.addPost}>
            <Text style={styles.buttomSubmit}> ارسال پست</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addPost: post => dispatch(profileActions.addPost(post))
  };
};

function mapStateToProps(state) {
  return {};
}

export default connect(
  undefined,
  mapDispatchToProps
)(CompletionAddPost);

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
    backgroundColor: 'gray',
    marginLeft: 10,
    borderRadius: 5
  },
  captionBox: {
    flex: 7,
    borderRadius: 10
  },
  inputText: {
    color: 'gray',
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
    height: 55,
    borderBottomWidth: 1,
    borderColor: 'gray',
    alignItems: 'center'
  },
  tagBox: {
    padding: 5,
    paddingHorizontal: 15,
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

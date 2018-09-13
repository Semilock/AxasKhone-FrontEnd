import React, { Component } from 'react';
import {
  View,
  StatusBar,
  TouchableOpacity,
  FlatList,
  TextInput,
  ScrollView,
  Image
} from 'react-native';
import {
  Card,
  CardItem,
  Thumbnail,
  Text,
  Button,
  Icon,
  Left,
  Right,
  Body,
  List,
  ListItem,
  Content
} from 'native-base';

export default class SingelPost extends Component {
  static navigationOptions = {
    header: null
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <View style={{ backgroundColor: 'white', flex: 1 }}>
            <Card>
              <CardItem>
                <Left>
                  <Button transparent style={{ paddingLeft: 15 }}>
                    <Icon name="apps" />
                  </Button>
                  <Body>
                    <Text style={{ marginRight: 20, textAlign: 'right' }}>
                      {/* {feed.profile.fullname} */}
                      سامیار
                    </Text>
                    <Text style={{ textAlign: 'right' }} note>
                      2 روز پیش
                    </Text>
                  </Body>

                  <Thumbnail
                  // source={{ uri: `http://${feed.profile.profile_picture}` }}
                  />
                  <Thumbnail source={require('../../img/id1.jpg')} />
                </Left>
              </CardItem>
              <CardItem cardBody>
                {/* <Image
                source={{ uri: 'Image URL' }}
                style={{ height: 200, width: null, flex: 1 }}
              /> */}
                <Image
                  source={require('../../img/id1.jpg')}
                  //   source={{ uri: feed.image }}
                  style={{ height: 200, width: null, flex: 1 }}
                />
              </CardItem>
              <CardItem>
                <Text style={{ textAlign: 'right' }}>
                  {/* {feed.caption} */}
                  فکر می کنید آقای زنجانی بدهی خود را پرداخت خواهد کرد؟ - اجازه
                  دهید پاسخ این پرسش را به بعد موکول کنیم. وی چند بار به دادگاه
                  قول داده و راهکارهای مختلفی را معرفی کرد که به نتیجه نرسید،
                  اما آخرین راهکاری که ارائه داده تحت نظر دادگاه است که ما
                  امیدواریم به واقعیت بدل شود. در واقع هر نوع مدرک، نامه، شماره
                  حساب و درخواستی که آقای زنجانی داشتند اگرچه نیاز هم نبود، اما
                  برای رفع بهانه آماده و با نظارت دادگاه در اختیار وی گذاشتیم و
                  امیدواریم که وی به حسن نیت دادگاه که همه مساعدت ها و امکانات
                  لازم را در اختیارشان گذاشته تا به وعده خود عمل کند، احترام
                  گذاشته و بدهی خود را پرداخت کند.
                </Text>
              </CardItem>
              <CardItem>
                <Left>
                  <Button transparent style={{ paddingLeft: 15 }}>
                    <Icon active name="thumbs-up" />
                    <Text>12</Text>
                  </Button>
                  <Button transparent style={{ paddingLeft: 15 }}>
                    <Icon active name="chatbubbles" />
                    <Text>4</Text>
                  </Button>
                </Left>
                <Right>
                  <Text style={{ textAlign: 'right' }}>سهروردی شمالی</Text>
                </Right>
              </CardItem>
              <CardItem>
                <View style={{ flex: 1 }}>
                  <FlatList
                    data={this.props.favoriteList}
                    renderItem={this.renderFavoriteBox}
                    // renderItem={({ item }) => <Text>sam</Text>}
                  />
                </View>
              </CardItem>
            </Card>
          </View>
        </ScrollView>
        <View style={{ height: 50 }}>
          <View
            style={{
              height: 50,
              // backgroundColor: 'orange',
              flexDirection: 'row-reverse',
              paddingLeft: 15
            }}
          >
            <View
              style={{
                // backgroundColor: 'yellow',
                justifyContent: 'center',
                marginHorizontal: 5
              }}
            >
              <Image
                borderRadius={20}
                style={{ width: 40, height: 40 }}
                // source={{ uri: `http://${this.props.profilePic}` }}
                // source={{ uri: `${this.state.profilePic}` }}
                source={{
                  uri:
                    'https://www.saat24.news/d/2016/01/24/4/288519.jpg?ts=1466112739000'
                }}
              />
            </View>
            <View
              style={{
                // backgroundColor: 'red',
                flex: 8,
                flexDirection: 'column',
                paddingRight: 5,
                justifyContent: 'center'
              }}
            >
              <TextInput
                style={{
                  borderColor: 'gray',
                  borderWidth: 1,
                  borderRadius: 5,
                  fontSize: 9,
                  height: 40
                }}
                // onChangeText={text => this.setState({ text })}
                maxLength={500}
                multiline
                underlineColorAndroid="transparent"
                placeholder="نظر خود را وارد کنید .."
              />
            </View>
            <View
              style={{
                flex: 2,
                justifyContent: 'center',
                alignContent: 'center'
              }}
            >
              <TouchableOpacity activeOpacity={0.8}>
                <View
                  style={{
                    borderRadius: 5,
                    marginHorizontal: 5,
                    padding: 5,
                    borderColor: 'gray',
                    borderWidth: 1,
                    backgroundColor: 'gray'
                  }}
                >
                  <Text
                    style={{
                      fontSize: 10,
                      textAlign: 'center',
                      color: 'white',
                      height: 20,
                      marginTop: 5
                    }}
                  >
                    ارسال
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

import React, { Component } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Thumbnail, Text, Left, Right, Body, ListItem } from 'native-base';
import { connect } from 'react-redux';

class FavoriteBox extends Component {
  constructor() {
    super();
    this.state = {
      FavoriteItem: undefined,
      limit: 6,
      offset: 0
    };
  }

  render() {
    const Comment = this.props.favoriteBox;
    return (
      <ListItem avatar>
        <Left />
        <Body>
          <View style={{ flexDirection: 'column' }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between'
              }}
            >
              <Text note style={{ textAlign: 'right' }}>
                الان
              </Text>
              <Text
                note
                style={{
                  textAlign: 'left',
                  justifyContent: 'center'
                }}
              >
                آیت الله لاریجانی
              </Text>
            </View>
            <Text style={{ textAlign: 'right', fontSize: 12 }}>
              زنجانی ۱۳ هزار میلیارد تومان بالا کشیده‌است، زنجانی ۱۳ پرونده تخلف
              مالی داشته و شناسنامه جعلی استفاده می‌کرده‌است، متأسفانه باوجود
              این تخلفات بازهم نفت را در اختیار او قرار می‌داده‌اند ۹۰ درصد
              اموال زنجانی در خارج از کشور است و او چیزی در ایران ندارد که ما به
              آن دلخوش باشیم، در واقع ۱۰ درصد اموالی که در ایران دارد صاحب دیگری
              نیز دارد. زنجانی شرکت‌های بزرگ خود را نیز به نام افراد دیگری کرده
              و مدیرعاملان آن‌ها اشخاص دیگری هستند، با همین ترفند توانسته کار
              کند که نتوانیم این شرکت‌ها را مصادره کنیم
            </Text>
          </View>
        </Body>
        <Right>
          <Thumbnail small source={require('../../img/id1.jpg')} />
        </Right>
      </ListItem>
    );
  }
}

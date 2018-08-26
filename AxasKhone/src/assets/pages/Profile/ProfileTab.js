import React, {Component} from 'react';
import { TabNavigator, TabBarBottom, FooterTabs, TXTabBar } from 'react-navigation';
import { View, Text, FlatList, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
class Photo extends React.Component {
  constructor(props){
  super(props);
    this.state = {
      posts: [
        {
          imageUrl: './../../img/logo.jpg' ,
        },
        {
          imageUrl: './../../img/id1.jpg' ,
        },
        {
          imageUrl: './../../img/logo.jpg' ,
        },
        {
          imageUrl: './../../img/logo.jpg' ,
        },
        {
          imageUrl: './../../img/logo.jpg' ,
        },
        {
          imageUrl: './../../img/id1.jpg' ,
        },
        {
          imageUrl: './../../img/logo.jpg' ,
        },
        {
          imageUrl: './../../img/logo.jpg' ,
        },
        {
          imageUrl: './../../img/logo.jpg' ,
        },
        {
          imageUrl: './../../img/id1.jpg' ,
        },
        {
          imageUrl: './../../img/logo.jpg' ,
        },
        {
          imageUrl: './../../img/logo.jpg' ,
        },
      ],
      exp : [
        {key: 'a'}, 
        {key: 'b'}
      ] 
    }
  }

  render () {
    return (
      <View style={{flex: 1, }}>
        {/* <FlatList
          data={this.state.exp}
          renderItem={({item}) => 
          <Text>{item.key}</Text>}
        /> */}

        <FlatList
          data={this.state.posts}
          numColumns={2}
          renderItem={(item) => 
          <View style={{flex: 1, justifyContent: 'space-around'}}>
            <View style={{flex: 0.5,  borderWidth:5 , height: 150}}>
              {/* <Image resizeMode="stretch" source={require('./../../img/id1.jpg')} /> */}
            </View>
          </View>}
          // renderItem={(item) => <Image source={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}} />}
          // <Text>{item.imageUrl}</Text>}
        />
      </View>
    )
  }
}

// class FlatListItem extends React.Component {
//   render(){

//   }
// }

class Favotites extends React.Component {
    render () {
      const myIcon = (<Icon name="rocket" size={30} color="#900" />)
        return (
        <View style={{ flex: 1, backgroundColor: 'rgb(239, 239, 239)', justifyContent: 'center'}}>
          <Text style={{ textAlign: 'center', Color: 'rgb(57, 57, 57)', fontSize: 24}}>
          hi :))
         
          {myIcon}
          </Text>
        </View>
        )
    }
}


export default AppStackNavigator = TabNavigator({
    Favotites: { screen: Favotites, 
      navigationOptions: {
      tabBarLabel: ({tintColor}) => <Text style={{color: tintColor, textAlign: 'center', marginBottom: 12}}>علاقه مندی ها</Text>,
      },
    },
    Photo: { screen: Photo, 
        navigationOptions: {
        tabBarLabel: ({tintColor}) => <Text style={{color: tintColor, textAlign: 'center', marginBottom: 12}}>عکس ها</Text>,
        },
      },
},{
    tabBarPosition: 'top',
    tabBarComponent: TabBarBottom,
    tabBarOptions: {
      labelStyle: {
        // fontSize: 29,
      },
      style: {
        backgroundColor: 'rgb(239, 239, 239)',
      },
      activeTintColor: 'rgb(25, 50, 75)'
    }
})

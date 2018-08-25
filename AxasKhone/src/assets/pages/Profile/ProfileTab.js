import React, {Component} from 'react';
import { TabNavigator, TabBarBottom, FooterTabs, TXTabBar } from 'react-navigation';
import { View, Text, FlatList, Image } from 'react-native';

class Photo extends React.Component {

  componentDidMount() {
    this.setState({
      posts: [
        {
          imageUrl: 'C:\rahnema\front-end\AxasKhone\src\assets\img\p1.JPG' ,
        },
        {
          imageUrl: 'C:\rahnema\front-end\AxasKhone\src\assets\img\p2.JPG' ,
        },
        {
          imageUrl: 'C:\rahnema\front-end\AxasKhone\src\assets\img\p3.JPG' ,
        },
      ]
    })
  }

  render () {
    return (
      <View style={{flex: 1, backgroundColor: 'yellow'}}>
        <FlatList data={this.props.posts}


        />
        <Image borderRadius={35} source={''} />
      </View>
    )
  }
}

class Favotites extends React.Component {
    render () {
        return (
        <View style={{ flex: 1, backgroundColor: 'rgb(239, 239, 239)', justifyContent: 'center'}}>
          <Text style={{ textAlign: 'center', Color: 'rgb(57, 57, 57)', fontSize: 24}}>
          under develop :))
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

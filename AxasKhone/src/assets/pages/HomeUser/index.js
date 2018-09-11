import { createStackNavigator } from 'react-navigation';

import Home from './Home';
import FriendInvite from './FriendInvite';
import SingelPost from './SingelPost';

const HomeUser = createStackNavigator(
  {
    Home: { screen: Home },
    SingelPost: { screen: SingelPost },
    FriendInvite: { screen: FriendInvite }
  },
  {
    navigationOptions: {
      tabBarVisible: false
    }
  }
);

HomeUser.navigationOptions = ({ navigation }) => {
  return {
    tabBarVisible: navigation.state.index === 0
  };
};
export default HomeUser;

import { createStackNavigator } from 'react-navigation';

import Profile from './Profile';
import Edit from './Edit';
import Setting from './Setting';
import PassChange from './PassChange';
import FavorateFullpage from './FavorateFullpage';

const ProfileStack = createStackNavigator(
  {
    Profile: { screen: Profile },
    Setting: { screen: Setting },
    Edit: { screen: Edit },
    FavorateFullpage: { screen: FavorateFullpage },
    PassChange: { screen: PassChange }
  },
  {
    navigationOptions: {
      tabBarVisible: false
    }
  }
);

ProfileStack.navigationOptions = ({ navigation }) => {
  return {
    tabBarVisible: navigation.state.index === 0
  };
};
export default ProfileStack;

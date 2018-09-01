import { createStackNavigator, createSwitchNavigator } from 'react-navigation';

import Profile from './Profile';
import Edit from './Edit';
import Setting from './Setting';
import PassChange from './PassChange';

const ProfileStack = createStackNavigator(
  {
    Profile: { screen: Profile },
    Setting: { screen: Setting },
    Edit: { screen: Edit },
    PassChange: { screen: PassChange }
  },
  {
    navigationOptions: {
      tabBarVisible: false
    }
  }
);

// ProfileStack.navigationOptions = ({ navigation }) => {
// return {
// tabBarVisible: navigation.state.index === 0
// };
// };
export default ProfileStack;

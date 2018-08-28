import { createStackNavigator, createSwitchNavigator } from 'react-navigation';

import Profile from './Profile';
import Edit from './Edit';
import Setting from './Setting';
import PassChange from './PassChange';

const ProfileStack = createStackNavigator({
  Profile: { screen: Profile },
  Setting: { screen: Setting },
  Edit: { screen: Edit },
  PassChange: { screen: PassChange }
});
export default ProfileStack;


import { createStackNavigator, createSwitchNavigator } from 'react-navigation';

import Profile from './Profile'
import Edit from './Edit'
import Setting from './Setting'

export default ProfileStack = createStackNavigator({
  Profile: { screen: Profile },
  Setting: { screen: Setting },
  Edit: { screen: Edit },
});  
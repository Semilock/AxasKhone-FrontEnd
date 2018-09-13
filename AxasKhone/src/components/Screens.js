import { createStackNavigator } from 'react-navigation';
import AppStackNavigator from './ProfileScreen';
import SinglePost from '../assets/pages/SinglePost';
import OtherProfile from '../assets/pages/OtherProfile';

export default (Screens = createStackNavigator(
  {
    Tabs: { screen: AppStackNavigator },
    SinglePost: { screen: SinglePost },
    OtherProfile: { screen: OtherProfile }
  },
  { headerMode: 'none' }
));

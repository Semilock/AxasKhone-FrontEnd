import { createStackNavigator } from 'react-navigation';
import Profile from './Profile';
import Favorite from './Favorite';

const OtherProfile = createStackNavigator(
  {
    OtherUserProfile: { screen: Profile },
    OtherUserProfileFavorite: { screen: Favorite }
  },
  { headerMode: 'none' }
);

export default OtherProfile;

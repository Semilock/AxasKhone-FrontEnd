import { createStackNavigator } from 'react-navigation';

import PickPicture from './PickPicture';
import CompletionAddPost from './CompletionAddPost';
import Camera from './Camera';

const AddPost = createStackNavigator(
  {
    PickPicture: { screen: PickPicture },
    CompletionAddPost: { screen: CompletionAddPost },

    Camera: { screen: Camera }
  },
  {
    navigationOptions: {
      tabBarVisible: false
    }
  }
);

AddPost.navigationOptions = ({ navigation }) => {
  return {
    tabBarVisible: navigation.state.index === 0
  };
};
export default AddPost;

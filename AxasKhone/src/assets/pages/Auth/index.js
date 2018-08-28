import { createStackNavigator } from 'react-navigation';

import Login from './Login';
import Register from './Register';
import ForgetPassword from './ForgetPassword';

const AuthStack = createStackNavigator(
  {
    Login: { screen: Login },
    Register: { screen: Register },
    ForgetPassword: { screen: ForgetPassword }
  },
  {
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false
    }
  }
);

export default AuthStack;

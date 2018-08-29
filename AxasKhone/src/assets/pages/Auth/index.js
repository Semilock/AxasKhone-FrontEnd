import { createStackNavigator } from 'react-navigation';

import Login from './Login';
import Register from './Register';
import ForgetPassword from './ForgetPassword';
import SignUp2 from '../../../components/SignUpScreen2';

const AuthStack = createStackNavigator(
  {
    Login: { screen: Login },
    Register: { screen: Register },
    Register2: { screen: SignUp2 },
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

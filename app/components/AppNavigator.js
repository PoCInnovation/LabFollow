import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './app/components/HomeScreen'
import Login from './app/components/Login'
import Signup from './app/components/Signup'

const MainNavigator = createStackNavigator({
  Home: { screen: HomeScreen },
  Login: { screen: Login },
  Signup: { screen: Signup },
});

export default AppNavigator;
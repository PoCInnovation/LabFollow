import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import Login from '../views/Login'
import Signup from '../views/Signup'
import SignupDetails from '../views/SignupDetails'
import Studies from '../views/Studies'

const Navigator = createDrawerNavigator({
  Login: { screen: Login, navigationOptions: { title: 'Login', header: null } },
  Studies: { screen: Studies, navigationOptions: { title: 'Studies', header: null, gesturesEnabled: false } },
  Signup: { screen: Signup },
  SignupDetails: { screen: SignupDetails },
});

const NavigatorComponent = createAppContainer(Navigator);

export let Connection = () => {
  return (
    <NavigatorComponent />
  )
}
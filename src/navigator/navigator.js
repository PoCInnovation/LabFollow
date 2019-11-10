import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import Login from '../views/Login'
import Signup from '../views/Signup'
import SignupDetails from '../views/SignupDetails'
import Studies from '../views/Studies'

const Navigator = createDrawerNavigator({
  Login: { screen: Login, navigationOptions: { title: 'Connexion', header: null } },
  Studies: { screen: Studies, navigationOptions: { title: 'Questionnaires', header: null, gesturesEnabled: false } },
  Signup: { screen: Signup },
  SignupDetails: { screen: SignupDetails },
});

const NavigatorComponent = createAppContainer(Navigator);

export let Connection = () => {
  return (
    <NavigatorComponent />
  )
}

//https://stackoverflow.com/questions/54218039/how-can-i-hide-a-specific-tab-component-in-react-native
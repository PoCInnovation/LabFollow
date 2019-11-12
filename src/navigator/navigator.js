import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import Login from '../views/Login'
import Signup from '../views/Signup'
import SignupDetails from '../views/SignupDetails'
import Studies from '../views/Studies'

const Hidden = () => {
    return null;
}

const Navigator = createDrawerNavigator({
  Login: { screen: Login, navigationOptions: { title: 'Connexion', header: null, drawerLabel: <Hidden /> } },
  Studies: { screen: Studies, navigationOptions: { title: 'Questionnaires', header: null, gesturesEnabled: false } },
  Signup: { screen: Signup, navigationOptions: { title: 'Inscription', header: null, drawerLabel: <Hidden /> } },
  SignupDetails: { screen: SignupDetails, navigationOptions: { header: null, drawerLabel: <Hidden /> } },
});

const NavigatorComponent = createAppContainer(Navigator);

export let Connection = () => {
  return (
    <NavigatorComponent />
  )
}
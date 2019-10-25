import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import Login from '../views/Login'
import Signup from '../views/Signup'
import SignupDetails from '../views/SignupDetails'
import Studies from '../views/Studies'
import { _retrieveData } from '../utils/localStorage'

const SignedIn = createDrawerNavigator({
  Login: { screen: Login },
  Studies: { screen: Studies },

  Signup: { screen: Signup },
  SignupDetails: { screen: SignupDetails },
});

const SignedOut = createStackNavigator({
  Signup: { screen: Signup },
  SignupDetails: { screen: SignupDetails },
});

const SignedInComponent = createAppContainer(SignedIn);
const SignedOutComponent = createAppContainer(SignedOut);

export let Connection = () => {
  // export let Connection = async () => {
  // const isLogged = await _retrieveData('isLogged')
  // console.log(isLogged)
  return (
    false
    // isLogged == false || isLogged == undefined
    ? <SignedInComponent />
    : <SignedInComponent />
  );
}
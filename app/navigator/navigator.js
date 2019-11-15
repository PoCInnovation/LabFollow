import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import HomeScreen from '../components/HomeScreen'
import Login from '../components/Login'
import Signup from '../components/Signup'
import SignupDetails from '../components/SignupDetails'
import Studies from '../components/Studies'
import { _retrieveData } from '../utils/localStorage'

const SignedIn = createDrawerNavigator({
  Studies: { screen: Studies },
});

const SignedOut = createStackNavigator({
  Home: { screen: HomeScreen },
  Login: { screen: Login },
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
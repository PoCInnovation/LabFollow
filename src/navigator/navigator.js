import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Login from '../views/Login'
import Signup from '../views/Signup'
import SignupDetails from '../views/SignupDetails'
import Studies from '../views/Studies'
import Profile from '../views/Profile'
import Doctors from '../views/Doctors'

const Hidden = () => {
  return null;
}

const Navigator = createDrawerNavigator({
  Login: {
    screen: Login,
    navigationOptions: {
      header: null,
      drawerLabel: <Hidden />
    },
  },
  Studies: {
    screen: Studies,
    navigationOptions: {
      title: 'Mes questionnaires',
      header: null,
      activeTintColor: "#00cdac",
      gesturesEnabled: false,
      drawerIcon: <FontAwesome5 name='wpforms' size={20} color='#00cdac' />
    },
  },
  Doctors: {
    screen: Doctors,
    navigationOptions: {
      title: 'Mes docteurs',
      header: null,
      activeTintColor: "#00cdac",
      gesturesEnabled: false,
      drawerIcon: <FontAwesome5 name='user-md' size={20} color='#00cdac' />
    },
  },
  Profile: {
    screen: Profile,
    navigationOptions: {
      title: 'Mon profile',
      header: null,
      activeTintColor: "#00cdac",
      gesturesEnabled: false,
      drawerIcon: <FontAwesome5 name='address-card' size={20} color='#00cdac' />
    },
  },
  Signup: {
    screen: Signup,
    navigationOptions: {
      header: null,
      drawerLabel: <Hidden />
    },
  },
  SignupDetails: {
    screen: SignupDetails,
    navigationOptions: {
      header: null,
      drawerLabel: <Hidden />
    },
  },
}, {
  contentOptions: {
    activeTintColor: '#00cdac',
    itemsContainerStyle: {
      marginVertical: 0,
    },
    iconContainerStyle: {
      opacity: 1
    },
  }
});

const NavigatorComponent = createAppContainer(Navigator);

export let Connection = () => {
  return (
    <NavigatorComponent />
  )
}
import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';

//importing screens
import firstScreen from '../screens/firstScreen';
import login from '../screens/login';
import signUp from '../screens/signUp';

const authStack = createStackNavigator({
  firstScreen: firstScreen,
  login: login,
  signUp: signUp,
});

export default authStack;

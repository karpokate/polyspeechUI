import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';

//importing screens
import firstScreen from '../screens/firstScreen';
import login from '../screens/login';
import signUp from '../screens/signUp';

import notification from '../screens/Notification';
const authStack = createStackNavigator(
  {
    firstScreen: firstScreen,
    login: login,
    signUp: signUp,
    //notification: notification,
  },
  {
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    },
  },
);

export default authStack;

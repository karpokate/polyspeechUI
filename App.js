import React, {Fragment} from 'react';
import {createAppContainer} from 'react-navigation';
//import navigation file
import AuthStack from './navigation/authStack';

const App = createAppContainer(AuthStack);
export default App;

import React from 'react';
import { View, Text, Button } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

// Components
import Home from '../screens/Home';
import Profile from '../screens/Profile';

const Navigator = createStackNavigator({
    Home: {
         screen: Home,
         navigationOptions: {
            headerShown: false,
          } 
    },
    Profile: { screen: Profile },
});


const App = createAppContainer(Navigator);

export default App;
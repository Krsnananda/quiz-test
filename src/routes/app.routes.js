import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import Home from '../screens/Home'
import Selection from '../screens/Selection'

const AppStack = createStackNavigator();

const AppRoutes = () => (
  <AppStack.Navigator>
    <AppStack.Screen
      name="Home"
      component={Home}
      options={{
        headerTitle: 'Movie Quiz',
        headerLeft: null,
        headerTitleAlign: 'center',
      }}
    />
    <AppStack.Screen
      name="Selection"
      component={Selection}
      options={{
        headerTitle: '',
        headerTransparent: true,
        headerTitleAlign: 'center',
      }}
    />
  </AppStack.Navigator>
);

export default AppRoutes
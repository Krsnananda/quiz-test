import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import Home from '../screens/Home'

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
  </AppStack.Navigator>
);

export default AppRoutes
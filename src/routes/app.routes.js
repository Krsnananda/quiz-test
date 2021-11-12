import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import Home from '../screens/Home'
import Selection from '../screens/Selection'
import Confirmation from '../screens/Confirmation'
import Questions from '../screens/Questions'
import Answers from '../screens/Answers'
import Records from '../screens/Records'

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
    <AppStack.Screen
      name="Confirmation"
      component={Confirmation}
      options={{
        headerTitle: '',
        headerTransparent: true,
        headerTitleAlign: 'center',
      }}
    />
    <AppStack.Screen
      name="Questions"
      component={Questions}
      options={{
        headerTitle: '',
        headerTransparent: true,
        headerTitleAlign: 'center',
      }}
    />
    <AppStack.Screen
      name="Answers"
      component={Answers}
      options={{
        headerTitle: 'Answers',
        headerTitleAlign: 'center',
      }}
    />
    <AppStack.Screen
      name="Records"
      component={Records}
      options={{
        headerTitle: 'Records',
        headerTitleAlign: 'center',
      }}
    />
  </AppStack.Navigator>
);

export default AppRoutes
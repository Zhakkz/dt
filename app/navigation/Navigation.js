import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import AuthScreen from '../screens/AuthScreen';
import MainScreen from '../screens/MainScreen';
import BottomTabNavigator from './BottomTabNavigator';
const Stack = createStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={AuthScreen} />
        <Stack.Screen
          options={{headerBackTitleVisible: false, headerShown: false}}
          name="Second"
          component={BottomTabNavigator}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

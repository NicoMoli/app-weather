import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import WeatherScreen from './../screens/weather-screen';

export default function AppRoutes() {

  const Stack = createStackNavigator();

  const optionsByDefault = { "headerShown": false }

  return (
    <Stack.Navigator initialRouteName="WeatherScreen">
        <Stack.Screen name="WeatherScreen" options={optionsByDefault} component={WeatherScreen} />
    </Stack.Navigator>
  );

}
import React from 'react';
import { Button } from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';

import WeatherScreen from './../screens/weather-screen';
import CitiesScreen from '../screens/cities-screen';

export default function AppRoutes() {

  const Stack = createStackNavigator();

  const optionsByDefault = { "headerShown": false }

  return (
    <Stack.Navigator initialRouteName="WeatherScreen">
        <Stack.Screen name="Weather" options={optionsByDefault} component={WeatherScreen} />
        <Stack.Screen name="Cities"  
          options={{
              title: 'Ciudades',
              headerTitleStyle: {
                alignContent: 'center'
              },
            }}
         component={CitiesScreen} />
    </Stack.Navigator>
  );

}
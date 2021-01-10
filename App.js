import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from "react";
import { StyleSheet, Text, View, Button } from 'react-native';

import store from './app/redux/store/index';
import { Provider } from 'react-redux';
import { useDispatch, useSelector } from "react-redux";
import { fetchWeatherState } from "./app/redux/slices/weather";

export default function AppWrapper() {

  return (
    <Provider store={store}>
      <App />
    </Provider>
  )
}

function App() {

  const dispatch = useDispatch();

  const { loading, weatherState } = useSelector(
    (state) => state
  ).weatherSlice;

  useEffect(() => {
    dispatch(fetchWeatherState());
  }, [dispatch]);

  function onPress() {
    console.log("Presionando boton")
    dispatch(fetchWeatherState());
  }

  if (loading) {
    return <p>Loading...</p>;
  }

  console.log("Respondió redux ->", weatherState);

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
      <Text> {JSON.stringify(weatherState)} </Text>

      <Button
        onPress={onPress}
        title="Learn More"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

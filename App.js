import React, { useEffect } from "react";
import { StyleSheet, Text, FlatList, SafeAreaView, Platform, StatusBar, View } from 'react-native';

import store from './app/redux/store/index';
import { Provider } from 'react-redux';
import { useDispatch, useSelector } from "react-redux";
import { fetchWeatherState } from "./app/redux/slices/weather";

import { ForecastCard } from './app/components/forecastCard';

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
    return (
      <SafeAreaView style={styles.container}>
        <Text> Cargando datos del clima... </Text>
      </SafeAreaView>
    )
  }

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <FlatList 
          data={weatherState} 
          style={{marginTop:20}} 
          keyExtractor={item => item.id} 
          renderItem={ ({item}) => 
            <ForecastCard detail={item} location={item.city} />
          } 
        />
      </View>
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
  },
});

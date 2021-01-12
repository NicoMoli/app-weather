import React from "react";

import {
  Container
} from './app/styles/styles';

import store from './app/redux/store/index';
import { Provider } from 'react-redux';
import WeatherScreen from './app/screens/weather-screen';

export default function AppWrapper() {

  return (
    <Provider store={store}>
      <App />
    </Provider>
  )
}

function App() {

  return (
    <Container>
        <WeatherScreen />
    </Container>
  );
}

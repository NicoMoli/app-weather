import React from "react";

import { Container } from "./app/styles/styles";

import store from "./app/redux/store/index";
import { Provider } from "react-redux";
import WeatherScreen from "./app/screens/weather-screen";

import { NavigationContainer } from "@react-navigation/native";
import AppRoutes from "./app/routes/app-routes";

export default function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <AppRoutes />
      </Provider>
    </NavigationContainer>
  );
}

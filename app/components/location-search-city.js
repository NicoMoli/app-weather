import React from "react";

import { useDispatch } from "react-redux";

import { Icon } from "react-native-elements";
import { ContainerSearch } from "../styles/styles";
import { fetchCurrentLocationWeather } from "../redux/slices/weather";

const LocationSearchCity = ({ navigation }) => {
  const dispatch = useDispatch();

  function updateCurrentCity() {
    dispatch(fetchCurrentLocationWeather());
  }

  return (
    <ContainerSearch>
      <Icon
        size={20}
        color="white"
        name="location-arrow"
        type="font-awesome"
        onPress={() => updateCurrentCity()}
      />

      <Icon
        size={20}
        color="white"
        name="search"
        type="font-awesome"
        onPress={() => navigation.navigate("Cities")}
      />
    </ContainerSearch>
  );
};
export default LocationSearchCity;

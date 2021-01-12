import { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { fetchWeatherState } from '../redux/slices/weather';


export default function useForecastWeather() {

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

  return {loading, weatherState};
}
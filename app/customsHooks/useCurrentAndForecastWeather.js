import { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { fetchCurrentWeatherState, fetchWeatherForecastState } from '../redux/slices/weather';


export default function useCurrentAndForecastWeather() {

  const dispatch = useDispatch();

  const { loading, weatherForecast, weatherCurrentState } = useSelector(
    (state) => state
  ).weatherSlice;

  useEffect(() => {
    dispatch(fetchWeatherForecastState(-32.94682, -60.63932));
    dispatch(fetchCurrentWeatherState());
  }, [dispatch]);

  function onPress() {
    console.log("Presionando boton")
    //dispatch(fetchWeatherForecastState());
  }

  //weatherState.daily = weatherState?.daily.splice(5, 4);
  // const data =weatherState;
  // data.daily = data.daily.splice(5, 4);

  return {loading, weatherForecast, weatherCurrentState};
}
import { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { fetchCurrentWeatherState, fetchWeatherForecastState } from '../redux/slices/weather';


export default function useCurrentAndForecastWeather(lat = null, lon = null) {

  const dispatch = useDispatch();

  const { loading, weatherForecast, weatherCurrentState } = useSelector(
    (state) => state
  ).weatherSlice;

  useEffect(() => {
    
    if(!lat && !lon)  
      dispatch(fetchWeatherForecastState(-32.94682, -60.63932));
    else
      dispatch(fetchWeatherForecastState(lat, lon));

    dispatch(fetchCurrentWeatherState());

  }, [dispatch, lat, lon]);


  return {loading, weatherForecast, weatherCurrentState};
}
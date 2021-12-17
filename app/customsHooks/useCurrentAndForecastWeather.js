import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchCurrentLocationWeather,
  fetchCurrentWeatherState,
  fetchWeatherForecastState,
} from "../redux/slices/weather";

export default function useCurrentAndForecastWeather(
  lat = null,
  lon = null,
  city = null
) {
  const dispatch = useDispatch();

  //Obtenemos la ubicacion actual a través del server

  const { loading, weatherForecast, weatherCurrentState } = useSelector(
    (state) => state
  ).weatherSlice;

  useEffect(() => {
    if (!lat && !lon && !city) {
      dispatch(fetchCurrentLocationWeather());
    } else {
      dispatch(fetchCurrentWeatherState(city));
      dispatch(fetchWeatherForecastState(lat, lon));
    }
  }, [dispatch, lat, lon, city]);

  return { loading, weatherForecast, weatherCurrentState };
}

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';

export const initialState = {
    currentLocation: null,
    weatherCurrentState: null,
    weatherForecast: null,
    loading: false
}

const weatherSlice = createSlice({
    name: "weather",
    initialState,
    reducers: {

        getWeatherState: (state) => {
            state.loading = true;
        },
        getWeatherStateSucess: (state, { payload }) => {
          state.weatherCurrentState = payload;
          state.loading = false;
        },
        getWeatherStateFailure: (state) => {
            state.loading = false;
        },

        getWeatherForecast: (state) => {
            state.loading = true;
        },
        getWeatherForecastSucess: (state, { payload }) => {
          const data = payload;
          data.daily = data.daily.splice(-5);
          state.weatherForecast = data;
          state.loading = false;
        },
        getWeatherForecastFailure: (state) => {
            state.loading = false;
        },

        getCurrentLocation: (state, { payload }) => {
          state.loading = true;
        },
        getCurrentLocationSuccess: (state) => {
          state.currentLocation = payload;
        },
        getCurrentLocationFailure: (state) => {
          state.loading = false;
        },

    }
  });

export const {  getWeatherState, 
                getWeatherStateSucess,
                getWeatherStateFailure,
                getWeatherForecast,
                getWeatherForecastSucess,
                getWeatherForecastFailure,
                getCurrentLocation,
                getCurrentLocationSuccess,
                getCurrentLocationFailure
            } = weatherSlice.actions;

export default weatherSlice.reducer


//APIs calls
export const fetchWeatherForecastState = (lat, lon) => async dispatch => {
  try {
    dispatch(getWeatherForecast());

    const response = await axios.get(`http://192.168.0.87:3000/v1/forecast/` + lat + '/' + lon);

    const data = response.data.DataObject;

    dispatch(getWeatherForecastSucess(data));

  } 
  catch (e) {
    dispatch(getWeatherForecastFailure());
  }
}

export const fetchCurrentWeatherState = (cityName) => async dispatch => {
  try {
    dispatch(getWeatherState());

    const response = await axios.get(`http://192.168.0.87:3000/v1/current/` + cityName);

    const data = response.data.DataObject;

    dispatch(getWeatherStateSucess(data));

  } 
  catch (e) {
    dispatch(getWeatherStateFailure());
  }
}

export const fetchCurrentLocationWeather = () => async dispatch => {
  try {
    dispatch(getCurrentLocation());

    const response = await axios.get(`http://192.168.0.87:3000/v1/location`);

    const data = response.data.DataObject;

    dispatch(fetchCurrentWeatherState(data.city));

    dispatch(fetchWeatherForecastState(data.lat, data.lon));

    dispatch(getCurrentLocationSuccess(data));

  } 
  catch (e) {
    dispatch(getCurrentLocationFailure());
  }
}
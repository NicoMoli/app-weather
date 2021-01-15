import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';

export const initialState = {
    currentCity: null,
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

        setCurrentCity: (state, { payload }) => {
            state.currentCity = payload;
        },

    }
  });

export const {  getWeatherState, 
                getWeatherStateSucess,
                getWeatherStateFailure,
                getWeatherForecast,
                getWeatherForecastSucess,
                getWeatherForecastFailure,
                setCurrentCity
            } = weatherSlice.actions;

export default weatherSlice.reducer


//APIs calls
export const fetchWeatherForecastState = (lat, lon) => async dispatch => {
  try {
    dispatch(getWeatherForecast());

    console.log("Llamando a API fetchWeatherState!");

    const response = await axios.get(`http://192.168.0.87:3000/v1/forecast/` + lat + '/' + lon);

    const data = response.data.DataObject;

    console.log("Llamando a API fetchWeatherState OK!");

    dispatch(getWeatherForecastSucess(data));

  } 
  catch (e) {
    dispatch(getWeatherForecastFailure());
    console.log("ERROR API Response -> ", e);
  }
}

export const fetchCurrentWeatherState = () => async dispatch => {
  try {
    dispatch(getWeatherState());

    console.log("Llamando a API fetchCurrentWeatherState!");

    const response = await axios.get(`http://192.168.0.87:3000/v1/current/`);

    const data = response.data.DataObject;

    console.log("Llamando a API fetchCurrentWeatherState OK!");

    dispatch(getWeatherStateSucess(data));

  } 
  catch (e) {
    dispatch(getWeatherStateFailure());
    console.log("ERROR API Response -> ", e);
  }
}
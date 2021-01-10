import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';

export const initialState = {
    currentCity: null,
    weatherState: null,
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
            state.weatherState = payload;
            state.loading = false;
        },
        getWeatherStateFailure: (state) => {
            state.loading = false;
        },

        getWeatherForecast: (state) => {
            state.loading = true;
        },
        getWeatherForecastSucess: (state, { payload }) => {
            state.weatherForecast = payload;
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
export const fetchWeatherState = () => async dispatch => {
  try {
    dispatch(getWeatherState());

    console.log("Llamando a API fetchWeatherState!");

    const response = await axios.get(`http://192.168.1.17:3000/v1/location`);
    
    const data = response.data.DataObject;

    // Set the data 
    dispatch(getWeatherStateSucess(data));

  } 
  catch (e) {
    dispatch(getWeatherStateFailure());
    console.log(e);
  }
}
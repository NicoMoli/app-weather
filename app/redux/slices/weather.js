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

    const response = await axios.get(`http://192.168.0.87:3000/v1/forecast/rosario`);

    const data = response.data.DataObject;

    console.log("Llamando a API fetchWeatherState OK!");

    // Set the data
    const dataFiltered = filterData(data);
    dispatch(getWeatherStateSucess(dataFiltered));

  } 
  catch (e) {
    dispatch(getWeatherStateFailure());
    console.log("ERROR API Response -> ", e);
  }
}

const filterData = (rawData) => {

    return {
      id: rawData.city.id,
      name: rawData.city.name,
      country: rawData.city.country,
      timezone: rawData.city.timezone,
      coord: {
        lat: rawData.city.coord.lat,
        lon: rawData.city.coord.lon,
      },
      list: rawData.list,
    };
    
  };
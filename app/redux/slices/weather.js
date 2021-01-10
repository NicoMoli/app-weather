import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

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
export const fetchWeatherState = createAsyncThunk(
    "weather/fetchWeatherState",
    async (thunkAPI) => {
      // Set the loading state to true
      thunkAPI.dispatch(getWeatherState());
  
      try {
        console.log("Llamando a API!")
        const response = await fetch(
          "http://localhost:3000/v1/location",
          {
            method: "GET"
          }
        );

        const data = response.DataObject;
        // Set the data 
        thunkAPI.dispatch(getWeatherStateSucess(data));
      } catch (error) {
        // Set any erros while trying to fetch
        thunkAPI.dispatch(getWeatherStateFailure());
      }
    }
  );
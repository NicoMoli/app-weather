import React, { useState, useEffect }  from 'react';
import { StyleSheet, View, Image, Text, Card } from 'react-native';
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { fetchWeatherState } from '../redux/slices/weather';

import ForecastCard from './../components/forecastCard';
import useForecastWeather from './../customsHooks/useForecastWeather';

function WeatherScreen({props}) {

	const {loading, weatherState} = useForecastWeather();

    return (
		<View style={styles.container}>
			{ 
				loading ?
					<Text> Cargando datos del clima... </Text> 
				: 
					<ForecastCard props={weatherState} />
		  	}
		</View>	
	);
}

const styles = StyleSheet.create({
    container: {
		flex: 1
	}
});

export default WeatherScreen;
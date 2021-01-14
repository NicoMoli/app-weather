import React from 'react';
import { StyleSheet, View, Image, Text, Card } from 'react-native';

import ForecastCard from './../components/forecastCard';
import useForecastWeather from './../customsHooks/useForecastWeather';
import SearchCity from '../components/search-city';
import { Container } from './../styles/styles';

function WeatherScreen({props}) {

	const {loading, weatherState} = useForecastWeather();

    return (
		<View style={styles.container}>
			{ 
				loading ?
					<Text> Cargando datos del clima... </Text> 
				: 
					<Container>
						<SearchCity />
						<ForecastCard props={weatherState} />
					</Container>
					
		  	}
		</View>	
	);
}

const styles = StyleSheet.create({
    container: {
		alignItems: 'center',
    	flex: 1,
    	justifyContent: 'center'
	}
});

export default WeatherScreen;
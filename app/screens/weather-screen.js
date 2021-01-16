import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import ForecastCard from './../components/forecastCard';
import LocationSearchCity from '../components/location-search-city';
import { Container, ContainerSearch } from './../styles/styles';
import useCurrentAndForecastWeather from './../customsHooks/useCurrentAndForecastWeather';

function WeatherScreen({route, navigation}) {
	
	const city = route.params?.city;
	const lat = route.params?.lat;
	const lon = route.params?.lon;

	let data = {}

	if(lat && lon)
		data = useCurrentAndForecastWeather(lat, lon, city);
	else 
		data = useCurrentAndForecastWeather();	
	
    return (
		<View style={styles.container}>
			{ 
				data?.loading ?
					<Text> Cargando datos del clima... </Text> 
				: 
					<Container>					
						<LocationSearchCity navigation={navigation} />
											
						<ForecastCard currentWeather={data?.weatherCurrentState} forecastWeather={data?.weatherForecast} />
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
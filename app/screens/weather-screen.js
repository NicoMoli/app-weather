import React from 'react';
import { StyleSheet, View } from 'react-native';

import ForecastCard from './../components/forecastCard';
import LocationSearchCity from '../components/location-search-city';
import { Container, ContainerLoading, Loading} from './../styles/styles';
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
					<ContainerLoading>	
						<Loading> Cargando datos del clima... </Loading> 
					</ContainerLoading>	
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
    	flex: 1,
	}
});

export default WeatherScreen;
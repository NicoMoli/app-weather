import React from "react";

import { isSameDay, format } from "date-fns";
import { es } from 'date-fns/esm/locale'
import imageDictionary from "../shared/images.js";

import Card from '../components/card';

import {
    Container,
    CurrentDay,
    City,
    BigText,
    BigIcon,
    Temp,
    Description,
    Week,
    TempMinMax
} from '../styles/styles';


const ForecastCard = ({currentWeather, forecastWeather}) => {

    // const currentWeather = props?.list.filter((day) => {
    //     const now = new Date().getTime() + Math.abs(props?.timezone * 1000);
    //     const currentDate = new Date(day.dt * 1000);
    //     return isSameDay(now, currentDate);
    // });

    const lastUpdateHour = new Date(currentWeather?.dt * 1000).getHours();
    const lastUpdateMin = new Date(currentWeather?.dt * 1000).getMinutes();

    const daysForecast = forecastWeather?.daily.map((day) => {
        const dt = new Date(day.dt * 1000);
        return {
            date: dt,
            name: format(dt, "EEEE", {locale: es}),
            temp_min: Math.round(day.temp.min),
            temp_max: Math.round(day.temp.max),
            icon: imageDictionary[day.weather[0].icon] || imageDictionary["02d"],
        };
    });

    return (
        (
            <Container>
                <CurrentDay>
                    <City>{'NOMBRE CIUDAD'}</City>
                    <BigIcon
                        source={
                            imageDictionary[
                                currentWeather?.weather[0].icon
                            ] || imageDictionary["02d"]
                        }
                    />
                    <Temp>{Math.round(currentWeather?.main.temp)}°C</Temp>
                    <TempMinMax>
                        {Math.round(currentWeather?.main.temp_min)}°C -
                        {Math.round(currentWeather?.main.temp_max)}°C
                    </TempMinMax>
                    <Description>
                        {currentWeather?.weather[0].description}
                    </Description>
                    <Description>
                        {'Última actualización: '}{ lastUpdateHour  + ':' + lastUpdateMin}
                    </Description>  
                </CurrentDay>
                <Week horizontal={false} showsVerticalScrollIndicator={false}>
                    {daysForecast?.map((day, index) => (
                        <Card
                            key={index}
                            index={index}
                            icon={day.icon}
                            name={day.name.substring(0, 3)}
                            tempMax={day.temp_max}
                            tempMin={day.temp_min}
                        />
                        
                    ))}
                </Week>
            </Container>
        )
    );
};

export default ForecastCard;

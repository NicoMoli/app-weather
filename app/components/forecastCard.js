import React, { useEffect } from "react";
import { View } from 'react-native';

import { isSameDay, format } from "date-fns";
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
} from '../styles/styles';

import { Divider } from "react-native-elements";


const ForecastCard = ({props}) => {

    const currentWeather = props?.list.filter((day) => {
        const now = new Date().getTime() + Math.abs(props?.timezone * 1000);
        const currentDate = new Date(day.dt * 1000);
        return isSameDay(now, currentDate);
    });

    const daysByHour = props?.list.map((day) => {
        const dt = new Date(day.dt * 1000);
        return {
            date: dt,
            hour: dt.getHours(),
            name: format(dt, "EEEE"),
            temp: Math.round(day.main.temp),
            icon:
                imageDictionary[day.weather[0].icon] || imageDictionary["02d"],
        };
    });

    return (
        currentWeather?.length > 0 && (
            <Container>
                <CurrentDay>
                    <City>{props?.name}</City>
                    <BigIcon
                        source={
                            imageDictionary[
                                currentWeather[0].weather[0].icon
                            ] || imageDictionary["02d"]
                        }
                    />
                    <Temp>{Math.round(currentWeather[0].main.temp)}°C</Temp>
                    <Description>
                        {currentWeather[0]?.weather[0].description}
                    </Description>
                </CurrentDay>
                <Week horizontal={false} showsHorizontalScrollIndicator={false}>
                    {daysByHour?.map((day, index) => (
                        <Card
                            key={index}
                            index={index}
                            icon={day.icon}
                            name={day.name.substring(0, 3)}
                            temp={day.temp}
                            hour={day.hour}
                        />
                        
                    ))}
                </Week>
            </Container>
        )
    );
};
export default ForecastCard;

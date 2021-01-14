import React from "react";
import { View } from "react-native";
import { Divider } from "react-native-elements";
import { Day, SmallIcon, SmallText } from '../styles/styles';

export default function Card({ name, icon, temp, hour, index }) {
  return (
    <View>
      {
        index === 0 
          ? 
          <Day>
            <SmallIcon source={icon} />
            <SmallText>{name}</SmallText>
            <SmallText>{temp}°C</SmallText>
            <SmallText>{hour}h</SmallText>
          </Day> 
          :
          <View>
            <Divider style={{
                borderBottomColor: 'white',
                borderBottomWidth: 0.6
              }}
            />
            <Day>
              <SmallIcon source={icon} />
              <SmallText>{name}</SmallText>
              <SmallText>{temp}°C</SmallText>
              <SmallText>{hour}h</SmallText>
            </Day>
          </View>
      }      
    </View>
    
  );
}
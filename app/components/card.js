import React from "react";
import { View } from "react-native";
import { Divider } from "react-native-elements";
import { Day, SmallIcon, SmallText } from "../styles/styles";

export default function Card({ name, icon, tempMin, tempMax, index }) {
  return (
    <View>
      {index === 0 ? (
        <Day>
          <SmallIcon source={icon} />
          <SmallText>{name}</SmallText>
          <SmallText>
            {tempMin} - {tempMax}°C
          </SmallText>
        </Day>
      ) : (
        <View>
          <Divider
            style={{
              borderBottomColor: "white",
              borderBottomWidth: 0.6,
            }}
          />
          <Day>
            <SmallIcon source={icon} />
            <SmallText>{name}</SmallText>
            <SmallText>
              {tempMin} - {tempMax}°C
            </SmallText>
          </Day>
        </View>
      )}
    </View>
  );
}

import React from "react";
import { Day, SmallIcon, SmallText } from '../styles/styles';

export default function Card({ name, icon, temp, hour }) {
  return (
    <Day>
      <SmallIcon source={icon} />
      <SmallText>{name}</SmallText>
      <SmallText>{temp}°C</SmallText>
      <SmallText>{hour}h</SmallText>
    </Day>
  );
}
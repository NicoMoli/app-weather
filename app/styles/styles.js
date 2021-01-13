import styled from "styled-components/native";
import { Platform, StatusBar } from 'react-native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #272343;
  justify-content: center;
  width: 100%;
  
  padding-top: ${Platform.OS === 'android' ? StatusBar.currentHeight + "px" : 0};
`;
export const CurrentDay = styled.View`
  position: relative;
  flex: 1;
  align-items: center;
`;

export const City = styled.Text`
  font-size: 28px;
  font-weight: 300;
  color: white;
  padding-bottom: 10px;
`;
export const BigText = styled.Text`
  font-size: 20px;
  font-weight: 100;
  color: white;
  padding-bottom: 20px;
`;

export const BigIcon = styled.Image`
  width: 75px;
  height: 75px;
  padding-bottom: 40px;
`;

export const Temp = styled.Text`
  font-size: 45px;
  font-weight: 100;
  color: #bae8e8;
`;
export const Description = styled.Text`
  font-size: 20px;
  font-weight: 100;
  color: #bae8e8;
  padding-top: 20px;
`;

export const Week = styled.View`
  flex: 1;
  top: 340px;
  left: 0;
  width: 100%;
  height: 150px;
  position: absolute;
  justify-content: center;
 
`;

export const Day = styled.View`
  flexDirection: row;
  position: relative;
  justify-content: space-around;
  height: auto;
  margin-top: 12px;
  margin-bottom: 12px;
`;

export const SmallIcon = styled.Image`
  width: 20px;
  height: 20px;
`;

export const SmallText = styled.Text`
  font-size: 20px;
  font-weight: 300;
  color: white;
`;
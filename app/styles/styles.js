import styled from "styled-components/native";
import { Platform, StatusBar } from 'react-native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #272343;
  width: 100%;
  padding-top: ${Platform.OS === 'android' ? StatusBar.currentHeight + 10 + "px" : 0};
`;

export const ContainerSearch = styled.View`
  flexDirection: row;
  justifyContent: space-between;
  margin-left: 25px;
  margin-right: 25px;
`;

export const ContainerLoading = styled.View`
  flex: 1;
  justifyContent: center;
  alignItems: center;
  background-color: #272343;
`;

export const Loading = styled.Text` 
  font-size: 20px;
  font-weight: 100;
  color: white;
`;

export const CurrentDay = styled.View`
  flex: 1;
  position: relative;
  align-items: center;
`;

export const City = styled.Text`
  font-size: 22px;
  font-weight: 200;
  color: white;
  padding-bottom: 10px;
`;

export const BigIcon = styled.Image`
  width: 60px;
  height: 60px;
  margin-bottom: 14px;
`;

export const Temp = styled.Text`
  font-size: 32px;
  font-weight: 100;
  color: #bae8e8;
  padding-bottom: 8px;
`;

export const TempMinMax = styled.Text`
  font-size: 15px;
  color: #bae8e8;
`;

export const Description = styled.Text`
  font-size: 15px;
  color: #bae8e8;
  padding-top: 20px;
`;

export const Week = styled.View`
  flex: 1;
  top: 345px;
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
  width: 12px;
  height: 12px;
`;

export const SmallText = styled.Text`
  font-size: 12px;
  font-weight: 100;
  color: white;
`;


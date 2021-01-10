import React, {Component} from 'react';
import { StyleSheet, View, Image, Text, Card } from 'react-native';

function ForecastCard({props}) {
    
    return (
        <Card style={styles.card}>
            <Text> {props.location} </Text>
        </Card>
      );
}

export default ForecastCard;

const styles = StyleSheet.create({
    card:{
        backgroundColor:'rgba(56, 172, 236, 1)',
        borderWidth:0,
        borderRadius:20
    },
    notes: {

    }
});
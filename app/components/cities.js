import React from "react";
import { ListItem } from 'react-native-elements'
import { Container} from "../styles/styles";

import { cities } from './../shared/cities-list';


const Cities = ({navigation}) => {

    return (
        <Container>
            {
                cities.list.map((l, i) => (
                <ListItem key={i} bottomDivider 
                    onPress={() => navigation.navigate('Weather', {
                        city: l.name,
                        lat: l.coordinates.lat,
                        lon: l.coordinates.lon
                      })
                    }>
                    <ListItem.Content>
                        <ListItem.Title>{l.name}</ListItem.Title>
                    </ListItem.Content>
                </ListItem>
                ))
            }
        </Container>
    )

}
export default Cities;
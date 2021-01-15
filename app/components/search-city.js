import React from "react";
import { Icon } from 'react-native-elements'

const SearchCity = ({navigation}) => {

    return (
        <Icon
            size={20}
            color="white"
            name='search'
            type='font-awesome'         
            onPress={() => navigation.navigate('Cities')} 
        />
    )

}
export default SearchCity;
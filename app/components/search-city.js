import React from "react";
import { Icon } from 'react-native-elements'

const SearchCity = ({props}) => {

    return (
        <Icon
            raised
            name='search'
            type='font-awesome'
            color='#f50'
            onPress={() => console.log('hello')} 
        />
    )

}
export default SearchCity;
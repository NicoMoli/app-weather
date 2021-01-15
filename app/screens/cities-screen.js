import React from 'react';
import { StyleSheet, View } from 'react-native';

import Cities from '../components/cities';

function CitiesScreen({navigation}) {

    return (
		<View style={styles.container}>
			<Cities navigation={navigation}/>
		</View>	
	);
}

const styles = StyleSheet.create({
    container: {
		alignItems: 'center',
    	flex: 1,
    	justifyContent: 'center'
	}
});

export default CitiesScreen;
import React from 'react'
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native'
import { useRoute } from '@react-navigation/native'
export default function Start({ navigation }) {

	const route = useRoute()
	const params = route.params

	return (
		<View style={styles.container}>
			<View style={styles.iris}>
				<Text>IRIS</Text>
			</View>
			<View stryle={styles.welcomeArea}>
				<Text style={styles.welcome}>Bem vindo!</Text>
				<Text style={styles.welcomeSubtitle}> Lorem ipsum dolor sit amet, consectur adispicing elit.</Text>
			</View>
			<TouchableOpacity style={styles.startArea} onPress={() => navigation.navigate('Home')}>
				<View style={styles.start}>
						<Text style={styles.startText}>
							Começar
						</Text>
				</View>
			</TouchableOpacity>
		</View>
	)
}


const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column',
		backgroundColor: '#fff',
	},
	iris: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	welcome: {
		fontSize: 30,
		margin: 10,
		fontWeight: 'bold',
		color: '#000',
		justifyContent: 'center',
		alignItems: 'center',
	},
	welcomeArea: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	welcomeSubtitle: {

	},
	startArea: {
		flex: 1,
		alignItems: 'flex-end',
		justifyContent: 'flex-end',
		padding: 10,
	},
	start: {
		width: 130,
		height: 130,
		borderRadius: 65,

		justifyContent: 'center',
		alignItems: 'center',
		padding: 30,

		backgroundColor: '#000'
	},
	startText: {
		color: '#fff',
	}
});

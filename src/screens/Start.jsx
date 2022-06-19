import React from 'react'
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native'

export default function Start({ navigation }) {

	return (
		<View style={styles.container}>
				<View style={styles.iris}>
					<Text>IRIS</Text>
				</View>
				<View style={styles.welcomeArea}>
					<Text style={styles.welcome}>Bem vindo!</Text>
					<Text style={styles.welcomeSubtitle}> Lorem ipsum dolor sit amet, consectur adispicing elit.</Text>
				</View>
				<View style={styles.startArea}>
					<TouchableOpacity style={styles.start} onPress={() => navigation.navigate('Home')}>
						<Text style={styles.startText}>
							Começar
						</Text>
					</TouchableOpacity>
				</View>
		</View>
	)
}


const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column',
	},
	iris: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		justifyContent: 'center',
	},
	welcome: {
		fontSize: 30,
		margin: 10,
		fontWeight: 'bold',
		color: '#000',
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

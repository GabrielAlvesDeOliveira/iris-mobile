import { Text, TouchableHighlight, View } from "react-native";
import Icon from 'react-native-vector-icons/AntDesign'

import styles from "./styles";

const Header = ({ path, navigation }) => {
    return (
        <View style={styles.header}>
            <TouchableHighlight
                style={styles.button}
                onPress={() =>
                    navigation.navigate(path, { })
                }
            >
                <View style={styles.buttonContent}>
                    <Icon name='arrowleft' color={'black'} size={30} />
                    <Text style={styles.headerText}>
                        Voltar
                    </Text>
                </View>
            </TouchableHighlight>
        </View>
    );
}

export default Header;
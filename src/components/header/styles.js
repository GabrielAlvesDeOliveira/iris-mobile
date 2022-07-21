import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    header: {
        top: 0,
        flex: 1,
        height: 80,
        zIndex: 100,
        width: '100%',
        position: 'absolute',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 29,
        backgroundColor: 'white',
    },
    headerText: {
        fontSize: 18,
        marginLeft: 12
    },
    button: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    buttonContent: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
    },
});

export default styles;
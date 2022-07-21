import { StyleSheet, StatusBar } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: StatusBar.height
    },
    screenBody: {
        top: 80,
        flex: 1,
        paddingBottom: 28,
        paddingHorizontal: 29,
        backgroundColor: 'white'
    },
    imageLabelled: {
        width: '100%',
        height: 400,
        borderRadius: 20,
        marginBottom: 36
    },
    screenTitle: {
        fontSize: 24,
        fontWeight: '700',
    },
    sectionHeader: {
        fontSize: 18,
        fontWeight: '800',
        marginBottom: 18,
        marginTop: 18
    },
    scrollEl: {
        flex: 1,
    }
})

export default styles;
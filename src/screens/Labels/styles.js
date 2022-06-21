import { StyleSheet, StatusBar } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: StatusBar.height
    },
    header: {
        top: 0,
        flex: 1,
        height: 80,
        width: '100%',
        position: 'absolute',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 29,
        backgroundColor: 'white'
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
    screenBody: {
        top: 80,
        flex: 1,
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
        marginBottom: 18
    },
    sectionHeader: {
        fontSize: 18,
        fontWeight: '800',
        marginBottom: 18
    },
    scrollEl: {
        flex: 1
    }
})

export default styles;
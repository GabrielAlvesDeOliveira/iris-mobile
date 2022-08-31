import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    itemWrapper: {
        width: '100%',
        display: 'flex',
        paddingVertical: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottomColor: '#0606104D',
        borderBottomWidth: 1,
    },
    label: {
        fontSize: 18
    },
    percentage: {
        fontSize: 16,
        fontWeight: '800'
    }
})

export default styles;
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    container: {
        width: '90%',
        height: '60%',
        backgroundColor: '#fbfbfb',
        borderColor: '#ebebeb',
        borderWidth: 1,
        marginTop: 10,
    },
    scrollView: {
        display: 'flex',
        flexDirection: 'row',
        overflow: 'hidden',
    },
    bullets: {
        position: 'absolute',
        top: 0,
        right: 0,
        display: 'flex',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        paddingHorizontal: 10,
        paddingTop: 5,
    },
    bullet: {
        paddingHorizontal: 5,
        fontSize: 20,
    }
});

export default styles;
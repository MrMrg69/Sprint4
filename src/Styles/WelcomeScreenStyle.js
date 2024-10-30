import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#222',
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#00E5FF',
        fontFamily: 'PressStart2P-Regular',
        marginBottom: 30,
        textAlign: 'center',
    },
    button: {
        backgroundColor: '#007BFF',
        padding: 12,
        borderRadius: 8,
        alignItems: 'center',
        marginVertical: 10,
        width: 200,
    },
    buttonText: {
        color: '#FFFFFF',
        fontWeight: 'bold',
        fontSize: 16,
        fontFamily: 'PressStart2P-Regular',
    },
    buttonDisabled: {
        backgroundColor: '#A9A9A9',
    },
});

export default styles;

import { StackNavigationProp } from '@react-navigation/stack';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CustomButton from '../components/CustomButton';
import type { RootStackParamList } from '../navigation/AppNavigation';

type WelcomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'WelcomeScreen'>;

const WelcomeScreen = ({ navigation }: { navigation: WelcomeScreenNavigationProp }) => {
    const [isRegistered, setIsRegistered] = useState(false);

    useEffect(() => {
        const checkRegistration = async () => {
            try {
                const isUserRegistered = localStorage.getItem('isRegistered');
                setIsRegistered(isUserRegistered === 'true');
            } catch (error) {
                console.error('Failed to check registration status:', error);
            }
        };

        const unsubscribe = navigation.addListener('focus', () => {
            checkRegistration();
        });

        checkRegistration();

        return unsubscribe;
    }, [navigation]);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Bem-vindo ao App de Franquias!</Text>
            <CustomButton title="Sign In" onPress={() => navigation.navigate('SignIn')} />
            <CustomButton title="Log In" onPress={() => navigation.navigate('LogIn')} disabled={!isRegistered} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#222',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#FFF',
        marginBottom: 20,
    },
});

export default WelcomeScreen;

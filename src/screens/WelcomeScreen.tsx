import { StackNavigationProp } from '@react-navigation/stack';
import React, { useEffect, useState } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import type { RootStackParamList } from '../navigation/AppNavigation';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from '../Styles/WelcomeScreenStyle';

type WelcomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'WelcomeScreen'>;

const WelcomeScreen = ({ navigation }: { navigation: WelcomeScreenNavigationProp }) => {
    const [isRegistered, setIsRegistered] = useState(false);

    useEffect(() => {
        const checkRegistration = async () => {
            try {
                const isUserRegistered = await AsyncStorage.getItem('isRegistered');
                setIsRegistered(isUserRegistered === 'true');
            } catch (error) {
                console.error('Falha ao verificar o status do registro:', error);
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
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('SignIn')}
            >
                <Text style={styles.buttonText}>Sign In</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={[styles.button, !isRegistered ? styles.buttonDisabled : null]}
                onPress={() => navigation.navigate('LogIn')}
                disabled={!isRegistered}
            >
                <Text style={styles.buttonText}>Log In</Text>
            </TouchableOpacity>
        </View>
    );
};

export default WelcomeScreen;

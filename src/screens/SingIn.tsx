import { StackNavigationProp } from '@react-navigation/stack';
import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import CustomButton from '../components/CustomButton';
import type { RootStackParamList } from '../navigation/AppNavigation';

type SignInNavigationProp = StackNavigationProp<RootStackParamList, 'SignIn'>;

const SignIn = ({ navigation }: { navigation: SignInNavigationProp }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Cadastro</Text>
            <TextInput
                placeholder="Usuário"
                value={username}
                onChangeText={setUsername}
                style={styles.input}
            />
            <TextInput
                placeholder="Senha"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
                style={styles.input}
            />
            <CustomButton
                title="Cadastrar"
                onPress={async () => {
                    try {
                        localStorage.setItem('isRegistered', 'true');
                        navigation.navigate('WelcomeScreen');
                    } catch (error) {
                        console.error('Failed to save registration status:', error);
                    }
                }}
            />
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
    input: {
        width: '80%',
        padding: 10,
        borderWidth: 1,
        borderColor: '#FFF',
        backgroundColor: '#333',
        color: '#FFF',
        marginBottom: 10,
    },
});

export default SignIn;

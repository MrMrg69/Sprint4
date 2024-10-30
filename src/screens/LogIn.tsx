import { StackNavigationProp } from '@react-navigation/stack';
import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import CustomButton from '../components/CustomButton';
import type { RootStackParamList } from '../navigation/AppNavigation';

type LogInNavigationProp = StackNavigationProp<RootStackParamList, 'LogIn'>;

const LogIn = ({ navigation }: { navigation: LogInNavigationProp }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Login</Text>
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
                title="Entrar"
                onPress={async () => {
                    try {
                        const isUserRegistered = localStorage.getItem('isRegistered');
                        if (isUserRegistered === 'true') {
                            navigation.navigate('ListaFranquias');
                        } else {
                            alert('Usuário não cadastrado. Por favor, faça o cadastro antes de fazer login.');
                            navigation.navigate('SignIn');
                        }
                    } catch (error) {
                        console.error('Failed to check registration status:', error);
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

export default LogIn;
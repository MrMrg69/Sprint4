import { StackNavigationProp } from '@react-navigation/stack';
import React, { useState, useCallback } from 'react';
import { Text, TextInput, View, TouchableOpacity } from 'react-native';
import type { RootStackParamList } from '../navigation/AppNavigation';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';
import styles from '../Styles/LogInStyle';

type LogInNavigationProp = StackNavigationProp<RootStackParamList, 'LogIn'>;

const LogIn = ({ navigation }: { navigation: LogInNavigationProp }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    // Limpar campos ao entrar na tela
    useFocusEffect(
        useCallback(() => {
            setUsername('');
            setPassword('');
        }, [])
    );

    const handleLogin = async () => {
        try {
            if (username.trim() === '' || password.trim() === '') {
                alert('Por favor, preencha todos os campos.');
                return;
            }

            const usersJSON = await AsyncStorage.getItem('users');
            const users = usersJSON ? JSON.parse(usersJSON) : {};

            if (users[username] && users[username] === password) {
                setUsername('');
                setPassword('');
                navigation.navigate('ListaFranquias');
            } else if (users[username] && users[username] !== password) {
                alert('Senha incorreta. Por favor, tente novamente.');
            } else {
                alert('Usuário não cadastrado. Por favor, faça o cadastro.');
                navigation.navigate('SignIn');
            }
        } catch (error) {
            console.error('Falha ao verificar o status do registro:', error);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Login</Text>
            <TextInput
                placeholder="Usuário"
                value={username}
                onChangeText={setUsername}
                style={styles.input}
                placeholderTextColor="#AAA"
            />
            <TextInput
                placeholder="Senha"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
                style={styles.input}
                placeholderTextColor="#AAA"
            />
            <TouchableOpacity style={styles.button} onPress={handleLogin}>
                <Text style={styles.buttonText}>Entrar</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.buttonBack}
                onPress={() => {
                    setUsername('');
                    setPassword('');
                    navigation.goBack();
                }}
            >
                <Text style={styles.buttonText}>Voltar</Text>
            </TouchableOpacity>
        </View>
    );
};

export default LogIn;

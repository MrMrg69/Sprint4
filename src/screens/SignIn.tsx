import { StackNavigationProp } from '@react-navigation/stack';
import React, { useState, useCallback } from 'react';
import { Text, TextInput, View, TouchableOpacity } from 'react-native';
import type { RootStackParamList } from '../navigation/AppNavigation';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';
import styles from '../Styles/SignInStyle';

type SignInNavigationProp = StackNavigationProp<RootStackParamList, 'SignIn'>;

const SignIn = ({ navigation }: { navigation: SignInNavigationProp }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    // Limpar campos ao entrar na tela
    useFocusEffect(
        useCallback(() => {
            setUsername('');
            setPassword('');
        }, [])
    );

    const handleRegister = async () => {
        try {
            if (username.trim() === '' || password.trim() === '') {
                alert('Por favor, preencha todos os campos.');
                return;
            }

            const usersJSON = await AsyncStorage.getItem('users');
            const users = usersJSON ? JSON.parse(usersJSON) : {};

            if (users[username]) {
                alert('Este usuário já foi cadastrado. Por favor, escolha um nome diferente.');
                return;
            }

            users[username] = password;

            await AsyncStorage.setItem('users', JSON.stringify(users));

            alert('Usuário cadastrado com sucesso');
            setUsername('');
            setPassword('');
            navigation.navigate('WelcomeScreen');
        } catch (error) {
            console.error('Falha ao salvar o status do registro:', error);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Cadastro</Text>
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
            <TouchableOpacity style={styles.button} onPress={handleRegister}>
                <Text style={styles.buttonText}>Cadastrar</Text>
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

export default SignIn;

import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

import { StackNavigationProp } from '@react-navigation/stack';
import type { RootStackParamList } from '../navigation/AppNavigation';

type ListaJogosNavigationProp = StackNavigationProp<RootStackParamList, 'ListaJogos'>;

const jogos = [
    { id: '1', nome: 'Jogo 1' },
    { id: '2', nome: 'Jogo 2' },
    { id: '3', nome: 'Jogo 3' },
];

const ListaJogos = ({ navigation }: { navigation: ListaJogosNavigationProp }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Lista de Jogos</Text>
            <FlatList
                data={jogos}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => <Text style={styles.item}>{item.nome}</Text>}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    item: {
        fontSize: 18,
        padding: 10,
        borderBottomWidth: 1,
    },
});

export default ListaJogos;
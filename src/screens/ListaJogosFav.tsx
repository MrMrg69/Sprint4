import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

import { StackNavigationProp } from '@react-navigation/stack';
import type { RootStackParamList } from '../navigation/AppNavigation';

type ListaJogosFavNavigationProp = StackNavigationProp<RootStackParamList, 'ListaJogosFav'>;

const jogosFavoritos = [
    { id: '1', nome: 'Jogo Favorito 1' },
    { id: '2', nome: 'Jogo Favorito 2' },
];

const ListaJogosFav = ({ navigation }: { navigation: ListaJogosFavNavigationProp }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Jogos Favoritos</Text>
            <FlatList
                data={jogosFavoritos}
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

export default ListaJogosFav;
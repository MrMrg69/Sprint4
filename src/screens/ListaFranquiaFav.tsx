import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

import { StackNavigationProp } from '@react-navigation/stack';
import type { RootStackParamList } from '../navigation/AppNavigation';

type ListaFranquiaFavNavigationProp = StackNavigationProp<RootStackParamList, 'ListaFranquiaFav'>;

const franquiasFavoritas = [
    { id: '1', nome: 'Franquia Favorita 1' },
    { id: '2', nome: 'Franquia Favorita 2' },
];

const ListaFranquiaFav = ({ navigation }: { navigation: ListaFranquiaFavNavigationProp }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Franquias Favoritas</Text>
            <FlatList
                data={franquiasFavoritas}
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

export default ListaFranquiaFav;
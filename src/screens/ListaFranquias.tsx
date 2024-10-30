import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

import { StackNavigationProp } from '@react-navigation/stack';
import type { RootStackParamList } from '../navigation/AppNavigation';

type ListaFranquiasNavigationProp = StackNavigationProp<RootStackParamList, 'ListaFranquias'>;

const franquias = [
    { id: '1', nome: 'Franquia 1' },
    { id: '2', nome: 'Franquia 2' },
    { id: '3', nome: 'Franquia 3' },
];

const ListaFranquias = ({ navigation }: { navigation: ListaFranquiasNavigationProp }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Lista de Franquias</Text>
            <FlatList
                data={franquias}
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

export default ListaFranquias;
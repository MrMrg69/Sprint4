import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from '../Styles/ListaFranquiasStyles';
import { Franquia } from './ListaFranquias';

type ListaFranquiaFavProps = {
  franquias: Franquia[];
  toggleFavorito: (id: string) => void;
};

const ListaFranquiaFav = ({ franquias, toggleFavorito }: ListaFranquiaFavProps) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={franquias}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Text style={styles.item}>{item.nome}</Text>
            <TouchableOpacity onPress={() => toggleFavorito(item.id)}>
              <Icon
                name={item.favorito ? 'star' : 'star-border'}
                size={24}
                color={item.favorito ? '#FFD700' : '#FFF'}
                style={{ marginHorizontal: 5 }}
              />
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

export default ListaFranquiaFav;

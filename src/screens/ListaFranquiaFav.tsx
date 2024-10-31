import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from '../Styles/ListaFranquiaFavStyle';
import { Franquia, useFranquias } from '../navigation/FranquiasContext';

const ListaFranquiaFav = () => {
  const { franquias, toggleFavorito } = useFranquias();
  const franquiasFavoritas = franquias.filter((franquia) => franquia.favorito);

  const getFranquiaDescription = (nome: string) => {
    switch (nome) {
      case "Assassin's Creed":
        return "Assassin's Creed é uma série de jogos de ação e aventura com elementos de stealth, criada pela Ubisoft. A série acompanha a luta entre Assassinos e Templários ao longo da história.";
      case "BioShock":
        return "BioShock é uma série de jogos de tiro em primeira pessoa com temas de filosofia e moralidade, criada pela 2K Games. A série explora sociedades utópicas distópicas submersas e futurísticas.";
      case "Amnesia":
        return "Amnesia é uma série de jogos de horror de sobrevivência, criada pela Frictional Games. Conhecida por sua atmosfera aterrorizante e mecânicas de perda de memória.";
      default:
        return null;
    }
  };

  return (
    <View style={styles.container}>
      {franquiasFavoritas.length > 0 ? (
        <FlatList
          data={franquiasFavoritas}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.itemContainer}>
              <View style={styles.titleContainer}>
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
              {getFranquiaDescription(item.nome) && (
                <Text style={styles.description}>{getFranquiaDescription(item.nome)}</Text>
              )}
              <View style={styles.divider} />
            </View>
          )}
        />
      ) : (
        <Text style={styles.item}>Nenhuma franquia favoritada</Text>
      )}
    </View>
  );
};

export default ListaFranquiaFav;

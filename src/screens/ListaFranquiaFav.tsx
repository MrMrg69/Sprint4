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
        return "Assassin's Creed é uma franquia de jogos de ação e aventura criada pela Ubisoft. O conceito central de Assassin's Creed gira em torno de uma batalha entre duas facções milenares: os Assassinos e os Templários. Os Assassinos, inspirados em uma antiga ordem real, defendem o livre-arbítrio e lutam contra a opressão. Os Templários, por outro lado, acreditam que a ordem e o controle são necessários para alcançar a paz, o que frequentemente os leva a agir de maneira autoritária. Ambos os lados buscam artefatos conhecidos como Pedaços do Éden, relíquias poderosas deixadas por uma civilização ancestral chamada Isu, que têm o poder de controlar a mente humana.";
      case "BioShock":
        return "A franquia BioShock, desenvolvida pela Irrational Games e lançada pela primeira vez em 2007, é uma das séries mais influentes dos jogos modernos, conhecida por sua mistura única de narrativa profunda, exploração de temas filosóficos e jogabilidade inovadora. A série se passa em locais fictícios e distópicos, como a cidade submersa de Rapture e a cidade flutuante de Columbia, e explora ideias de utopias corrompidas, livre-arbítrio, identidade e moralidade.";
      case "Amnesia":
        return "A franquia Amnesia, desenvolvida pela Frictional Games, tem a premissa central de Amnesia está na vulnerabilidade do jogador. Diferente de outros jogos de terror onde é possível lutar contra os inimigos, Amnesia força o jogador a se esconder, fugir e usar o ambiente para se proteger. Isso cria uma sensação constante de impotência e tensão, onde o medo vem não apenas das criaturas e do ambiente sombrio, mas também das próprias limitações do jogador.";
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
                <Text style={styles.descriptionText}>{getFranquiaDescription(item.nome)}</Text>
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

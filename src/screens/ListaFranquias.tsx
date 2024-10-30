import React, { useState, useLayoutEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, Modal, TextInput, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { DrawerActions } from '@react-navigation/native';
import type { RootStackParamList } from '../navigation/AppNavigation';
import { StackNavigationProp } from '@react-navigation/stack';
import styles from '../Styles/ListaFranquiasStyles';

// Definindo o tipo da prop de navegação
type ListaFranquiasNavigationProp = StackNavigationProp<RootStackParamList, 'ListaFranquias'>;

// Definindo o tipo da franquia
type Franquia = {
  id: string;
  nome: string;
  favorito: boolean;
};

const ListaFranquias = ({ navigation }: { navigation: ListaFranquiasNavigationProp }) => {
  const [showModal, setShowModal] = useState(true);
  const [showAddModal, setShowAddModal] = useState(false);
  const [franquiaNome, setFranquiaNome] = useState('');
  const [franquias, setFranquias] = useState<Franquia[]>([]);
  const [errorMessage, setErrorMessage] = useState('');

  const addFranquia = () => {
    if (franquiaNome.trim()) {
      setFranquias((prevFranquias) => [...prevFranquias, { id: Math.random().toString(), nome: franquiaNome, favorito: false }]);
      setFranquiaNome('');
      setShowAddModal(false);
      setErrorMessage('');
    } else {
      setErrorMessage('Por favor, insira o nome da franquia.');
    }
  };

  const deleteFranquia = (id: string) => {
    Alert.alert(
      'Deletar Franquia',
      'Você tem certeza que deseja deletar esta franquia?',
      [
        { text: 'Cancelar', style: 'cancel' },
        {
          text: 'Deletar',
          style: 'destructive',
          onPress: () => {
            setFranquias((prevFranquias) => prevFranquias.filter((franquia) => franquia.id !== id));
          },
        },
      ]
    );
  };

  const toggleFavorito = (id: string) => {
    setFranquias((prevFranquias) =>
      prevFranquias.map((franquia) =>
        franquia.id === id ? { ...franquia, favorito: !franquia.favorito } : franquia
      )
    );
  };

  const renameFranquia = (id: string) => {
    Alert.prompt(
      'Renomear Franquia',
      'Digite o novo nome da franquia:',
      [
        {
          text: 'Cancelar',
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: (novoNome) => {
            if (novoNome) {
              setFranquias((prevFranquias) =>
                prevFranquias.map((franquia) =>
                  franquia.id === id ? { ...franquia, nome: novoNome } : franquia
                )
              );
            }
          },
        },
      ],
      'plain-text'
    );
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}>
          <Icon name="menu" size={32} color="#000" style={{ marginLeft: 16 }} />
        </TouchableOpacity>
      ),
      headerRight: () => (
        <TouchableOpacity onPress={() => setShowAddModal(true)}>
          <Icon name="add" size={32} color="#000" style={{ marginRight: 16 }} />
        </TouchableOpacity>
      ),
      headerTitleAlign: 'center',
      headerTitle: 'Lista Franquias',
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      {showModal && (
        <View style={styles.modalContainer}>
          <Text style={styles.modalText}>Aviso: O aplicativo atualmente possui apenas informações das franquias "Assassin's Creed", "BioShock" e "Amnesia".</Text>
          <TouchableOpacity onPress={() => setShowModal(false)} style={[styles.closeButton, { position: 'absolute', top: -10, right: -10 }]}>
            <Icon name="close" size={20} color="#FF6347" style={{ padding: 5, backgroundColor: 'rgba(0, 0, 0, 0.5)', borderRadius: 12 }} />
          </TouchableOpacity>
        </View>
      )}
      <FlatList
        data={franquias}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Text style={styles.item}>{item.nome}</Text>
            <View style={styles.iconContainer}>
              <TouchableOpacity onPress={() => toggleFavorito(item.id)}>
                <Icon
                  name={item.favorito ? 'star' : 'star-border'}
                  size={24}
                  color={item.favorito ? '#FFD700' : '#FFF'}
                  style={{ marginHorizontal: 5 }}
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => deleteFranquia(item.id)}>
                <Icon name="delete" size={24} color="#FF6347" style={{ marginHorizontal: 5 }} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => renameFranquia(item.id)}>
                <Icon name="edit" size={24} color="#00E5FF" style={{ marginHorizontal: 5 }} />
              </TouchableOpacity>
            </View>
          </View>
        )}
      />

      <Modal visible={showAddModal} animationType="slide" transparent={true}>
        <View style={styles.modalBackground}>
          <View style={styles.addModalContainerGamer}>
            <Text style={styles.modalTitleGamer}>Adicionar Franquia</Text>
            <TextInput
              style={styles.inputGamer}
              placeholder="Nome da franquia"
              placeholderTextColor="#AAA"
              value={franquiaNome}
              onChangeText={(text) => setFranquiaNome(text)}
            />
            {errorMessage ? <Text style={{ color: 'red', marginBottom: 10 }}>{errorMessage}</Text> : null}
            <TouchableOpacity style={styles.addButtonGamer} onPress={addFranquia}>
              <Text style={styles.addButtonTextGamer}>Adicionar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.cancelButtonGamer} onPress={() => setShowAddModal(false)}>
              <Text style={styles.cancelButtonTextGamer}>Cancelar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default ListaFranquias;

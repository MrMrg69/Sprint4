import React, { useState, useLayoutEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, Modal, TextInput, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { DrawerActions } from '@react-navigation/native';
import { useFranquias } from '../navigation/FranquiasContext';
import type { RootStackParamList } from '../navigation/AppNavigation';
import { StackNavigationProp } from '@react-navigation/stack';
import styles from '../Styles/ListaFranquiasStyles';

// Definindo o tipo da prop de navegação
type ListaFranquiasNavigationProp = StackNavigationProp<RootStackParamList, 'ListaFranquias'>;

const ListaFranquias = ({ navigation }: { navigation: ListaFranquiasNavigationProp }) => {
  const { franquias, setFranquias } = useFranquias();
  const [showModal, setShowModal] = useState(true);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showRenameModal, setShowRenameModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [franquiaNome, setFranquiaNome] = useState('');
  const [currentFranquiaId, setCurrentFranquiaId] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState('');

  const addFranquia = () => {
    if (franquiaNome.trim()) {
      const isDuplicated = franquias.some((franquia) => franquia.nome.toLowerCase() === franquiaNome.toLowerCase());
      if (isDuplicated) {
        setErrorMessage('Já existe uma franquia com esse nome.');
      } else {
        setFranquias((prevFranquias) => [
          ...prevFranquias,
          { id: Math.random().toString(), nome: franquiaNome, favorito: false },
        ]);
        setFranquiaNome('');
        setShowAddModal(false);
        setErrorMessage('');
      }
    } else {
      setErrorMessage('Por favor, insira o nome da franquia.');
    }
  };

  const openDeleteModal = (id: string) => {
    setCurrentFranquiaId(id);
    setShowDeleteModal(true);
  };

  const deleteFranquia = () => {
    if (currentFranquiaId) {
      setFranquias((prevFranquias) => prevFranquias.filter((franquia) => franquia.id !== currentFranquiaId));
      setShowDeleteModal(false);
      setCurrentFranquiaId(null);
    }
  };

  const toggleFavorito = (id: string) => {
    setFranquias((prevFranquias) =>
      prevFranquias.map((franquia) =>
        franquia.id === id ? { ...franquia, favorito: !franquia.favorito } : franquia
      )
    );
  };

  const renameFranquia = () => {
    if (franquiaNome.trim()) {
      const isDuplicated = franquias.some(
        (franquia) =>
          franquia.nome.toLowerCase() === franquiaNome.toLowerCase() && franquia.id !== currentFranquiaId
      );
      if (isDuplicated) {
        setErrorMessage('Já existe uma franquia com esse nome.');
      } else {
        setFranquias((prevFranquias) =>
          prevFranquias.map((franquia) =>
            franquia.id === currentFranquiaId ? { ...franquia, nome: franquiaNome } : franquia
          )
        );
        setFranquiaNome('');
        setShowRenameModal(false);
        setErrorMessage('');
      }
    } else {
      setErrorMessage('Por favor, insira o nome da franquia.');
    }
  };

  const openRenameModal = (id: string, nome: string) => {
    setCurrentFranquiaId(id);
    setFranquiaNome(nome);
    setShowRenameModal(true);
    setErrorMessage('');
  };

  const closeRenameModal = () => {
    setFranquiaNome('');
    setShowRenameModal(false);
    setErrorMessage('');
  };

  const closeAddModal = () => {
    setFranquiaNome('');
    setShowAddModal(false);
    setErrorMessage('');
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}>
          <Icon name="menu" size={32} color="#555" style={{ marginLeft: 16 }} />
        </TouchableOpacity>
      ),
      headerRight: () => (
        <TouchableOpacity onPress={() => setShowAddModal(true)}>
          <Icon name="add" size={32} color="#555" style={{ marginRight: 16 }} />
        </TouchableOpacity>
      ),
      headerTitleAlign: 'center',
      headerTitle: 'Lista Franquias',
      headerStyle: {
        backgroundColor: '#222',
        elevation: 0,
        shadowOpacity: 0,
      },
      headerTitleStyle: {
        color: '#00E5FF',
        fontFamily: 'PressStart2P-Regular',
      },
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      {showModal && (
        <View style={styles.modalContainer}>
          <Text style={styles.modalText}>
            Aviso: O aplicativo atualmente possui apenas informações das franquias "Assassin's Creed", "BioShock" e
            "Amnesia".
          </Text>
          <TouchableOpacity
            onPress={() => setShowModal(false)}
            style={[styles.closeButton, { position: 'absolute', top: -10, right: -10 }]}
          >
            <Icon
              name="close"
              size={20}
              color="#FF6347"
              style={{ padding: 5, backgroundColor: 'rgba(0, 0, 0, 0.5)', borderRadius: 12 }}
            />
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
              <TouchableOpacity onPress={() => openDeleteModal(item.id)}>
                <Icon name="delete" size={24} color="#FF6347" style={{ marginHorizontal: 5 }} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => openRenameModal(item.id, item.nome)}>
                <Icon name="edit" size={24} color="#00E5FF" style={{ marginHorizontal: 5 }} />
              </TouchableOpacity>
            </View>
          </View>
        )}
      />

      {/* Modal para Adicionar Franquia */}
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
            <TouchableOpacity style={styles.cancelButtonGamer} onPress={closeAddModal}>
              <Text style={styles.cancelButtonTextGamer}>Cancelar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* Modal para Renomear Franquia */}
      <Modal visible={showRenameModal} animationType="slide" transparent={true}>
        <View style={styles.modalBackground}>
          <View style={styles.addModalContainerGamer}>
            <Text style={styles.modalTitleGamer}>Renomear Franquia</Text>
            <TextInput
              style={styles.inputGamer}
              placeholder="Nome da franquia"
              placeholderTextColor="#AAA"
              value={franquiaNome}
              onChangeText={(text) => setFranquiaNome(text)}
            />
            {errorMessage ? <Text style={{ color: 'red', marginBottom: 10 }}>{errorMessage}</Text> : null}
            <TouchableOpacity style={styles.addButtonGamer} onPress={renameFranquia}>
              <Text style={styles.addButtonTextGamer}>Renomear</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.cancelButtonGamer} onPress={closeRenameModal}>
              <Text style={styles.cancelButtonTextGamer}>Cancelar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* Modal para Confirmar Exclusão */}
      <Modal visible={showDeleteModal} animationType="fade" transparent={true}>
        <View style={styles.modalBackground}>
          <View style={styles.addModalContainerGamer}>
            <Text style={styles.modalTitleGamer}>Confirmar Exclusão</Text>
            <Text style={{ color: '#FFF', marginBottom: 20 }}>
              Você tem certeza que deseja excluir esta franquia?
            </Text>
            <TouchableOpacity style={styles.addButtonGamer} onPress={deleteFranquia}>
              <Text style={styles.addButtonTextGamer}>Excluir</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.cancelButtonGamer} onPress={() => setShowDeleteModal(false)}>
              <Text style={styles.cancelButtonTextGamer}>Cancelar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default ListaFranquias;

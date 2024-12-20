import React, { useState, useLayoutEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, Modal, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { DrawerActions } from '@react-navigation/native';
import { useJogos } from '../navigation/JogosContext';
import styles from '../Styles/ListaJogosStyle';
import { DrawerScreenProps } from '@react-navigation/drawer';
import { RootStackParamList } from '../navigation/types';

type ListaJogosProps = DrawerScreenProps<RootStackParamList, 'ListaJogos'>;

const ListaJogos = ({ navigation }: ListaJogosProps) => {
  const { jogos, setJogos, toggleFavorito } = useJogos();
  const [showAddModal, setShowAddModal] = useState(false);
  const [showRenameModal, setShowRenameModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [jogoNome, setJogoNome] = useState('');
  const [currentJogoId, setCurrentJogoId] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState('');
  const [showWarning, setShowWarning] = useState(true); // Aviso de franquias disponíveis

  const addJogo = () => {
    if (jogoNome.trim()) {
      const isDuplicated = jogos.some((jogo) => jogo.nome.toLowerCase() === jogoNome.toLowerCase());
      if (isDuplicated) {
        setErrorMessage('Já existe um jogo com esse nome.');
      } else {
        setJogos((prevJogos) => [
          ...prevJogos,
          { id: Math.random().toString(), nome: jogoNome, favorito: false },
        ]);
        setJogoNome('');
        setShowAddModal(false);
        setErrorMessage('');
      }
    } else {
      setErrorMessage('Por favor, insira o nome do jogo.');
    }
  };

  const openRenameModal = (id: string, nome: string) => {
    setCurrentJogoId(id);
    setJogoNome(nome);
    setShowRenameModal(true);
    setErrorMessage('');
  };

  const renameJogo = () => {
    if (jogoNome.trim()) {
      const isDuplicated = jogos.some(
        (jogo) =>
          jogo.nome.toLowerCase() === jogoNome.toLowerCase() && jogo.id !== currentJogoId
      );
      if (isDuplicated) {
        setErrorMessage('Já existe um jogo com esse nome.');
      } else {
        setJogos((prevJogos) =>
          prevJogos.map((jogo) =>
            jogo.id === currentJogoId ? { ...jogo, nome: jogoNome } : jogo
          )
        );
        setJogoNome('');
        setShowRenameModal(false);
        setErrorMessage('');
      }
    } else {
      setErrorMessage('Por favor, insira o nome do jogo.');
    }
  };

  const openDeleteModal = (id: string) => {
    setCurrentJogoId(id);
    setShowDeleteModal(true);
  };

  const deleteJogo = () => {
    if (currentJogoId) {
      setJogos((prevJogos) => prevJogos.filter((jogo) => jogo.id !== currentJogoId));
      setShowDeleteModal(false);
      setCurrentJogoId(null);
    }
  };

  const closeAddModal = () => {
    setJogoNome('');
    setShowAddModal(false);
    setErrorMessage('');
  };

  const closeRenameModal = () => {
    setJogoNome('');
    setShowRenameModal(false);
    setErrorMessage('');
  };

  const closeDeleteModal = () => {
    setShowDeleteModal(false);
    setCurrentJogoId(null);
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
      headerTitle: 'Lista Jogos',
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
      {showWarning && (
        <View style={styles.warningContainer}>
          <Text style={styles.warningText}>
            Aviso: O aplicativo atualmente possui apenas informações dos jogos das franquias "Assassin's Creed", "BioShock" e "Amnesia".
          </Text>
          <TouchableOpacity
            onPress={() => setShowWarning(false)}
            style={styles.closeWarningButton}
          >
            <Icon name="close" size={16} color="#FFF" />
          </TouchableOpacity>
        </View>
      )}

      <FlatList
        data={jogos}
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
              <TouchableOpacity onPress={() => openRenameModal(item.id, item.nome)}>
                <Icon name="edit" size={24} color="#00E5FF" style={{ marginHorizontal: 5 }} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => openDeleteModal(item.id)}>
                <Icon name="delete" size={24} color="#FF6347" style={{ marginHorizontal: 5 }} />
              </TouchableOpacity>
            </View>
          </View>
        )}
      />

      {/* Modal para adicionar jogo */}
      <Modal visible={showAddModal} animationType="slide" transparent={true}>
        <View style={styles.modalBackground}>
          <View style={styles.addModalContainer}>
            <Text style={styles.modalTitle}>Adicionar Jogo</Text>
            <TextInput
              style={styles.input}
              placeholder="Nome do jogo"
              placeholderTextColor="#AAA"
              value={jogoNome}
              onChangeText={(text) => setJogoNome(text)}
            />
            {errorMessage ? <Text style={{ color: 'red', marginBottom: 10 }}>{errorMessage}</Text> : null}
            <TouchableOpacity style={styles.addButton} onPress={addJogo}>
              <Text style={styles.addButtonText}>Adicionar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.cancelButton} onPress={closeAddModal}>
              <Text style={styles.cancelButtonText}>Cancelar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* Modal para renomear jogo */}
      <Modal visible={showRenameModal} animationType="slide" transparent={true}>
        <View style={styles.modalBackground}>
          <View style={styles.addModalContainer}>
            <Text style={styles.modalTitle}>Renomear Jogo</Text>
            <TextInput
              style={styles.input}
              placeholder="Nome do jogo"
              placeholderTextColor="#AAA"
              value={jogoNome}
              onChangeText={(text) => setJogoNome(text)}
            />
            {errorMessage ? <Text style={{ color: 'red', marginBottom: 10 }}>{errorMessage}</Text> : null}
            <TouchableOpacity style={styles.addButton} onPress={renameJogo}>
              <Text style={styles.addButtonText}>Renomear</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.cancelButton} onPress={closeRenameModal}>
              <Text style={styles.cancelButtonText}>Cancelar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* Modal para excluir jogo */}
      <Modal visible={showDeleteModal} animationType="fade" transparent={true}>
        <View style={styles.modalBackground}>
          <View style={styles.addModalContainer}>
            <Text style={styles.modalTitle}>Confirmar Exclusão</Text>
            <Text style={styles.modalText}>Você tem certeza que deseja excluir este jogo?</Text>
            <TouchableOpacity style={styles.addButton} onPress={deleteJogo}>
              <Text style={styles.addButtonText}>Excluir</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.cancelButton} onPress={closeDeleteModal}>
              <Text style={styles.cancelButtonText}>Cancelar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default ListaJogos;

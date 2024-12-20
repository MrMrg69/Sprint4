import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#222', // Mesma cor de fundo das outras telas
  },
  modalContainer: {
    backgroundColor: '#3333FF',
    padding: 20,
    borderRadius: 8,
    marginVertical: 20,
    position: 'relative',
    borderWidth: 1,
    borderColor: '#FFA500',
  },
  modalText: {
    color: '#FFF',
    fontSize: 16,
    marginBottom: 10,
    fontFamily: 'PressStart2P-Regular', // Fonte estilo gamer
  },
  closeButton: {
    position: 'absolute',
    top: -10,
    right: -10,
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 18,
    padding: 5,
    backgroundColor: '#FF6347',
    borderRadius: 15,
    elevation: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#00E5FF',
    marginBottom: 20,
    fontFamily: 'PressStart2P-Regular', // Fonte estilo gamer
  },
  item: {
    fontSize: 18,
    color: '#FFF',
    flex: 1,
    flexWrap: 'wrap',
    marginRight: 10,
    maxWidth: '70%',
    fontFamily: 'PressStart2P-Regular', // Fonte estilo gamer
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#555',
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
  },
  addModalContainerGamer: {
    width: '85%',
    backgroundColor: '#1a1a1a',
    padding: 25,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: '#00E5FF',
    elevation: 10,
  },
  modalTitleGamer: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#00E5FF',
    marginBottom: 20,
    textAlign: 'center',
    fontFamily: 'PressStart2P-Regular', // Fonte estilo gamer
  },
  inputGamer: {
    borderWidth: 2,
    borderColor: '#00E5FF',
    padding: 12,
    marginBottom: 20,
    borderRadius: 10,
    color: '#FFF',
    backgroundColor: '#333',
    fontFamily: 'PressStart2P-Regular', // Fonte estilo gamer
  },
  addButtonGamer: {
    backgroundColor: '#00E5FF',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    alignItems: 'center',
    shadowColor: '#00E5FF',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.6,
    shadowRadius: 10,
  },
  addButtonTextGamer: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 16,
    fontFamily: 'PressStart2P-Regular', // Fonte estilo gamer
  },
  cancelButtonGamer: {
    backgroundColor: '#FF0000',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  cancelButtonTextGamer: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 16,
    fontFamily: 'PressStart2P-Regular', // Fonte estilo gamer
  },
  drawerContent: {
    flex: 1,
    backgroundColor: '#1a1a1a',
  },
  drawerItemLabel: {
    color: '#00E5FF',
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'PressStart2P-Regular', // Fonte estilo gamer
  },
  drawerItemIcon: {
    color: '#00E5FF',
  },
});

export default styles;

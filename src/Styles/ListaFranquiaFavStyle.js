import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#222',
  },
  itemContainer: {
    marginBottom: 20,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#555',
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  item: {
    fontSize: 18,
    color: '#FFF',
    fontWeight: 'bold',
    flex: 1,
    flexWrap: 'wrap',
    marginRight: 10,
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  descriptionContainer: {
    backgroundColor: '#333',
    padding: 10,
    borderRadius: 8,
    marginTop: 10,
  },
  descriptionText: {
    color: '#CCCCCC',
    fontSize: 14,
    lineHeight: 20,
  },
  divider: {
    height: 1,
    backgroundColor: '#555',
    marginVertical: 10,
    marginHorizontal: 10,
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
  },
  inputGamer: {
    borderWidth: 2,
    borderColor: '#00E5FF',
    padding: 12,
    marginBottom: 20,
    borderRadius: 10,
    color: '#FFF',
    backgroundColor: '#333',
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
  },
});

export default styles;

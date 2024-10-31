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
  },
  descriptionContainer: {
    backgroundColor: '#333',
    padding: 10,
    borderRadius: 8,
    marginTop: 10,
  },
  descriptionText: {
    fontSize: 14,
    color: '#FFF',
    lineHeight: 20,
  },
  divider: {
    height: 1,
    backgroundColor: '#555',
    marginVertical: 10,
  },
  emptyMessage: {
    color: '#AAA',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 20,
  },
});

export default styles;

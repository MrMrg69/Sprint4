import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#222',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#00E5FF',
    fontFamily: 'PressStart2P-Regular', // Fonte estilo gamer
    marginBottom: 30,
    textAlign: 'center',
  },
  input: {
    width: '80%',
    padding: 10,
    borderWidth: 1,
    borderColor: '#FFF',
    backgroundColor: '#333',
    color: '#FFF',
    marginBottom: 10,
    borderRadius: 8,
  },
  button: {
    backgroundColor: '#007BFF',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginVertical: 10,
    width: 200,
  },
  buttonBack: {
    backgroundColor: '#666',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginVertical: 10,
    width: 200,
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 16,
    fontFamily: 'PressStart2P-Regular', // Fonte estilo gamer
  },
  buttonPressed: {
    backgroundColor: '#39FF14', // Cor neon quando pressionado
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginVertical: 10,
    width: 200,
  },
  buttonHovered: {
    backgroundColor: '#39FF14', // Cor neon quando o mouse está sobre ele
  },
});

export default styles;

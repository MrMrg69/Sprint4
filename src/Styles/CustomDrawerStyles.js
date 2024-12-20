import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
    backgroundColor: '#333',
  },
  drawerItemLabel: {
    color: '#FFF',
  },
  drawerIcon: {
    color: '#FFF',
  },
  drawerItemActiveLabel: {
    color: '#00E5FF',
    fontWeight: 'bold',
  },
  drawerItemActiveIcon: {
    color: '#00E5FF',
  },
  logOutContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    marginLeft: 10,
  },
  logOutButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logOutText: {
    color: '#FF6347',
    fontWeight: 'bold',
    marginLeft: 10,
  },
});

export default styles;

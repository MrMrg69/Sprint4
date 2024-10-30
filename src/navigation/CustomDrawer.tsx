import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from '../Styles/CustomDrawerStyles';
import { DrawerContentComponentProps, DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';

// Custom Drawer Content Component
const CustomDrawerContent = (props: DrawerContentComponentProps) => {
  return (
    <DrawerContentScrollView {...props} contentContainerStyle={styles.drawerContent}>
      <View style={{ flex: 1 }}>
        <DrawerItem
          label="Lista Franquias"
          onPress={() => props.navigation.navigate('ListaFranquias')}
          icon={({ size }) => (
            <Icon name="list" size={size} style={styles.drawerIcon} />
          )}
          labelStyle={styles.drawerItemLabel}
        />
        <DrawerItem
          label="Lista Jogos"
          onPress={() => props.navigation.navigate('ListaJogos')}
          icon={({ size }) => (
            <Icon name="games" size={size} style={styles.drawerIcon} />
          )}
          labelStyle={styles.drawerItemLabel}
        />
        <DrawerItem
          label="Jogos Favoritos"
          onPress={() => props.navigation.navigate('ListaJogosFav')}
          icon={({ size }) => (
            <Icon name="favorite" size={size} style={styles.drawerIcon} />
          )}
          labelStyle={styles.drawerItemLabel}
        />
        <DrawerItem
          label="Franquias Favoritas"
          onPress={() => props.navigation.navigate('ListaFranquiaFav')}
          icon={({ size }) => (
            <Icon name="star" size={size} style={styles.drawerIcon} />
          )}
          labelStyle={styles.drawerItemLabel}
        />
      </View>
      <View style={styles.logOutContainer}>
        <TouchableOpacity onPress={() => props.navigation.navigate('WelcomeScreen')} style={styles.logOutButton}>
          <Icon name="exit-to-app" size={24} style={[styles.drawerIcon, { color: '#FF6347', marginRight: 10 }]} />
          <Text style={styles.logOutText}>Log Out</Text>
        </TouchableOpacity>
      </View>
    </DrawerContentScrollView>
  );
};

export default CustomDrawerContent;

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
          icon={({ color, size }) => (
            <Icon name="list" color={color} size={size} />
          )}
          labelStyle={styles.drawerItemLabel}
        />
        <DrawerItem
          label="Lista Jogos"
          onPress={() => props.navigation.navigate('ListaJogos')}
          icon={({ color, size }) => (
            <Icon name="games" color={color} size={size} />
          )}
          labelStyle={styles.drawerItemLabel}
        />
        <DrawerItem
          label="Jogos Favoritos"
          onPress={() => props.navigation.navigate('ListaJogosFav')}
          icon={({ color, size }) => (
            <Icon name="favorite" color={color} size={size} />
          )}
          labelStyle={styles.drawerItemLabel}
        />
        <DrawerItem
          label="Franquias Favoritas"
          onPress={() => props.navigation.navigate('ListaFranquiaFav')}
          icon={({ color, size }) => (
            <Icon name="star" color={color} size={size} />
          )}
          labelStyle={styles.drawerItemLabel}
        />
      </View>
      <View style={styles.logOutContainer}>
        <TouchableOpacity onPress={() => props.navigation.navigate('WelcomeScreen')} style={styles.logOutButton}>
          <Icon name="exit-to-app" size={24} color="#FF6347" />
          <Text style={styles.logOutText}>Log Out</Text>
        </TouchableOpacity>
      </View>
    </DrawerContentScrollView>
  );
};

export default CustomDrawerContent;

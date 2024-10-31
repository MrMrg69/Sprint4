import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from '../Styles/CustomDrawerStyles';
import { DrawerContentComponentProps, DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';

// Custom Drawer Content Component
const CustomDrawerContent = (props: DrawerContentComponentProps) => {
  const { state, navigation } = props;

  // Filtrar rotas que não devem ser exibidas no menu lateral
  const filteredRoutes = state.routes.filter(
    (route) => route.name !== 'WelcomeScreen' && route.name !== 'SignIn' && route.name !== 'LogIn'
  );

  return (
    <DrawerContentScrollView {...props} contentContainerStyle={styles.drawerContent}>
      <View style={{ flex: 1 }}>
        {filteredRoutes.map((route) => {
          const isFocused = state.routeNames[state.index] === route.name;

          return (
            <DrawerItem
              key={route.key}
              label={
                route.name === 'ListaFranquias' ? 'Lista Franquias' :
                route.name === 'ListaJogos' ? 'Lista Jogos' :
                route.name === 'ListaJogosFav' ? 'Jogos Favoritos' :
                'Franquia Favorita'
              }
              onPress={() => navigation.navigate(route.name)}
              icon={({ size }) => (
                <Icon
                  name={
                    route.name === 'ListaFranquias' ? 'list' :
                    route.name === 'ListaJogos' ? 'games' :
                    route.name === 'ListaJogosFav' ? 'favorite' :
                    'star'
                  }
                  size={size}
                  style={isFocused ? styles.drawerItemActiveIcon : styles.drawerIcon}
                />
              )}
              labelStyle={isFocused ? styles.drawerItemActiveLabel : styles.drawerItemLabel}
            />
          );
        })}
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

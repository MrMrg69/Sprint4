import { createDrawerNavigator, DrawerScreenProps } from '@react-navigation/drawer';
import { DrawerActions } from '@react-navigation/native';
import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import ListaFranquiaFav from '../screens/ListaFranquiaFav';
import ListaFranquias from '../screens/ListaFranquias';
import ListaJogos from '../screens/ListaJogos';
import ListaJogosFav from '../screens/ListaJogosFav';
import LogIn from '../screens/LogIn';
import SignIn from '../screens/SignIn';
import WelcomeScreen from '../screens/WelcomeScreen';
import CustomDrawerContent from '../navigation/CustomDrawer';
import { Franquia } from './types';

const Drawer = createDrawerNavigator();

export type RootStackParamList = {
  WelcomeScreen: undefined;
  SignIn: undefined;
  LogIn: undefined;
  ListaFranquias: undefined;
  ListaJogos: undefined;
  ListaFranquiaFav: undefined;
  ListaJogosFav: undefined;
};

const AppNavigation = () => {
  const [franquias, setFranquias] = useState<Franquia[]>([]);

  const toggleFavorito = (id: string) => {
    setFranquias((prevFranquias) =>
      prevFranquias.map((franquia) =>
        franquia.id === id ? { ...franquia, favorito: !franquia.favorito } : franquia
      )
    );
  };

  return (
    <Drawer.Navigator
      initialRouteName="WelcomeScreen"
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen
        name="WelcomeScreen"
        component={WelcomeScreen}
        options={{ headerShown: false }}
      />
      <Drawer.Screen
        name="SignIn"
        component={SignIn}
        options={{ headerShown: false }}
      />
      <Drawer.Screen
        name="LogIn"
        component={LogIn}
        options={{ headerShown: false }}
      />
      <Drawer.Screen
        name="ListaFranquias"
        component={(props: any) => (
          <ListaFranquias {...props} franquias={franquias} setFranquias={setFranquias} />
        )}
        options={({ navigation }) => ({
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}>
              <Icon name="menu" size={32} color="#555" style={{ marginLeft: 16 }} />
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
        })}
      />
      <Drawer.Screen
        name="ListaJogos"
        component={ListaJogos}
      />
      <Drawer.Screen
        name="ListaFranquiaFav"
        component={(props: any) => (
          <ListaFranquiaFav
            {...props}
            franquias={franquias.filter((franquia) => franquia.favorito)}
            toggleFavorito={toggleFavorito}
          />
        )}
        options={({ navigation }) => ({
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}>
              <Icon name="menu" size={32} color="#555" style={{ marginLeft: 16 }} />
            </TouchableOpacity>
          ),
          headerTitleAlign: 'center',
          headerTitle: 'Franquia Favorita',
          headerStyle: {
            backgroundColor: '#222',
            elevation: 0,
            shadowOpacity: 0,
          },
          headerTitleStyle: {
            color: '#00E5FF',
            fontFamily: 'PressStart2P-Regular',
          },
        })}
      />
      <Drawer.Screen
        name="ListaJogosFav"
        component={ListaJogosFav}
      />
    </Drawer.Navigator>
  );
};

export default AppNavigation;

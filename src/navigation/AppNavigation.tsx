import { createDrawerNavigator } from '@react-navigation/drawer';
import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import ListaFranquias from '../screens/ListaFranquias';
import ListaJogos from '../screens/ListaJogos';
import ListaFranquiaFav from '../screens/ListaFranquiaFav';
import ListaJogosFav from '../screens/ListaJogosFav';
import LogIn from '../screens/LogIn';
import SignIn from '../screens/SignIn';
import WelcomeScreen from '../screens/WelcomeScreen';
import CustomDrawerContent from '../navigation/CustomDrawer';
import { RootStackParamList } from '../navigation/types';
import { DrawerActions } from '@react-navigation/native';

const Drawer = createDrawerNavigator<RootStackParamList>();

const AppNavigation = () => {
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
        component={ListaFranquias}
        options={({ navigation }) => ({
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}>
              <Icon name="menu" size={32} color="#555" style={{ marginLeft: 16 }} />
            </TouchableOpacity>
          ),
          headerTitle: 'Lista Franquias',
          headerTitleAlign: 'center',
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
        options={({ navigation }) => ({
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}>
              <Icon name="menu" size={32} color="#555" style={{ marginLeft: 16 }} />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <TouchableOpacity onPress={() => console.log('Adicionar Jogo')}>
              <Icon name="add" size={32} color="#555" style={{ marginRight: 16 }} />
            </TouchableOpacity>
          ),
          headerTitle: 'Lista Jogos',
          headerTitleAlign: 'center',
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
        name="ListaFranquiaFav"
        component={ListaFranquiaFav}
        options={({ navigation }) => ({
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}>
              <Icon name="menu" size={32} color="#555" style={{ marginLeft: 16 }} />
            </TouchableOpacity>
          ),
          headerTitle: 'Franquia Favorita',
          headerTitleAlign: 'center',
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
        options={({ navigation }) => ({
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}>
              <Icon name="menu" size={32} color="#555" style={{ marginLeft: 16 }} />
            </TouchableOpacity>
          ),
          headerTitle: 'Jogos Favoritos',
          headerTitleAlign: 'center',
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
    </Drawer.Navigator>
  );
};

export default AppNavigation;

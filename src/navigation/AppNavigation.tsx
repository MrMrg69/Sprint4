import { createDrawerNavigator } from '@react-navigation/drawer';
import React, { useState } from 'react';
import ListaFranquiaFav from '../screens/ListaFranquiaFav';
import ListaFranquias from '../screens/ListaFranquias';
import ListaJogos from '../screens/ListaJogos';
import ListaJogosFav from '../screens/ListaJogosFav';
import LogIn from '../screens/LogIn';
import SignIn from '../screens/SignIn';
import WelcomeScreen from '../screens/WelcomeScreen';
import CustomDrawerContent from '../navigation/CustomDrawer';
import { Franquia } from '../screens/ListaFranquias';

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
        component={(props) => (
          <ListaFranquias {...props} franquias={franquias} setFranquias={setFranquias} />
        )}
      />
      <Drawer.Screen
        name="ListaJogos"
        component={ListaJogos}
      />
      <Drawer.Screen
        name="ListaFranquiaFav"
        component={(props) => (
          <ListaFranquiaFav
            {...props}
            franquias={franquias.filter((franquia) => franquia.favorito)}
            toggleFavorito={toggleFavorito}
          />
        )}
        options={{ title: 'Franquia Favorita' }}
      />
      <Drawer.Screen
        name="ListaJogosFav"
        component={ListaJogosFav}
      />
    </Drawer.Navigator>
  );
};

export default AppNavigation;

import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';
import ListaFranquiaFav from '../screens/ListaFranquiaFav';
import ListaFranquias from '../screens/ListaFranquias';
import ListaJogos from '../screens/ListaJogos';
import ListaJogosFav from '../screens/ListaJogosFav';
import LogIn from '../screens/LogIn';
import SignIn from '../screens/SignIn';
import WelcomeScreen from '../screens/WelcomeScreen';
import CustomDrawerContent from '../navigation/CustomDrawer';

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
            />
            <Drawer.Screen
                name="ListaJogos"
                component={ListaJogos}
            />
            <Drawer.Screen
                name="ListaFranquiaFav"
                component={ListaFranquiaFav}
            />
            <Drawer.Screen
                name="ListaJogosFav"
                component={ListaJogosFav}
            />
        </Drawer.Navigator>
    );
};

export default AppNavigation;

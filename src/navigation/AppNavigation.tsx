import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import ListaFranquiaFav from '../screens/ListaFranquiaFav';
import ListaFranquias from '../screens/ListaFranquias';
import ListaJogos from '../screens/ListaJogos';
import ListaJogosFav from '../screens/ListaJogosFav';
import LogIn from '../screens/LogIn';
import SignIn from '../screens/SingIn';
import WelcomeScreen from '../screens/WelcomeScreen';

const Stack = createStackNavigator();

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
        <Stack.Navigator initialRouteName="WelcomeScreen">
            <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
            <Stack.Screen name="SignIn" component={SignIn} />
            <Stack.Screen name="LogIn" component={LogIn} />
            <Stack.Screen name="ListaFranquias" component={ListaFranquias} />
            <Stack.Screen name="ListaJogos" component={ListaJogos} />
            <Stack.Screen name="ListaFranquiaFav" component={ListaFranquiaFav} />
            <Stack.Screen name="ListaJogosFav" component={ListaJogosFav} />
        </Stack.Navigator>
    );
};

export default AppNavigation;

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigation from './src/navigation/AppNavigation';
import { FranquiasProvider } from './src/navigation/FranquiasContext';
import { JogosProvider } from './src/navigation/JogosContext';

const App = () => {
  return (
    <FranquiasProvider>
      <JogosProvider>
        <NavigationContainer>
          <AppNavigation />
        </NavigationContainer>
      </JogosProvider>
    </FranquiasProvider>
  );
};

export default App;

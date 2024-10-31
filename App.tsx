import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigation from './src/navigation/AppNavigation';
import { FranquiasProvider } from './src/navigation/FranquiasContext';

const App = () => {
  return (
    <FranquiasProvider>
      <NavigationContainer>
        <AppNavigation />
      </NavigationContainer>
    </FranquiasProvider>
  );
};

export default App;

import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import AppNavigation from './src/navigation/AppNavigation';

const App = () => {
  return (
    <NavigationContainer>
      <AppNavigation />
    </NavigationContainer>
  );
};

export default App;
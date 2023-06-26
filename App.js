import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { MainStack } from './navigation/stack';
import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';

const App = () => {
  return (
    <NavigationContainer>
       <StatusBar style='dark' />
      <MainStack />
    </NavigationContainer>
  );
}

export default App;
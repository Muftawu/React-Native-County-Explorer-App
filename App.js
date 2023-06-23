import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { MainStack } from './navigation/stack';
import 'react-native-gesture-handler';

const App = () => {
  return (
    <NavigationContainer>
      <MainStack />
    </NavigationContainer>
  );
}

export default App;
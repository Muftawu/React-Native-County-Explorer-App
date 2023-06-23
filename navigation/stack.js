import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/homescreen';
import DetailScreen from '../screens/detail_screen';
import MyTabs, { AboutTab, MainTab } from './tabs';
import { View, Text } from 'react-native';
import AboutScreen from '../screens/aboutScreen';
import { Ionicons } from '@expo/vector-icons';

const Stack = createStackNavigator();

export const MainStack = () => {

  return (
    <Stack.Navigator screenOptions={{headerTintColor: 'blue', headerShown: true}}>
      <Stack.Screen name="HomeTab" component={MainTab} options={{
        title: "Know Your Countries",
        headerLeft: () => (
          <Ionicons name='flag-sharp' size={35} color="violet" />
        ),
        headerRight: () => (
          <Ionicons name='flag-sharp' size={35} color="violet" />
        )
      }} />

      <Stack.Screen name="Detail" component={DetailScreen} />
    </Stack.Navigator>
  );
}


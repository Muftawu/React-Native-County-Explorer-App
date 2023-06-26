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
    <Stack.Navigator  screenOptions={{headerTintColor: 'black', headerShown: true}}>
      <Stack.Screen name="HomeTab" component={MainTab} options={{
        title: "Country Explorer",
        headerLeft: () => (
          <Ionicons name='logo-flickr' onPress={() => alert("Countries app with React Native and Django Rest Framework.")} size={35} color="green" />
        ),
        headerRight: () => (
          <Ionicons name='chatbox' onPress={() => alert("This service is currently unavailable")} size={35} color="skyblue" />
        )
      }} />

      <Stack.Screen name="Detail" component={DetailScreen} />

    </Stack.Navigator>
  );
}


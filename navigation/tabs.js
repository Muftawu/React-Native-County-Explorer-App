import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/homescreen';
import AboutScreen from '../screens/aboutScreen';
import { Ionicons } from '@expo/vector-icons';
import { View, Text } from 'react-native';

const Tab = createBottomTabNavigator();

export const MainTab = () => {

  return (
    <Tab.Navigator screenOptions={{headerShown: false }}>

      <Tab.Screen name="Home" component={HomeScreen} 
      options={{
        title: "Home",
        tabBarIcon: () => <Ionicons name='home' size={32} color="blue" />
      }} />

      <Tab.Screen name="About" component={AboutScreen} 
          options={{
            title: "About",
            tabBarIcon: () => <Ionicons name='information-circle' size={32} color="blue" />
          }}/>

    </Tab.Navigator>
    
  );
}

import { StyleSheet, Text, View, FlatList} from 'react-native';
import React from 'react';
import Home from '../src/screens/Home';
import Profile from './screens/Profile';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Halaman from './screens/Halaman';

const Stack = createNativeStackNavigator();
const Tabs = createBottomTabNavigator();

const MenuTab =() =>{
  return (
    <Tabs.Navigator screenOptions={() => ({tabBarActiveTintColor: '#50B498'})}>
      <Tabs.Screen name="Home" component={Home} options={{ headerShown: false,
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="home-roof" color={color} size={25}/>
        ),

      }}/>
      <Tabs.Screen name="Halaman" component={Halaman} options={{ headerShown: false,
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="cellphone-dock" color={color} size={25}/>
        ),

      }}/>
      <Tabs.Screen name="Profile" component={Profile} options={{ headerShown: false,
         tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="contacts" color={color} size={20}/>
         ),
      }}/>
    </Tabs.Navigator>
  );
};

const App = () => {
  return(
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Menu" component={MenuTab}
      options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}
export default App;

const styles = StyleSheet.create({});
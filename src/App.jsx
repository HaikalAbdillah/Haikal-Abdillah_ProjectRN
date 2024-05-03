import { StyleSheet, Text, View, FlatList} from 'react-native';
import React from 'react';
import About from './screens/About';
import Home from '../src/screens/Home';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Profile from './screens/Profile';
import Pesan from './screens/Pesan';

const Stack = createNativeStackNavigator();
const Tabs = createBottomTabNavigator();

const MenuTab =() =>{
  return (
    <Tabs.Navigator>
      <Tabs.Screen name="Home" component={Home}/>
      <Tabs.Screen name="About" component={About}/>
      <Tabs.Screen name="Pesan" component={Pesan}/>
      <Tabs.Screen name="Profile" component={Profile}/>
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
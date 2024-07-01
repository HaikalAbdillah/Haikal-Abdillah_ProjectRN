import { StyleSheet, Text, View, FlatList} from 'react-native';
import React from 'react';
import Home from '../src/screens/Home';
import Profile from './screens/Profile';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

const Stack = createNativeStackNavigator();
const Tabs = createBottomTabNavigator();

const MenuTab =() =>{
  return (
    <Tabs.Navigator>
      <Tabs.Screen name="Home" component={Home} options={{
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="home" color={color} size={26}/>
        ),

      }}/>
      <Tabs.Screen name="Profile" component={Profile} options={{
         tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="wallpaper" color={color} size={26}/>
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
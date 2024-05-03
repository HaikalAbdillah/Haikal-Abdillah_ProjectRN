import { FlatList, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import IconScreen from '../components/IconScreen';

const Data =[
    {id: 1, label: 'ya'},
    {id: 2, label: 'emang'},
    {id: 3, label: 'ini'},
    {id: 4, label: 'ya'},
    {id: 5, label: 'ya'},
    {id: 6, label: 'ya'},
  ]
  
  const About = () => {
    return (
      <View>
        <Text>Ini toko</Text>
        <FlatList 
            data={Data}
            renderItem={({item}) => <IconScreen label={item.label}/>}
            horizontal={true}
        />
      </View>
    );
  };

export default About;

const styles = StyleSheet.create({});
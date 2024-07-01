import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import Foto from '../assets/img/fav.png';

const Home = ({navigation}) => {
  return (
    <View>
      <Text></Text>
      {/* <Image
        source={require('../assets/img/fav.png')} /> */}
        <TouchableOpacity onPress={() => navigation.navigate('Profile') }>
      <Image 
        source={Foto} style={{height: 50, width: 50}}  />
        </TouchableOpacity>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})
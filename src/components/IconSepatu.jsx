// import React from 'react';
// import { View, Text, Image, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

// const dataSepatu = [
//   { id: '1', nama: 'Sepatu Casual', harga: 'Rp 200.000', gambar: require('./assets/sepatu_casual.jpg') },
//   { id: '2', nama: 'Sepatu Lari', harga: 'Rp 300.000', gambar: require('./assets/sepatu_lari.jpg') },
//   { id: '3', nama: 'Sepatu Formal', harga: 'Rp 250.000', gambar: require('./assets/sepatu_formal.jpg') },
//   { id: '4', nama: 'Sepatu Boots', harga: 'Rp 400.000', gambar: require('./assets/sepatu_boots.jpg') },
// ];

// const TokoSepatuScreen = ({ navigation }) => {
//   const renderItem = ({ item }) => (
//     <TouchableOpacity
//       style={styles.itemContainer}
//       onPress={() => navigation.navigate('DetailSepatu', { sepatu: item })}
//     >
//       <Image source={item.gambar} style={styles.itemImage} />
//       <Text style={styles.itemText}>{item.nama}</Text>
//       <Text style={styles.itemText}>{item.harga}</Text>
//     </TouchableOpacity>
//   );

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Toko Sepatu</Text>
//       <FlatList
//         data={dataSepatu}
//         renderItem={renderItem}
//         keyExtractor={item => item.id}
//         numColumns={2}
//       />
//     </View>
//   );
// };
// const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       padding: 10,
//       alignItems: 'center',
//       backgroundColor: '#fff',
//     },
//     title: {
//       fontSize: 24,
//       fontWeight: 'bold',
//       marginBottom: 20,
//     },
//     itemContainer: {
//       flex: 1,
//       alignItems: 'center',
//       justifyContent: 'center',
//       margin: 10,
//       padding: 10,
//       borderRadius: 10,
//       borderWidth: 1,
//       borderColor: '#ccc',
//     },
//     itemImage: {
//       width: 120,
//       height: 120,
//       marginBottom: 10,
//       borderRadius: 10,
//     },
//     itemText: {
//       fontSize: 16,
//     },
//   });
  
//   export default TokoSepatuScreen;
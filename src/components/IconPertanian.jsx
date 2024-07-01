// import React from 'react';
// import { View, Text, Image, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

// const dataProduk = [
//   { id: '1', nama: 'Pupuk Organik', harga: 'Rp 50.000', gambar: require('./assets/pupuk_organik.jpg') },
//   { id: '2', nama: 'Benih Cabai', harga: 'Rp 10.000', gambar: require('./assets/benih_cabai.jpg') },
//   { id: '3', nama: 'Alat Penyiram', harga: 'Rp 100.000', gambar: require('./assets/alat_penyiram.jpg') },
//   { id: '4', nama: 'Sekop', harga: 'Rp 30.000', gambar: require('./assets/sekop.jpg') },
// ];

// const TokoPertanianScreen = ({ navigation }) => {
//   const renderItem = ({ item }) => (
//     <TouchableOpacity
//       style={styles.itemContainer}
//       onPress={() => navigation.navigate('DetailProduk', { produk: item })}
//     >
//       <Image source={item.gambar} style={styles.itemImage} />
//       <Text style={styles.itemText}>{item.nama}</Text>
//       <Text style={styles.itemText}>{item.harga}</Text>
//     </TouchableOpacity>
//   );

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Toko Pertanian</Text>
//       <FlatList
//         data={dataProduk}
//         renderItem={renderItem}
//         keyExtractor={item => item.id}
//         numColumns={2}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 10,
//     alignItems: 'center',
//     backgroundColor: '#fff',
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 20,
//   },
//   itemContainer: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//     margin: 10,
//     padding: 10,
//     borderRadius: 10,
//     borderWidth: 1,
//     borderColor: '#ccc',
//   },
//   itemImage: {
//     width: 120,
//     height: 120,
//     marginBottom: 10,
//     borderRadius: 10,
//   },
//   itemText: {
//     fontSize: 16,
//   },
// });

// export default TokoPertanianScreen;
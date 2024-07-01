// import React, { useState } from 'react';
// import { View, Text, TextInput, Button, Alert } from 'react-native';

// const TiketDotCom = () => {
//   const [nama, setNama] = useState('');
//   const [jumlahTiket, setJumlahTiket] = useState('');
//   const [totalHarga, setTotalHarga] = useState(0);

//   const hitungHarga = () => {
//     // Menghitung total harga tiket berdasarkan jumlah tiket yang dibeli
//     const hargaTiket = 100000; // Harga per tiket
//     const jumlah = parseInt(jumlahTiket);
//     const total = hargaTiket * jumlah;
//     setTotalHarga(total);
//   };

//   const beliTiket = () => {
//     if (nama === '' || jumlahTiket === '' || parseInt(jumlahTiket) <= 0) {
//       Alert.alert('Peringatan', 'Mohon lengkapi data pembelian');
//     } else {
//       Alert.alert('Pembelian Berhasil', Terima kasih ${nama} telah membeli ${jumlahTiket} tiket. Total harga: ${totalHarga});
//     }
//   };

//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Masukkan Nama Anda:</Text>
//       <TextInput
//         style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10, width: 200 }}
//         onChangeText={text => setNama(text)}
//         value={nama}
//       />
//       <Text>Masukkan Jumlah Tiket:</Text>
//       <TextInput
//         style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10, width: 200 }}
//         onChangeText={text => setJumlahTiket(text)}
//         value={jumlahTiket}
//         keyboardType="numeric"
//       />
//       <Button title="Hitung Harga" onPress={hitungHarga} />
//       <Text>Total Harga: {totalHarga}</Text>
//       <Button title="Beli Tiket" onPress={beliTiket} />
//     </View>
//   );
// };

// export default TiketDotCom;
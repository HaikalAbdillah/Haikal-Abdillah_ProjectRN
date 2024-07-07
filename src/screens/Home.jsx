import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StatusBar,
  FlatList,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import Header from '../components/Header';
import Category from '../components/Category';
import Card from '../components/Card';
const Home = () => {
  const [cari, setCari] = useState('');
  const [category, setCategory] = useState([
    {nama: 'Programming', icon: 'code-slash'},
    {nama: 'Design', icon: 'brush'},
    {nama: 'Artikel', icon: 'document'},
    {nama: 'Cleaning', icon: 'star'},
  ]);

  const [pekerjaan, setPekerjaan] = useState([
    {
      nama: 'UI/UX Designer',
      image: require('../assets/img/ii.png'),
      namaPerusahaan: 'haa.',
      new: true,
      category1: 'Web Design',
      category2: 'trending',
      gaji: '10:00',
    },
    {
      nama: 'Novel',
      image: require('../assets/img/ii.png'),
      namaPerusahaan: 'haa.',
      new: true,
      category1: 'Web Design',
      category2: 'trending',
      gaji: '10:00',
    },
    {
      nama: 'Mobile App Dev',
      image: require('../assets/img/ii.png'),
      namaPerusahaan: 'haa.',
      new: false,
      category1: 'Web Design',
      category2: 'trending',
      gaji: '10:00',
    },
    {
      nama: 'IOT',
      image: require('../assets/img/ii.png'),
      namaPerusahaan: 'haa.',
      new: false,
      category1: 'Web Design',
      category2: 'trending',
      gaji: '10:00',
    },
    {
      nama: 'Komik',
      image: require('../assets/img/ii.png'),
      namaPerusahaan: 'haa.',
      new: false,
      category1: 'Web Design',
      category2: 'trending',
      gaji: '10:00',
    },
  ]);

  // useEffect(() => {
  //   console.log(cari);
  // }, [cari]);

  return (
    <View style={{flex: 1}}>
      <StatusBar barStyle="light-content" backgroundColor={'#50B498'} />
      <Header cari={cari} setCari={setCari} />

      <View style={{flex: 1, marginHorizontal: 20, marginTop: 10}}>
        <Category category={category} />
        <View style={{flex: 1}}>
          <Text style={{fontWeight: 'bold', marginTop: 10, marginBottom: 10}}>
            Buku Terbaru
          </Text>
          <FlatList
            data={pekerjaan}
            renderItem={({item}) => (
              <Card
                nama={item.nama}
                image={item.image}
                namaPerusahaan={item.namaPerusahaan}
                new={item.new}
                category1={item.category1}
                category2={item.category2}
                gaji={item.gaji}
              />
            )}
          />
        </View>
      </View>
    </View>
  );
};

export default Home;

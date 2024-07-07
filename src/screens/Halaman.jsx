import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
  ScrollView,
  StatusBar,
} from 'react-native';

const Halaman = () => {
  const [dataBuku, setDataBuku] = useState([
    {
      judul: 'Intro to Programming',
      image: require('../assets/img/intro_to_programming.jpg'),
      author: 'Svetlin Nakov dkk',
    },
    {
      judul: 'Programming RN',
      image: require('../assets/img/programming_react_native.png'),
      author: 'Dotan Nahum',
    },
    {
      judul: 'React Native Grow',
      image: require('../assets/img/react_native_grow.png'),
      author: 'Community',
    },
    {
      judul: 'Programming RN',
      image: require('../assets/img/typescript_accelerated.png'),
      author: 'Dotan Nahum',
    },
    {
      judul: 'React Native Grow',
      image: require('../assets/img/typescript_csharp_programmer.jpg'),
      author: 'Community',
    },
  ]);
  
  const [dataBuku1, setDataBuku1] = useState([
    {
      judul: 'Bintang',
      image: require('../assets/img/bintang.jpeg'),
      author: 'tereliye',
    },
    {
      judul: 'Bulan',
      image: require('../assets/img/bulan.jpeg'),
      author: 'tereliye',
    },
    {
      judul: 'Bumi',
      image: require('../assets/img/bumi.jpeg'),
      author: 'tereliye',
    },
    {
      judul: 'Komet',
      image: require('../assets/img/komet.jpeg'),
      author: 'tereliye',
    },
    {
      judul: 'Matahari',
      image: require('../assets/img/matahari.jpeg'),
      author: 'tereliye',
    },
  ]);
  
  const [dataBuku2, setDataBuku2] = useState([
    {
      judul: 'Artificial Intelegent',
      image: require('../assets/img/mtk.jpeg'),
      author: '',
    },
    {
      judul: 'Intelengent Teknology',
      image: require('../assets/img/pb.jpeg'),
      author: '',
    },
    {
      judul: 'Intelengent Teknology',
      image: require('../assets/img/ai.jpeg'),
      author: '',
    },
    {
      judul: 'Intelengent Teknology',
      image: require('../assets/img/it.jpeg'),
      author: '',
    },

  ]);
  const [daftarRekomendasi, setDaftarRekomendasi] = useState([
    {
      judul: 'Rekomendasi Pemograman',
      deskripsi: 'React Native',
      image: require('../assets/img/programming_react_native.png'),
    },
    {
      judul: 'Rekomendasi Matematika',
      deskripsi: 'Matematika',
      image: require('../assets/img/mtk.jpeg'),
    },
    {
      judul: 'Rekomendasi Novel',
      deskripsi: 'Bulan',
      image: require('../assets/img/bulan.jpeg'),
    },
  ]);

  return (
    <View style={{flex: 1}}>
      <StatusBar backgroundColor="#50B498" barStyle="light-content" />
      <ScrollView style={{flex: 1}}>
        <View
          style={{
            backgroundColor: '#50B498',
            borderBottomLeftRadius: 30,
            paddingBottom: 10,
            elevation: 5,
          }}>
          <View style={{marginHorizontal: 20, marginTop: 10}}>
            <Text style={{color: '#FFFFFF'}}>Selamat Datang</Text>
            <Text style={{fontSize: 22, fontWeight: 'bold', color: '#FFFFFF'}}>
              Di Perpustakaan Digital
            </Text>
          </View>

          <View style={{marginLeft: 20, marginTop: 20}}>
            <FlatList
              data={daftarRekomendasi}
              horizontal
              showsHorizontalScrollIndicator={false}
              renderItem={({item}) => (
                <TouchableOpacity
                  style={{
                    backgroundColor: '#FFFFFF',
                    marginTop: 10,
                    flexDirection: 'row',
                    marginRight: 20,
                    elevation: 3,
                    padding: 10,
                    marginBottom: 10,
                    borderRadius: 5,
                  }}>
                  <View style={{marginRight: 10, width: 200}}>
                    <Text
                      style={{
                        fontWeight: 'bold',
                        fontSize: 20,
                        color: '#212121',
                      }}>
                      {item.judul}
                    </Text>
                    <Text style={{fontSize: 14}}>{item.deskripsi}</Text>
                  </View>
                  <View>
                    <Image
                      source={item.image}
                      style={{width: 130, height: 150, borderRadius: 5}}
                      resizeMode="contain"
                    />
                  </View>
                </TouchableOpacity>
              )}
            />
          </View>
        </View>

        <View style={{marginLeft: 20, marginTop: 20}}>
          <View style={{flexDirection: 'row', marginRight: 10}}>
            <Text style={{fontWeight: 'bold', color: '#212121'}}>
              React Native
            </Text>
            <TouchableOpacity 
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'flex-end',
              }}>
              <Text>Lihat Semua</Text>
            </TouchableOpacity>
          </View>
          <FlatList
            data={dataBuku}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({item}) => (
              <TouchableOpacity 
                style={{
                  width: 150,
                  backgroundColor: '#FFFFFF',
                  
                  justifyContent: 'center',
                  alignItems: 'flex-start',
                  marginTop: 10,
                }}>
                <Image
                  source={item.image}
                  style={{width: 130, height: 150, borderRadius: 10}}
                  resizeMode="contain"
                />
                <Text style={{fontWeight: 'bold'}}>{item.judul}</Text>
                <Text style={{fontSize: 14}}>{item.author}</Text>
              </TouchableOpacity>
            )}
          />
        </View>

        <View style={{marginLeft: 20, marginTop: 20, marginBottom: 20}}>
          <View style={{flexDirection: 'row', marginRight: 10}}>
            <Text style={{fontWeight: 'bold', color: '#212121'}}>Novel</Text>
            <TouchableOpacity
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'flex-end',
              }}>
              <Text>Lihat Semua</Text>
            </TouchableOpacity>
          </View>
          <FlatList
            data={dataBuku1}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({item}) => (
              <TouchableOpacity
                style={{
                  width: 150,
                  backgroundColor: '#FFFFFF',

                  justifyContent: 'center',
                  alignItems: 'flex-start',
                  marginTop: 10,
                }}>
                <Image
                  source={item.image}
                  style={{width: 130, height: 150, borderRadius: 5}}
                  resizeMode="contain"
                />
                <Text style={{fontWeight: 'bold'}}>{item.judul}</Text>
                <Text style={{fontSize: 14}}>{item.author}</Text>
              </TouchableOpacity>
            )}
          />
        </View>
                  <View style={{marginLeft: 20, marginTop: 20, marginBottom: 20}}>
                    <View style={{flexDirection: 'row', marginRight: 10}}>
                      <Text style={{fontWeight: 'bold', color: '#212121'}}>AI</Text>
                      <TouchableOpacity
                        style={{
                          flex: 1,
                          justifyContent: 'center',
                          alignItems: 'flex-end',
                        }}>
                        <Text>Lihat Semua</Text>
                      </TouchableOpacity>
                    </View>
                    <FlatList
                      data={dataBuku2}
                      horizontal
                      showsHorizontalScrollIndicator={false}
                      renderItem={({item}) => (
                        <TouchableOpacity
                          style={{
                            width: 150,
                            backgroundColor: '#FFFFFF',
                            
                            justifyContent: 'center',
                            alignItems: 'flex-start',
                            marginTop: 10,
                          }}>
                          <Image
                            source={item.image}
                            style={{width: 130, height: 150, borderRadius: 5}}
                            resizeMode="contain"
                          />
                          <Text style={{fontWeight: 'bold'}}>{item.judul}</Text>
                          <Text style={{fontSize: 14}}>{item.author}</Text>
                        </TouchableOpacity>
                      )}
                    />
                  </View>


                  <View style={{marginLeft: 20, marginTop: 20}}>
          <View style={{flexDirection: 'row', marginRight: 10}}>
            <Text style={{fontWeight: 'bold', color: '#212121'}}>
              Komik
            </Text>
            <TouchableOpacity 
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'flex-end',
              }}>
              <Text>Lihat Semua</Text>
            </TouchableOpacity>
          </View>
          <FlatList
            data={dataBuku1}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({item}) => (
              <TouchableOpacity 
                style={{
                  width: 150,
                  backgroundColor: '#FFFFFF',
                  justifyContent: 'center',
                  alignItems: 'flex-start',
                  marginTop: 10,
                }}>
                <Image
                  source={item.image}
                  style={{width: 130, height: 150, borderRadius: 10}}
                  resizeMode="contain"
                />
                <Text style={{fontWeight: 'bold'}}>{item.judul}</Text>
                <Text style={{fontSize: 14}}>{item.author}</Text>
              </TouchableOpacity>
            )}
          />
        </View>

        <View style={{marginLeft: 20, marginTop: 20, marginBottom: 20}}>
                <View style={{flexDirection: 'row', marginRight: 10}}>
                <Text style={{fontWeight: 'bold', color: '#212121'}}>dll</Text>
                      <TouchableOpacity
                        style={{
                          flex: 1,
                          justifyContent: 'center',
                          alignItems: 'flex-end',
                        }}>
                        <Text>Lihat Semua</Text>
                      </TouchableOpacity>
                    </View>
                    <FlatList
                      data={dataBuku}
                      horizontal
                      showsHorizontalScrollIndicator={false}
                      renderItem={({item}) => (
                        <TouchableOpacity
                          style={{
                            width: 150,
                            backgroundColor: '#FFFFFF',
                            
                            justifyContent: 'center',
                            alignItems: 'flex-start',
                            marginTop: 10,
                          }}>
                          <Image
                            source={item.image}
                            style={{width: 130, height: 150, borderRadius: 5}}
                            resizeMode="contain"
                          />
                          <Text style={{fontWeight: 'bold'}}>{item.judul}</Text>
                          <Text style={{fontSize: 14}}>{item.author}</Text>
                        </TouchableOpacity>
                      )}
                    />
                    
                  </View>
      </ScrollView>
    </View>

    
  );
};

export default Halaman;

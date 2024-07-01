import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, Button } from 'react-native';

const Profile = () => {
  const [user, setUser] = useState({
    nama: 'John Doe',
    email: 'johndoe@example.com',
    nomorAnggota: '123456789',
    foto: 'https://placehold.co/64x64',
  });

  return (
    <View style={styles.container}>
      <Image source={{ uri: user.foto }} style={styles.foto} />
      <Text style={styles.nama}>{user.nama}</Text>
      <Text style={styles.email}>{user.email}</Text>
      <Text style={styles.nomorAnggota}>Nomor Anggota: {user.nomorAnggota}</Text>
      <Button title="Edit Profile" onPress={() => {}} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  foto: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20,
  },
  nama: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  email: {
    fontSize: 16,
    marginBottom: 10,
  },
  nomorAnggota: {
    fontSize: 14,
    marginBottom: 20,
  },
});

export default Profile;

const style = StyleSheet.create({})
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';


const IconScreen = ({label}) => {
    return (
        <TouchableOpacity style={styles.container}>
            <View style={styles.box}>
                <Text>Kotak</Text>
            </View>
            <Text>{label}</Text>
        </TouchableOpacity>
    );
};

export default IconScreen;

const styles = StyleSheet.create({
    container: {
        margin: 1,
        padding: 5,
        width: 70,
        alignItem: 'center',
    },
    box: {
        borderWidth: 1,
        padding: 5,
        justifyContent: 'center',
        alignItems: 'center',
        width: 50,
        height: 50,
        borderRadius: 10,
    },
});
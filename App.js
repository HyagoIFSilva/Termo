import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable, } from 'react-native';
import { useState } from 'react';


export default function App() {
  return (
    <View style={styles.geral}>


    <View style={styles.elementos}>
      <View style={styles.box}>
      <Text style={styles.texto}>Texto</Text>
      </View>
      <View style={styles.box}>
      <Text style={styles.texto}>Texto</Text>
      </View>
      <View style={styles.box}>
      <Text style={styles.texto}>Texto</Text>
      </View>
      <View style={styles.box}>
<Text style={styles.texto}>Texto</Text>
      </View>

              </View>
      <StatusBar style="auto" />

    </View>




  );
}

const styles = StyleSheet.create({
  geral: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 10,
    borderColor: 'black', 
    borderRadius: 10,
    width: '90%',
    height: '100%',  
  },
  elementos: {
    display: 'flex',
    direction: 'row',
    justifyContent: 'space-around',
    flex: 1,
    backgroundColor: '#f0f0f0',
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
    height: '50%',
  },
  box: {
    width: 100,
    height: 100,
    backgroundColor: 'blue',
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 10,
    padding: 5,
  },
  texto:{
    color: 'red',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  }
});

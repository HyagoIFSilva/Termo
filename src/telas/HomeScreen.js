import React from 'react';
import { View, Text, Pressable, SafeAreaView, StyleSheet } from 'react-native';
import { moderateScale } from 'react-native-size-matters';


export default function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Termo Digital</Text>
        <Text style={styles.subtitle}>Adivinhe o número secreto</Text>
        <Pressable 
          style={styles.button}
          onPress={() => navigation.navigate('Game')}
        >
          <Text style={styles.buttonText}>Começar Jogo</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121213',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    alignItems: 'center',
  },
  title: {
    fontSize: moderateScale(48),
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: moderateScale(10),
  },
  subtitle: {
    fontSize: moderateScale(18),
    color: '#AAAAAA',
    marginBottom: moderateScale(40),
  },
  button: {
    backgroundColor: '#538d4e',
    paddingVertical: moderateScale(15),
    paddingHorizontal: moderateScale(40),
    borderRadius: moderateScale(8),
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: moderateScale(20),
    fontWeight: 'bold',
  },
});
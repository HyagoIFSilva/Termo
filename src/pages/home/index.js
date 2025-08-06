import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable, } from 'react-native';
import { useState } from 'react';
import { TextInput } from 'react-native-web';

import styles from './style';


export default function App() {

    const [corSombraCard, setCorSombraCard] = useState("#fff");
  const [sombraTop, setSombraTop] = useState(-10);

  const Pressionado = () => {
    setCorSombraCard("red");
    setSombraTop(0)
  };

  const solto = () => {
    setCorSombraCard("blue");
     setSombraTop(-10)
  };

  const funcao = () => {
    console.log("Card clicado!");
  };

function addLista() {
  setLista ([...lista, {key: Math.random().toString(), value: numero}]
);

setNumero ('');
}
const GerarSenha = () => {
  setSenha (NewSenha);
  console.log(NewSenha); 


};
  return (
    
    <View style={styles.geral}>
      <Text style={styles.texto}>Escolha um numero de 0 a 9</Text>
      <TextInput
        style={styles.textoInput}
        placeholder="Digite um número"
        keyboardType="numeric" />
    <View style={styles.sombra}>
<Pressable
          style={[styles.card, {top: sombraTop}]}
          onPressIn={Pressionado}
          onPressOut={solto}
          onPress={funcao}
        ><Text style={styles.texto}>Clique Aqui</Text>
        </Pressable>
        </View>

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

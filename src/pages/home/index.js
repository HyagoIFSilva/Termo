import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable, TextInput } from 'react-native';
import { useState } from 'react';

import styles from './style';

export default function App() {
  const [corSombraCard, setCorSombraCard] = useState("#fff");
  const [sombraTop, setSombraTop] = useState(-10);
  const [numero, setNumero] = useState('');
  const [lista, setLista] = useState([]);
  const [senha, setSenha] = useState('');

  const Pressionado = () => {
    setCorSombraCard("red");
    setSombraTop(0);
  };

  const solto = () => {
    setCorSombraCard("blue");
    setSombraTop(-10);
  };

  const funcao = () => {
    console.log("Card clicado!");
  };

  const addLista = () => {
    setLista([...lista, { key: Math.random().toString(), value: numero }]);
    setNumero('');
  };

  const GerarSenha = () => {
    const NewSenha = Math.random().toString(36).slice(-8); 
    setSenha(NewSenha);
    console.log(NewSenha);
  };

  return (
    <View style={styles.geral}>
      <View style={styles.elementos}>
        <Text style={styles.texto}>Escolha um numero de 0 a 9</Text>

        <View style={styles.box}>
          <TextInput
            style={styles.texto}
            value={numero}
            onChangeText={setNumero}
            keyboardType="numeric"
            maxLength={1}
          />
        </View>

        <View style={styles.sombra}>
          <Pressable
            style={[styles.card, { top: sombraTop, backgroundColor: corSombraCard }]}
            onPressIn={Pressionado}
            onPressOut={solto}
            onPress={funcao}
          >
            <Text style={styles.texto}>Clique Aqui</Text>
          </Pressable>
        </View>

        <Pressable style={styles.card} onPress={addLista}>
          <Text style={styles.texto}>Adicionar</Text>
        </Pressable>

        <Pressable style={styles.card} onPress={GerarSenha}>
          <Text style={styles.texto}>Gerar Senha</Text>
        </Pressable>

        <Text style={styles.texto}>Senha: {senha}</Text>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}
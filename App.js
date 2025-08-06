import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable, } from 'react-native';
import { useState } from 'react';
import { TextInput } from 'react-native-web';


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

const styles = StyleSheet.create({
  geral: {
    display: 'flex',
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
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    flex: 1,
    backgroundColor: '#f0f0f0',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    padding: 30,
  },
  box: {
    width: 70,
    height: 70,
    backgroundColor: 'blue',
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 10,
    padding: 2,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  texto:{
    color: 'red',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  textoInput:{
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    width: '80%',
    padding: 10,

  },

   sombra:{
    width:200,
    height:100,
    borderRadius:5,
    backgroundColor:"#00000080",

  },

  card: {
    width:200,
    height:100,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor:"#ccc",
    borderRadius:5
  },
});

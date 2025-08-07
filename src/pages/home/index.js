import { StatusBar } from 'expo-status-bar';
import { Text, View, Pressable, TextInput } from 'react-native';
import { useState, useEffect } from 'react';

import estilos from './style';

export default function Home() {
  const [palpite, setPalpite] = useState('');
  const [palpitesAnteriores, setPalpitesAnteriores] = useState([]);
  const [numeroSecreto, setNumeroSecreto] = useState('');
  const [fimDeJogo, setFimDeJogo] = useState(false);
  const maxTentativas = 6;
  const numDigitos = 4;

  const gerarNumeroSecreto = () => {
    let numero = '';
    while (numero.length < numDigitos) {
      const digito = Math.floor(Math.random() * 10);
      numero += digito;
    }
    setNumeroSecreto(numero);
  };

  useEffect(() => {
    gerarNumeroSecreto();
  }, []);

  const lidarComPalpite = () => {
    if (palpite.length !== numDigitos || fimDeJogo) return;

    const digitosSecretos = numeroSecreto.split('');
    const digitosPalpite = palpite.split('');

    const indicesPosicaoCerta = new Set();
    const indicesPosicaoErrada = new Set();

    for (let i = 0; i < numDigitos; i++) {
      if (digitosPalpite[i] === digitosSecretos[i]) {
        indicesPosicaoCerta.add(i);
      }
    }

    for (let i = 0; i < numDigitos; i++) {
      if (!indicesPosicaoCerta.has(i)) {
        for (let j = 0; j < numDigitos; j++) {
          if (!indicesPosicaoCerta.has(j) && digitosPalpite[i] === digitosSecretos[j] && !indicesPosicaoErrada.has(j)) {
            indicesPosicaoErrada.add(j);
            break;
          }
        }
      }
    }

    const feedback = digitosPalpite.map((digito, index) => {
      let estiloCaixa = estilos.caixaIncorreta;
      if (indicesPosicaoCerta.has(index)) {
        estiloCaixa = estilos.caixaCerta;
      } else if (indicesPosicaoErrada.has(index)) {
        estiloCaixa = estilos.caixaPosicaoErrada;
      }
      return { digito, estilo: estiloCaixa };
    });

    setPalpitesAnteriores([...palpitesAnteriores, feedback]);

    if (palpite === numeroSecreto) {
      setFimDeJogo(true);
      return;
    }

    if (palpitesAnteriores.length + 1 >= maxTentativas) {
      setFimDeJogo(true);
    }

    setPalpite('');
  };

  const lidarComReiniciar = () => {
    setPalpitesAnteriores([]);
    setPalpite('');
    setFimDeJogo(false);
    gerarNumeroSecreto();
  };

  return (
    <View style={estilos.telaPrincipal}>
      <Text style={estilos.textoMensagem}>Adivinhe o Número!</Text>

      <View style={estilos.tabuleiro}>
        {palpitesAnteriores.map((linhaPalpite, indiceLinha) => (
          <View key={indiceLinha} style={estilos.linha}>
            {linhaPalpite.map((caixa, indiceCaixa) => (
              <View key={indiceCaixa} style={[estilos.caixa, caixa.estilo]}>
                <Text style={estilos.textoCaixa}>{caixa.digito}</Text>
              </View>
            ))}
          </View>
        ))}
      </View>

      {!fimDeJogo && (
        <View style={estilos.linhaInput}>
          <TextInput
            style={estilos.entrada}
            onChangeText={texto => setPalpite(texto.replace(/[^0-9]/g, ''))}
            value={palpite}
            keyboardType="numeric"
            maxLength={numDigitos}
            autoFocus
          />
        </View>
      )}

      {fimDeJogo ? (
        <>
          <Text style={estilos.textoMensagem}>
            {palpitesAnteriores[palpitesAnteriores.length - 1].every(t => t.estilo === estilos.caixaCerta) ? 'Você Venceu!' : `Game Over! A senha era: ${numeroSecreto}`}
          </Text>
          <Pressable style={estilos.botao} onPress={lidarComReiniciar}>
            <Text style={estilos.textoBotao}>Reiniciar</Text>
          </Pressable>
        </>
      ) : (
        <Pressable style={estilos.botao} onPress={lidarComPalpite}>
          <Text style={estilos.textoBotao}>Enviar</Text>
        </Pressable>
      )}

      <StatusBar style="auto" />
    </View>
  );
}
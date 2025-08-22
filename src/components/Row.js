
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Tile } from './Tile';
import estilos from '../styles/styles';

const NUM_DIGITOS = 4;

export const Row = ({ palpite, isRevealed, palpiteAtual }) => {
  if (palpiteAtual !== undefined) {
    const letras = palpiteAtual.split('');
    return (
      <View style={estilos.linha}>
        {Array.from({ length: NUM_DIGITOS }).map((_, i) => (
          <View key={i} style={[estilos.caixa, letras[i] && styles.caixaPreenchida]}>
            <Text style={estilos.textoCaixa}>{letras[i]}</Text>
          </View>
        ))}
      </View>
    );
  }

  if (!palpite) {
    return (
      <View style={estilos.linha}>
        {Array.from({ length: NUM_DIGITOS }).map((_, i) => (
          <View key={i} style={[estilos.caixa]} />
        ))}
      </View>
    );
  }

  return (
    <View style={estilos.linha}>
      {palpite.map((caixa, index) => (
        <Tile
          key={index}
          digito={caixa.digito}
          estilo={caixa.estilo}
          index={index}
          isRevealed={isRevealed}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  caixaPreenchida: {
    borderColor: '#888',
  }
});
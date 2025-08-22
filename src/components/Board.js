
import React from 'react';
import { View } from 'react-native';
import { Row } from './Row';
import estilos from '../styles/styles';

const MAX_TENTATIVAS = 6;

export const Board = ({ palpitesAnteriores, palpiteAtual }) => {
  const palpitesFeitos = palpitesAnteriores.map(p => p.feedback);
  const linhaAtual = palpitesAnteriores.length;

  const linhasRestantes = MAX_TENTATIVAS - palpitesFeitos.length - 1;

  return (
    <View style={estilos.tabuleiro}>
      {palpitesFeitos.map((feedback, index) => (
        <Row key={index} palpite={feedback} isRevealed={true} />
      ))}

      {palpitesFeitos.length < MAX_TENTATIVAS && (
        <Row palpiteAtual={palpiteAtual} />
      )}
      
      {linhasRestantes > 0 && Array.from({ length: linhasRestantes }).map((_, index) => (
        <Row key={`empty-${index}`} />
      ))}
    </View>
  );
};


import { StyleSheet } from "react-native";
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';

const CORES = {
  fundo: '#121213',
  branco: '#FFFFFF',
  cinzaClaro: '#3a3a3c',
  cinzaMedio: '#565758',
  cinzaEscuro: '#787c7e',
  verde: '#538d4e',
  amarelo: '#b59f3b',
};



export default StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: CORES.fundo, 
  },
  scrollViewContainer: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
  },
  header: {
    paddingVertical: 20,
  },
  textoMensagem: {
    color: CORES.branco,
    fontSize: moderateScale(24),
    fontWeight: 'bold',
    textAlign: 'center',
  },
  tabuleiro: {
    width: '100%',
    maxWidth: 350,
    alignItems: 'center',
    justifyContent: 'center',
  },
  linha: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 10,
    width: '100%',
  },
  caixa: {
    flex: 1,
    aspectRatio: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 4,
    borderWidth: 2,
    borderColor: CORES.cinzaClaro,
  },
  textoCaixa: {
    fontSize: moderateScale(32),
    fontWeight: 'bold',
    color: CORES.branco,
  },
  containerAcoes: {
    width: '100%',
    alignItems: 'center',
    paddingVertical: 20,
  },
  entrada: {
    width: '80%',
    maxWidth: 280,
    height: 60,
    backgroundColor: CORES.cinzaClaro,
    color: CORES.branco,
    fontSize: moderateScale(32),
    fontWeight: 'bold',
    textAlign: 'center',
    borderWidth: 2,
    borderColor: CORES.cinzaMedio,
    borderRadius: moderateScale(8),
    marginBottom: 20,
  },
  botao: {
    backgroundColor: CORES.cinzaMedio,
    paddingVertical: moderateScale(15),
    paddingHorizontal: moderateScale(40),
    borderRadius: moderateScale(8),
  },
  textoBotao: {
    color: CORES.branco,
    fontSize: moderateScale(18),
    fontWeight: 'bold',
  },
  caixaCerta: {
    backgroundColor: CORES.verde,
    borderColor: CORES.verde,
  },
  caixaPosicaoErrada: {
    backgroundColor: CORES.amarelo,
    borderColor: CORES.amarelo,
  },
  caixaIncorreta: {
    backgroundColor: CORES.cinzaEscuro,
    borderColor: CORES.cinzaEscuro,
  },
});
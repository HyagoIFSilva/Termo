import { StyleSheet } from "react-native";

export default StyleSheet.create({
  telaPrincipal: {
    flex: 1,
    backgroundColor: "#121213",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  tabuleiro: {
    width: "100%",
    alignItems: "center",
  },
  linha: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 10,
  },
  caixa: {
    width: 60,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 5,
    borderWidth: 2,
    borderColor: "#3a3a3c",
  },
  textoCaixa: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#fff",
  },
  linhaInput: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
    marginBottom: 20,
  },
  entrada: {
    width: 250,
    height: 60,
    backgroundColor: "#3a3a3c",
    color: "#fff",
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
    borderWidth: 2,
    borderColor: "#565758",
    marginHorizontal: 5,
    paddingHorizontal: 10,
  },
  botao: {
    backgroundColor: "#565758",
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 5,
    marginTop: 20,
    marginBottom: 10,
  },
  textoBotao: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  textoMensagem: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 20,
  },
  caixaCerta: {
    backgroundColor: "#6aaa64",
    borderColor: "#6aaa64",
  },
  caixaPosicaoErrada: {
    backgroundColor: "#c9b458",
    borderColor: "#c9b458",
  },
  caixaIncorreta: {
    backgroundColor: "#787c7e",
    borderColor: "#787c7e",
  },
});
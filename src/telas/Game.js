
import React, { useState, useEffect, useRef } from 'react';
import { Text, View, Pressable, ScrollView, SafeAreaView, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Board } from '../components/Board';
import { Keyboard } from '../components/Keyboard';
import estilos from '../styles/styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Sharing from 'expo-sharing';
import { Feather } from '@expo/vector-icons';
import { Audio } from 'expo-av';
import * as Haptics from 'expo-haptics';

const MAX_TENTATIVAS = 6;
const NUM_DIGITOS = 4;
const STATS_KEY = '@TermoGame:stats';

export default function GameScreen() {
  const [palpite, setPalpite] = useState('');
  const [palpitesAnteriores, setPalpitesAnteriores] = useState([]);
  const [numeroSecreto, setNumeroSecreto] = useState('');
  const [fimDeJogo, setFimDeJogo] = useState(false);
  const [mensagem, setMensagem] = useState('Adivinhe o Número!');
  const [stats, setStats] = useState({ jogos: 0, vitorias: 0, sequenciaAtual: 0, melhorSequencia: 0 });
  

  const sounds = useRef({
    click: new Audio.Sound(),
    win: new Audio.Sound(),
    lose: new Audio.Sound(),
  });


  useEffect(() => {
    const loadSounds = async () => {
      try {
        await sounds.current.click.loadAsync(require('../../assets/click.mp3'));
        await sounds.current.win.loadAsync(require('../../assets/win.mp3'));
        await sounds.current.lose.loadAsync(require('../../assets/lose.mp3'));
        console.log("Todos os sons carregados com sucesso!");
      } catch (error) {
        console.error("Erro ao carregar os sons:", error);
      }
    };
    loadSounds();

    return () => {
      console.log("Descarregando todos os sons.");
      sounds.current.click.unloadAsync();
      sounds.current.win.unloadAsync();
      sounds.current.lose.unloadAsync();
    };
  }, []);

 
  const loadStats = async () => { try { const statsString = await AsyncStorage.getItem(STATS_KEY); if (statsString !== null) { setStats(JSON.parse(statsString)); } } catch (e) { console.error('Falha ao carregar as estatísticas.', e); } };
  useEffect(() => { loadStats(); gerarNumeroSecreto(); }, []);
  useEffect(() => { const saveStats = async () => { try { await AsyncStorage.setItem(STATS_KEY, JSON.stringify(stats)); } catch (e) { console.error('Falha ao salvar as estatísticas.', e); } }; saveStats(); }, [stats]);
  const gerarNumeroSecreto = () => { let numero = ''; while (numero.length < NUM_DIGITOS) { numero += Math.floor(Math.random() * 10); } console.log("Número Secreto Gerado:", numero); setNumeroSecreto(numero); };

  const lidarComPalpite = () => {
    if (palpite.length !== NUM_DIGITOS || fimDeJogo) return;

    const palpiteArray = palpite.split(''); const secretoArray = numeroSecreto.split(''); const feedback = Array(NUM_DIGITOS).fill(null); const contagemSecreto = {}; secretoArray.forEach(digito => { contagemSecreto[digito] = (contagemSecreto[digito] || 0) + 1; }); for (let i = 0; i < NUM_DIGITOS; i++) { if (palpiteArray[i] === secretoArray[i]) { feedback[i] = { digito: palpiteArray[i], estilo: estilos.caixaCerta }; contagemSecreto[palpiteArray[i]]--; } } for (let i = 0; i < NUM_DIGITOS; i++) { if (feedback[i]) continue; const digitoPalpite = palpiteArray[i]; if (contagemSecreto[digitoPalpite] > 0) { feedback[i] = { digito: digitoPalpite, estilo: estilos.caixaPosicaoErrada }; contagemSecreto[digitoPalpite]--; } else { feedback[i] = { digito: digitoPalpite, estilo: estilos.caixaIncorreta }; } }
    
    const novosPalpites = [...palpitesAnteriores, { guess: palpite, feedback }];
    setPalpitesAnteriores(novosPalpites);

    if (palpite === numeroSecreto) {
      setMensagem('Você Venceu! 🎉');
      setFimDeJogo(true);
 
      sounds.current.win.replayAsync();
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
      setStats(prevStats => { const novaSequencia = prevStats.sequenciaAtual + 1; return { ...prevStats, jogos: prevStats.jogos + 1, vitorias: prevStats.vitorias + 1, sequenciaAtual: novaSequencia, melhorSequencia: Math.max(prevStats.melhorSequencia, novaSequencia), }; });
    } else if (novosPalpites.length >= MAX_TENTATIVAS) {
      setMensagem(`Fim de jogo! O número era: ${numeroSecreto}`);
      setFimDeJogo(true);
  
      sounds.current.lose.replayAsync();
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error);
      setStats(prevStats => ({ ...prevStats, jogos: prevStats.jogos + 1, sequenciaAtual: 0, }));
    }
    
    setPalpite('');
  };

  const lidarComReiniciar = () => { setPalpitesAnteriores([]); setPalpite(''); setFimDeJogo(false); setMensagem('Adivinhe o Número!'); gerarNumeroSecreto(); };
  const handleShare = async () => { const isWinner = palpitesAnteriores[palpitesAnteriores.length - 1]?.guess === numeroSecreto; const title = `Termo Digital - ${isWinner ? palpitesAnteriores.length : 'X'}/${MAX_TENTATIVAS}`; const resultGrid = palpitesAnteriores.map(({ feedback }) => { return feedback.map(tile => { if (tile.estilo === estilos.caixaCerta) return '🟩'; if (tile.estilo === estilos.caixaPosicaoErrada) return '🟨'; return '⬛'; }).join(''); }).join('\n'); const message = `${title}\n\n${resultGrid}`; await Sharing.shareAsync(message); };

  const handleKeyPress = async (key) => {
    await sounds.current.click.replayAsync();
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);

    if (fimDeJogo) return;
    if (key === 'ENTER') {
      lidarComPalpite();
    } else if (key === '⌫') {
      setPalpite(palpite.slice(0, -1));
    } else if (palpite.length < NUM_DIGITOS) {
      setPalpite(palpite + key);
    }
  };

  return (
    <SafeAreaView style={estilos.safeArea}>
      <ScrollView contentContainerStyle={estilos.scrollViewContainer}>
        {}
        <View style={estilos.header}><Text style={estilos.textoMensagem}>{mensagem}</Text></View>
        <View style={localStyles.statsContainer}><View style={localStyles.statBox}><Text style={localStyles.statValue}>{stats.jogos}</Text><Text style={localStyles.statLabel}>Jogos</Text></View><View style={localStyles.statBox}><Text style={localStyles.statValue}>{stats.vitorias}</Text><Text style={localStyles.statLabel}>Vitórias</Text></View><View style={localStyles.statBox}><Text style={localStyles.statValue}>{stats.sequenciaAtual}</Text><Text style={localStyles.statLabel}>Sequência</Text></View></View>
        <Board palpitesAnteriores={palpitesAnteriores} palpiteAtual={palpite} />
        {fimDeJogo && (<View style={localStyles.endGameContainer}><Pressable style={estilos.botao} onPress={lidarComReiniciar}><Text style={estilos.textoBotao}>Novo Jogo</Text></Pressable><Pressable style={[estilos.botao, { backgroundColor: '#538d4e' }]} onPress={handleShare}><Feather name="share-2" size={20} color="white" /></Pressable></View>)}
      </ScrollView>
      {!fimDeJogo && <Keyboard onKeyPress={handleKeyPress} />}
      <StatusBar style="light" />
    </SafeAreaView>
  );
}

const localStyles = StyleSheet.create({
  statsContainer: { flexDirection: 'row', justifyContent: 'space-around', width: '80%', marginBottom: 20, },
  statBox: { alignItems: 'center', },
  statValue: { color: '#fff', fontSize: 22, fontWeight: 'bold', },
  statLabel: { color: '#aaa', fontSize: 12, },
  endGameContainer: { flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 20, gap: 10, },
});
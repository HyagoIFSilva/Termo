

import { StatusBar } from "expo-status-bar";
import GameScreen from './src/telas/Game.js';
export default function App() {
  return (
    <>
      <GameScreen />
      <StatusBar style="light" /> 
    </>
  );
}
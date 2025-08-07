import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import Home from './src/pages/home/index';
import styles from './src/pages/home/style';

export default function App() {
  return (
    <View style={styles.geral}>
      <Home />
      <StatusBar style="auto" />
    </View>
  );
}
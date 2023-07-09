import { StyleSheet, ImageBackground, SafeAreaView } from "react-native";
import StartGamePage from "./Pages/StartGamePage";
import { LinearGradient } from "expo-linear-gradient";
import GamePage from "./Pages/GamePage";
import { useState } from "react";
import GameOverPage from "./Pages/GameOverPage";

export default function App() {
  const [pickedNumber, setPickedNumber] = useState();
  const [isGameOver, setIsGameOver] = useState(false);

  function confirmedNumber(value) {
    setPickedNumber(value);
    setIsGameOver(false);
  }

  function gameOverhandler() {
    setIsGameOver(true);
  }

  let screen = <StartGamePage onConfirmValue={confirmedNumber} />;

  if (pickedNumber) {
    screen = <GamePage userValue={pickedNumber} onGameOver={gameOverhandler} />;
  }
  if (isGameOver && pickedNumber) {
    screen = <GameOverPage />;
  }
  return (
    <LinearGradient colors={["#58A4B0", "#2B303A"]} style={styles.container}>
      <ImageBackground
        source={require("./assets/background.png")}
        resizeMode="cover"
        style={styles.container}
        imageStyle={{ opacity: 0.25 }}
      >
        <SafeAreaView style={styles.container}>{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

import { StyleSheet, ImageBackground, SafeAreaView } from "react-native";
import StartGamePage from "./Pages/StartGamePage";
import { LinearGradient } from "expo-linear-gradient";
import GamePage from "./Pages/GamePage";
import { useState } from "react";
import GameOverPage from "./Pages/GameOverPage";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

export default function App() {
  const [pickedNumber, setPickedNumber] = useState();
  const [isGameOver, setIsGameOver] = useState(false);
  const [guessRound, setGuessRound] = useState(0);

  const [fontLoaded] = useFonts({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });

  if (!fontLoaded) {
    return <AppLoading />;
  }

  function confirmedNumber(value) {
    setPickedNumber(value);
  }

  function gameOverhandler(roundValue) {
    setGuessRound(roundValue);
    setIsGameOver(true);
    console.log(roundValue);
  }

  function newGameHandle() {
    setPickedNumber(null);
    setIsGameOver(false);
    setGuessRound(0);
  }

  let screen = <StartGamePage onConfirmValue={confirmedNumber} />;

  if (pickedNumber) {
    screen = <GamePage userValue={pickedNumber} onGameOver={gameOverhandler} />;
  }
  if (isGameOver && pickedNumber) {
    screen = (
      <GameOverPage
        roundNumber={guessRound}
        userValue={pickedNumber}
        newGameProp={newGameHandle}
      />
    );
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

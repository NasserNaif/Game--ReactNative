import { StyleSheet, ImageBackground, SafeAreaView } from "react-native";
import StartGamePage from "./Pages/StartGamePage";
import { LinearGradient } from "expo-linear-gradient";
import GamePage from "./Pages/GamePage";
import { useState } from "react";

export default function App() {
  const [pickedNumber, setPickedNumber] = useState();

  function confirmedNumber(value) {
    setPickedNumber(value);
  }

  console.log(pickedNumber);
  let screen = <StartGamePage onConfirmValue={confirmedNumber} />;

  if (pickedNumber) {
    screen = <GamePage userValue={pickedNumber} />;
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

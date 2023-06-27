import { StyleSheet, ImageBackground, SafeAreaView } from "react-native";
import StartGamePage from "./Pages/StartGamePage";
import { LinearGradient } from "expo-linear-gradient";
import GamePage from "./Pages/GamePage";
import { useState } from "react";
import Colors from "./util/Colors";

export default function App() {
  const [pickedNumber, setPickedNumber] = useState();

  function confirmedNumber(value) {
    setPickedNumber(value);
  }

  let screen = <StartGamePage onConfirmValue={confirmedNumber} />;

  if (pickedNumber) {
    screen = <GamePage />;
  }
  return (
    <LinearGradient
      colors={[Colors.primaryBlue, "#fff2"]}
      style={styles.container}
    >
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

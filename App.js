import { StyleSheet, ImageBackground } from "react-native";
import StartGamePage from "./Pages/StartGamePage";
import { LinearGradient } from "expo-linear-gradient";

export default function App() {
  return (
    <LinearGradient colors={["#00a6fb", "#fff2"]} style={styles.container}>
      <ImageBackground
        source={require("./assets/background.png")}
        resizeMode="cover"
        style={styles.container}
        imageStyle={{ opacity: 0.25 }}
      >
        <StartGamePage />
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

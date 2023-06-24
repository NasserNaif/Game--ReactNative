import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import StartGamePage from "./Pages/StartGamePage";

export default function App() {
  return (
    <View style={styles.container}>
      <StartGamePage />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e9ecef",
    // alignItems: "center",
    // justifyContent: "center",
  },
});

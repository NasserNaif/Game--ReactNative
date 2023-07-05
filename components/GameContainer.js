import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Colors from "../util/Colors";

const GameContainer = ({ children }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{children}</Text>
    </View>
  );
};

export default GameContainer;

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 7,
    borderLeftWidth: 7,
    borderTopWidth: 0.4,
    borderRightWidth: 0.4,
    borderColor: Colors.secondaryWhite,
    padding: 24,
    margin: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: Colors.secondaryWhite,
    fontSize: 36,
    fontWeight: "900",
  },
});

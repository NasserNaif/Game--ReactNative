import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Title from "../components/Title";

const GamePage = () => {
  return (
    <View style={styles.screen}>
      <Title>Guess chanses</Title>
    </View>
  );
};

export default GamePage;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
  },
});

import { Alert, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import Title from "../components/Title";
import GameContainer from "../components/GameContainer";
import PrimaryBTN from "../components/PrimaryBTN";
import Colors from "../util/Colors";
import Card from "../components/Card";

function generateRandomNumber(min, max, exclude) {
  const rnNum = Math.floor(Math.random() * (max - min)) + min;

  if (rnNum === exclude) {
    return generateRandomNumber(min, max, exclude);
  } else {
    return rnNum;
  }
}
let minBoundary = 1;
let maxBoundary = 100;

const GamePage = ({ userValue, onGameOver }) => {
  console.log("userValue is " + userValue);
  const initialValue = generateRandomNumber(1, 100, userValue);
  const [currentGuessValue, setCurrentGuessValue] = useState(initialValue);

  useEffect(() => {
    if (currentGuessValue == userValue) {
      onGameOver();
    }
  }, [currentGuessValue, userValue, onGameOver]);

  function nextGuessHandler(direction) {
    // direction => Higher or Lower than userValue

    if (
      (direction === "Lower" && currentGuessValue < userValue) ||
      (direction === "Higher" && currentGuessValue > userValue)
    ) {
      Alert.alert("Don't lie ", "you know yhis is wrong...", [
        { text: "Sorry", style: "cancel" },
      ]);

      return;
    }
    if (direction === "Lower") {
      maxBoundary = currentGuessValue;
    } else {
      minBoundary = currentGuessValue + 1;
    }
    const newRandomNumber = generateRandomNumber(
      minBoundary,
      maxBoundary,
      currentGuessValue
    );

    setCurrentGuessValue(newRandomNumber);
  }
  return (
    <View style={styles.screen}>
      <Title>Guess chanses</Title>
      <GameContainer>{currentGuessValue}</GameContainer>
      <View style={styles.container}>
        <Card>
          <Text style={styles.text}>Higher or Lower !</Text>
          <View style={styles.BTNcontainer}>
            <PrimaryBTN onPress={nextGuessHandler.bind(this, "Lower")}>
              -
            </PrimaryBTN>
            <PrimaryBTN onPress={nextGuessHandler.bind(this, "Higher")}>
              +
            </PrimaryBTN>
          </View>
        </Card>
      </View>
    </View>
  );
};

export default GamePage;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
  },

  container: {
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
  },
  BTNcontainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "center",
    padding: 20,
    gap: 15,
  },
  text: {
    fontSize: 30,
    fontWeight: "bold",
    color: Colors.textColor,
  },
});

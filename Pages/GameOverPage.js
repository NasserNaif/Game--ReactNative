import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import Title from "../components/Title";
import Colors from "../util/Colors";
import PrimaryBTN from "../components/PrimaryBTN";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const GameOverPage = ({ newGameProp, roundNumber, userValue }) => {
  return (
    <View style={styles.rootContainer}>
      <Title>Game Over!</Title>
      <View style={styles.imageContainer}>
        <Image
          style={styles.imageStyle}
          source={require("../assets/success.png")}
        />
      </View>
      <Text style={styles.textStyle}>
        your phone toke <Text style={styles.highlightText}>{roundNumber}</Text>{" "}
        rounds to get to <Text style={styles.highlightText}>{userValue}</Text>
      </Text>
      <PrimaryBTN onPress={newGameProp}>
        New Game <MaterialCommunityIcons name="replay" size={20} />
      </PrimaryBTN>
    </View>
  );
};

export default GameOverPage;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    overflow: "hidden",
    borderWidth: 3,
    borderColor: Colors.textColor,
    margin: 32,
  },
  imageStyle: {
    width: "100%",
    height: "100%",
  },
  textStyle: {
    fontSize: 28,
    fontFamily: "open-sans",
    color: Colors.secondaryWhite,
    textAlign: "center",
    marginVertical: 19,
  },
  highlightText: {
    color: Colors.primaryBlue,
    fontFamily: "open-sans-bold",
  },
});

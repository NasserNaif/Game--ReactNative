import {
  StyleSheet,
  View,
  TextInput,
  Alert,
  SafeAreaView,
  Text,
} from "react-native";
import React, { useState } from "react";
import PrimaryBTN from "../components/PrimaryBTN";
import Title from "../components/Title";
import Colors from "../util/Colors";
import Card from "../components/Card";

export default function StartGamePage({ onConfirmValue }) {
  const [inputValue, setInputValue] = useState("");

  const inputHandler = (inputText) => {
    setInputValue(inputText);
  };

  const confirmFun = () => {
    const choseNumber = parseInt(inputValue);
    if (isNaN(choseNumber) || choseNumber <= 0 || choseNumber > 99) {
      Alert.alert("Input Error", "You should input a number between 1 to 99", [
        { text: "Okay", style: "cancel", onPress: resetFun },
      ]);
      return;
    }

    onConfirmValue(choseNumber);
  };

  const resetFun = () => {
    setInputValue("");
  };
  return (
    <SafeAreaView style={styles.rootContainer}>
      <Title>Guess my number </Title>
      <Card>
        <Text style={styles.textStyle}>Enter number </Text>
        <TextInput
          inputMode="numeric"
          keyboardType="number-pad"
          style={styles.inputStyle}
          placeholder="* *"
          maxLength={2}
          value={inputValue}
          onChangeText={inputHandler}
        />
        <View style={styles.buttonContainer}>
          <PrimaryBTN onPress={() => confirmFun()}>Confirm</PrimaryBTN>
          <PrimaryBTN styleBTN="secondary" onPress={() => resetFun()}>
            Reset
          </PrimaryBTN>
        </View>
      </Card>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    alignItems: "center",
    paddingHorizontal: 15,
  },

  textStyle: {
    color: Colors.textColor,
    fontSize: 25,
    fontFamily: "open-sans",
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 20,
    gap: 20,
  },

  inputStyle: {
    width: 100,
    height: 40,
    backgroundColor: "white",
    borderRadius: 7,
    textAlign: "center",
    fontSize: 30,
    color: Colors.textColor,
    borderBottomWidth: 1,
    borderBottomColor: "#00a6fb",
    elevation: 6,
    shadowColor: "black",
    shadowOffset: { width: 1, height: 1 },
    shadowRadius: 1,
    shadowOpacity: 0.2,
  },
});

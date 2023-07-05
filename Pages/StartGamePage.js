import { StyleSheet, View, TextInput, Alert } from "react-native";
import React, { useState } from "react";
import PrimaryBTN from "../components/PrimaryBTN";

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
    <View style={styles.container}>
      <TextInput
        inputMode="numeric"
        style={styles.inputStyle}
        placeholder="Input"
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 100,
    marginHorizontal: 20,
    padding: 40,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15,
    elevation: 6,
  },

  buttonContainer: {
    flexDirection: "row",
    marginTop: 20,
    gap: 20,
  },

  inputStyle: {
    width: "66%",
    height: 40,
    backgroundColor: "white",
    borderRadius: 7,
    textAlign: "center",
    fontSize: 30,
    borderBottomWidth: 1,
    borderBottomColor: "#00a6fb",
    elevation: 6,
    shadowColor: "black",
    shadowOffset: { width: 1, height: 1 },
    shadowRadius: 1,
    shadowOpacity: 0.2,
  },
});

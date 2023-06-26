import { StyleSheet, Text, View, TextInput, StatusBar } from "react-native";
import React from "react";
import PrimaryBTN from "../components/PrimaryBTN";
import SecondaryBTN from "../components/SecondaryBTN";

export default function StartGamePage() {
  return (
    <View style={styles.container}>
      <TextInput
        inputMode="numeric"
        style={styles.inputStyle}
        placeholder="Input"
        maxLength={2}
      />
      <View style={styles.buttonContainer}>
        <PrimaryBTN>Primary</PrimaryBTN>
        <SecondaryBTN>Secondary</SecondaryBTN>
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

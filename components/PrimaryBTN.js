import { Text, Pressable, StyleSheet } from "react-native";
import React from "react";

const PrimaryBTN = ({ children }) => {
  return (
    <Pressable
      android_ripple={{ color: "#ced4da" }}
      style={({ pressed }) =>
        pressed ? [styles.BTN, styles.pressed] : styles.BTN
      }
    >
      <Text style={styles.text}>{children}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  BTN: {
    width: 100,
    height: 50,
    backgroundColor: "#00a6fb",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    elevation: 5,
    shadowColor: "black",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
  },
  text: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },

  pressed: {
    opacity: 0.75,
  },
});

export default PrimaryBTN;

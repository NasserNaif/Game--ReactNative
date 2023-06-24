import { Text, Pressable, StyleSheet } from "react-native";
import React from "react";

const SecondaryBTN = ({ children }) => {
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
    borderRadius: 10,
    alignItems: "center",
    backgroundColor: "white",
    justifyContent: "center",
    borderColor: "#00a6fb",
    borderWidth: 1,
    elevation: 5,
    shadowColor: "black",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
  },
  text: {
    color: "#00a6fb",
    fontSize: 18,
    fontWeight: "bold",
  },

  pressed: {
    opacity: 0.75,
  },
});

export default SecondaryBTN;

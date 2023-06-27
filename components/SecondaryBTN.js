import { Text, Pressable, StyleSheet } from "react-native";
import React from "react";
import Colors from "../util/Colors";

const SecondaryBTN = ({ children, onPress }) => {
  return (
    <Pressable
      android_ripple={{ color: "#ced4da" }}
      style={({ pressed }) =>
        pressed ? [styles.BTN, styles.pressed] : styles.BTN
      }
      onPress={onPress}
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
    backgroundColor: Colors.secondaryWhite,
    justifyContent: "center",
    borderColor: Colors.primaryBlue,
    borderWidth: 1,
    elevation: 5,
    shadowColor: "black",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
  },
  text: {
    color: Colors.primaryBlue,
    fontSize: 18,
    fontWeight: "bold",
  },

  pressed: {
    opacity: 0.75,
  },
});

export default SecondaryBTN;

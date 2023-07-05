import { Text, Pressable, StyleSheet } from "react-native";
import React from "react";
import Colors from "../util/Colors";

const PrimaryBTN = ({ children, onPress, styleBTN }) => {
  const styles = StyleSheet.create({
    primaryBTN: {
      width: "50%",
      height: 50,
      backgroundColor: Colors.primaryBlue,
      borderRadius: 10,
      alignItems: "center",
      justifyContent: "center",
      elevation: 5,
      shadowColor: "black",
      shadowOffset: { width: 2, height: 2 },
      shadowOpacity: 0.3,
      shadowRadius: 6,
    },
    secondaryBTN: {
      width: "50%",
      height: 50,
      borderRadius: 10,
      alignItems: "center",
      backgroundColor: "white",
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
      color:
        styleBTN != "secondary" ? Colors.secondaryWhite : Colors.primaryBlue,
      fontSize: 18,
      fontWeight: "bold",
    },

    pressed: {
      opacity: 0.75,
    },
  });

  return (
    <Pressable
      android_ripple={{ color: "#ced4da" }}
      style={({ pressed }) =>
        pressed
          ? [
              styleBTN !== "secondary"
                ? styles.primaryBTN
                : styles.secondaryBTN,
              styles.pressed,
            ]
          : styleBTN !== "secondary"
          ? styles.primaryBTN
          : styles.secondaryBTN
      }
      onPress={onPress}
    >
      <Text style={styles.text}>{children}</Text>
    </Pressable>
  );
};

export default PrimaryBTN;

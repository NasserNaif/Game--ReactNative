import { StyleSheet, View } from "react-native";
import React from "react";

const Card = ({ children }) => {
  return <View style={styles.card}>{children}</View>;
};

export default Card;

const styles = StyleSheet.create({
  card: {
    height: 200,
    width: "100%",

    marginTop: 50,
    paddingHorizontal: 20,
    paddingVertical: 5,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "space-around",
    borderRadius: 15,
    elevation: 6,
  },
});

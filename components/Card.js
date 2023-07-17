import { StyleSheet, View } from "react-native";
import React from "react";
import Colors from "../util/Colors";

const Card = ({ children }) => {
  return <View style={styles.card}>{children}</View>;
};

export default Card;

const styles = StyleSheet.create({
  card: {
    height: 230,
    width: "100%",
    marginTop: 50,
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "space-around",
    borderRadius: 35,
    borderColor: Colors.textColor,
    borderLeftWidth: 9,
    borderBottomWidth: 4,
    elevation: 6,
    shadowColor: Colors.textColor,
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 3,
  },
});

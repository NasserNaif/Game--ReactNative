import { StyleSheet, Text } from "react-native";
import Colors from "../util/Colors";

export default function Title({ children }) {
  return <Text style={styles.title}>{children}</Text>;
}

const styles = StyleSheet.create({
  title: {
    marginTop: 30,
    fontSize: 30,
    fontFamily: "open-sans-bold",
    color: Colors.secondaryWhite,
    textAlign: "center",
    borderWidth: 3,
    borderColor: "whitesmoke",
    borderRadius: 15,
    padding: 12,
  },
});

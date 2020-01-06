import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { startProximityObserver } from "./src/proximity/proximity-observer";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Huckleberry fin!</Text>
    </View>
  );
}

startProximityObserver();

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});

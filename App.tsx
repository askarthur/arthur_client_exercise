import React from "react";
import { StyleSheet, Text, View } from "react-native";

/**
 *
 * Returns a batch of Random Artworks from the database
 * qty - the quantity or limit of works to return, defaults to 1
 *
 * curl -X GET "https://art.askarthur.co/v1/random_works?qty=1" -H  "accept: application/json"
 *
 */
const REQUEST_URL = `https://art.askarthur.co/v1/random_works?qty=1`;

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Open README.md to get started.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "black",
    fontWeight: "700",
    fontSize: 24,
    textAlign: "center",
    lineHeight: 38,
  },
});

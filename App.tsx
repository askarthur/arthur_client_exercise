import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";

import { IWork } from "./types";
import getRandomWorks from "./getRandomWorks";

export default function App() {
  useEffect(() => {
    // Use the provided endpoint
    getRandomWorks()
      .then((data: IWork[]) => {
        // It will return the data directly on successful responses
        // I've added very loose typings, so that data[0].title will autocomplete for you
        console.info(data);
      })
      .catch((err) => {
        console.warn("Network request failed", err);
      });
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Review README.md {"\n"} Then view your console
      </Text>
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

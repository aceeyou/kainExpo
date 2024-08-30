import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useThemeColor } from "@/hooks/useThemeColor";

const Greetings = () => {
  const color = useThemeColor({ light: "#070713", dark: "#fff" }, "text");

  return (
    <Text style={[styles.text, { color: color }]}>
      Good morning! What's cookin'?
    </Text>
  );
};

export default Greetings;

const styles = StyleSheet.create({
  text: {
    fontFamily: "JetBrainsMonoSemiBold",
    fontSize: 20,
    color: "white",
    paddingTop: 45,
    paddingBottom: 30,
    paddingHorizontal: 15,
  },
});

import { Text } from "react-native";
import React from "react";
import { COLORS } from "@/values/Colors";

export default function Logo() {
  return (
    <Text
      style={{
        color: COLORS.primarylogo,
        padding: 0,
        fontFamily: "KronaOne",
        fontSize: 25,
      }}
    >
      kain
    </Text>
  );
}

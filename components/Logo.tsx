import { Text } from "react-native";
import React from "react";
import { COLORS } from "@/values/Colors";

type LogoProp = {
  size: number;
};

export default function Logo({ size }: LogoProp) {
  return (
    <Text
      style={{
        color: COLORS.primarylogo,
        padding: 0,
        fontFamily: "KronaOne",
        fontSize: size,
        letterSpacing: size > 50 ? -6 : -2,
        backgroundColor: "transparent",
      }}
    >
      kain
    </Text>
  );
}

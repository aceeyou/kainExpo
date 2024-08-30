import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useThemeColor } from "@/hooks/useThemeColor";

export default function Minced() {
  const color = useThemeColor({ light: "#070713", dark: "#fff" }, "text");

  return (
    <View>
      <Text style={{ color: color }}>MincedView</Text>
    </View>
  );
}

const styles = StyleSheet.create({});

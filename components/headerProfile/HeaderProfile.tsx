import { Dimensions, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useThemeColor } from "@/hooks/useThemeColor";
import HeaderLink from "../headerLink/HeaderLink";
import { FontAwesome6, MaterialCommunityIcons } from "@expo/vector-icons";
import { Avatar } from "@rneui/themed";
import BackButton from "../BackButton";

export default function HeaderProfile() {
  const { width } = Dimensions.get("screen");
  const color = useThemeColor({ light: "#070713", dark: "#fff" }, "text");
  const header = useThemeColor({ light: "#fff", dark: "#070713" }, "text");
  return (
    <View style={[styles.header, { backgroundColor: header }]}>
      <Text
        style={{
          color: color,
          // position: "absolute", right: 0
        }}
      >
        Hello
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "transparent",
  },
});

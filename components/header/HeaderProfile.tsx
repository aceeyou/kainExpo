import { StyleSheet, Text, View } from "react-native";
import React from "react";
import HeaderLink from "../headerLink/HeaderLink";
import {
  FontAwesome6,
  Foundation,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { useThemeColor } from "@/hooks/useThemeColor";
import { COLORS } from "@/values/Colors";

export default function HeaderProfile() {
  const color = useThemeColor({ light: "#070713", dark: "#fff" }, "text");

  return (
    <View style={styles.iconContainer}>
      <HeaderLink to="/profile">
        <Foundation name="prohibited" size={30} color={COLORS.primarylogo} />
      </HeaderLink>
      <HeaderLink to="/profile">
        <FontAwesome6 name="circle-plus" size={25} color={color} />
      </HeaderLink>
      <HeaderLink to="/">
        <MaterialCommunityIcons name="heart" size={28} color={color} />
      </HeaderLink>
      <HeaderLink to="/profile" style={{ marginRight: 0 }}>
        <FontAwesome6 name="gear" size={24} color={color} />
      </HeaderLink>
    </View>
  );
}

const styles = StyleSheet.create({
  iconContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
});

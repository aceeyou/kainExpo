import { StyleSheet, Text, useColorScheme, View } from "react-native";
import React from "react";
import HeaderLink from "../headerLink/HeaderLink";
import {
  FontAwesome6,
  Foundation,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { useThemeColor } from "@/hooks/useThemeColor";
import { Colors } from "@/constants/Colors";

export default function HeaderProfile() {
  const color = useThemeColor({ light: "#070713", dark: "#fff" }, "text");
  const theme =
    useColorScheme() === "light" ? { ...Colors.light } : { ...Colors.dark };

  return (
    <View style={styles.iconContainer}>
      <HeaderLink to="(profile)">
        <Foundation name="prohibited" size={30} color={Colors.orange} />
      </HeaderLink>
      <HeaderLink to="(profile)">
        <FontAwesome6 name="circle-plus" size={25} color={theme.icon} />
      </HeaderLink>
      <HeaderLink to="/">
        <MaterialCommunityIcons name="heart" size={28} color={theme.icon} />
      </HeaderLink>
      <HeaderLink to="/(auth)" style={{ marginRight: 0 }}>
        <FontAwesome6 name="gear" size={24} color={theme.icon} />
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

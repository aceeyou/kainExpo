import { StyleSheet, Text, View } from "react-native";
import React from "react";
import HeaderLink from "../headerLink/HeaderLink";
import { FontAwesome6, MaterialCommunityIcons } from "@expo/vector-icons";
import { Avatar } from "@rneui/themed";
import { useThemeColor } from "@/hooks/useThemeColor";

export default function HeaderShortcuts() {
  const color = useThemeColor({ light: "#070713", dark: "#fff" }, "text");

  return (
    <View style={styles.iconContainer}>
      <HeaderLink to="/profile">
        <FontAwesome6 name="bag-shopping" size={18} color={color} />
      </HeaderLink>
      <HeaderLink to="/">
        <MaterialCommunityIcons name="heart" size={22} color={color} />
      </HeaderLink>
      <HeaderLink to="/profile" style={{ marginRight: 0 }}>
        <Avatar
          rounded
          size={35}
          source={{ uri: "https://picsum.photos/200" }}
        />
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

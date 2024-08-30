import { StyleSheet, useColorScheme, View } from "react-native";
import React from "react";
import HeaderLink from "../headerLink/HeaderLink";
import { FontAwesome6, MaterialCommunityIcons } from "@expo/vector-icons";
import { Avatar } from "@rneui/themed";
import { Colors } from "@/constants/Colors";

export default function HeaderShortcuts() {
  const theme =
    useColorScheme() === "light" ? { ...Colors.light } : { ...Colors.dark };

  return (
    <View style={styles.iconContainer}>
      <HeaderLink to="(profile)">
        <FontAwesome6 name="bag-shopping" size={18} color={theme.icon} />
      </HeaderLink>
      <HeaderLink to="/">
        <MaterialCommunityIcons name="heart" size={22} color={theme.icon} />
      </HeaderLink>
      <HeaderLink to="(profile)" style={{ marginRight: 0 }}>
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

import { StyleSheet, Text, View } from "react-native";
import { SearchBar } from "@rneui/themed";
import React, { useState } from "react";
import { COLORS } from "../values/Colors";
import { useThemeColor } from "@/hooks/useThemeColor";
import { FontAwesome6 } from "@expo/vector-icons";

export default function SearchBarForm() {
  const [search, setSearch] = useState("");
  const color = useThemeColor({ light: "#070713", dark: "#fff" }, "text");
  const searchBg = useThemeColor({ dark: "#151526", light: "#f1f1f1" }, "text");

  const handleUpdateSearchQuery = (e: any) => {
    setSearch(e);
  };
  return (
    <SearchBar
      containerStyle={{
        backgroundColor: "transparent",
        borderColor: color,
        borderWidth: 0,
        paddingHorizontal: 15,
        borderBottomColor: "transparent",
        borderTopColor: "transparent",
      }}
      inputContainerStyle={{
        backgroundColor: searchBg,
      }}
      placeholder="Search for a recipe..."
      onChange={handleUpdateSearchQuery}
      value={search}
      round
      leftIconContainerStyle={{ paddingLeft: 8 }}
      rightIcon={<FontAwesome6 name="magnifying-glass" color="white" />}
    />
  );
}

const styles = StyleSheet.create({});

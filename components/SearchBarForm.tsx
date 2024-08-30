import React, { useState } from "react";
import { StyleSheet, Text, useColorScheme, View } from "react-native";
import { SearchBar } from "@rneui/themed";
import { FontAwesome6 } from "@expo/vector-icons";
import { Colors } from "@/constants/Colors";

export default function SearchBarForm() {
  const [search, setSearch] = useState("");
  const theme =
    useColorScheme() === "light" ? { ...Colors.light } : { ...Colors.dark };

  const handleUpdateSearchQuery = (e: any) => {
    setSearch(e);
  };
  return (
    <SearchBar
      containerStyle={{
        backgroundColor: "transparent",
        borderWidth: 0,
        paddingHorizontal: 15,
        borderBottomColor: "transparent",
        borderTopColor: "transparent",
        borderColor: "transparent",
      }}
      inputContainerStyle={{
        backgroundColor: theme.inputBG,
      }}
      inputStyle={{ fontSize: 14, fontFamily: "Outfit" }}
      selectionColor={Colors.orange}
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

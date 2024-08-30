import {
  Dimensions,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from "react-native";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { Colors } from "@/constants/Colors";
import Recipe from "./Recipe";
import { Sizes } from "@/constants/Sizes";

export default function DiscoverRecipes({ recipes }: any) {
  const theme =
    useColorScheme() === "light" ? { ...Colors.light } : { ...Colors.dark };

  const numColumns = 2;
  const gap = 0;
  const screenWidth = Dimensions.get("window").width;
  const availableSpace = screenWidth - 40 - (numColumns - 1) * gap;
  const itemSize = availableSpace / numColumns;

  return (
    <View>
      <View style={styles.titleContainer}>
        <Text style={[styles.title, { color: theme.text }]}>Discover</Text>
        <TouchableOpacity>
          <MaterialIcons name="filter-list" size={20} color={theme.icon} />
        </TouchableOpacity>
      </View>
      <FlatList
        data={recipes}
        numColumns={2}
        contentContainerStyle={{ gap }}
        columnWrapperStyle={{ gap, marginBottom: 8 }}
        renderItem={({ item }) => <Recipe recipe={item} itemSize={itemSize} />}
        ListFooterComponent={() => <View style={{ height: itemSize }} />}
        key={numColumns}
        style={{ paddingHorizontal: Sizes.marginHorizontal, width: "100%" }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
    paddingHorizontal: Sizes.marginHorizontal,
  },
  title: {
    fontSize: 16,
    fontFamily: "OutfitSemiBold",
  },
});

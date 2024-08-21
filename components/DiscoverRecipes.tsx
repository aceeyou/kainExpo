import {
  Dimensions,
  FlatList,
  SectionList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { useThemeColor } from "@/hooks/useThemeColor";
import Recipe from "./Recipe";

const popularRecipes = [
  {
    id: 1,
    recipe: "Adobo",
    source: "https://picsum.photos/500",
    owner: "aceeyou",
    cookTime: 1.5,
  },
  {
    id: 2,
    recipe: "Fried Chicken",
    source: "https://picsum.photos/500",
    owner: "aceeyou",
    cookTime: 1.5,
  },
  {
    id: 3,
    recipe: "Ice Cream",
    source: "https://picsum.photos/500",
    owner: "aceeyou",
    cookTime: 1.5,
  },
  {
    id: 4,
    recipe: "Java Rice",
    source: "https://picsum.photos/500",
    owner: "aceeyou",
    cookTime: 1.5,
  },
  {
    id: 5,
    recipe: "Samgyeupsal Pork BBQ",
    source: "https://picsum.photos/500",
    owner: "aceeyou",
    cookTime: 1.5,
  },
];

export default function DiscoverRecipes({ recipes }: any) {
  const color = useThemeColor({ light: "#070713", dark: "#fff" }, "text");

  const numColumns = 2;
  const gap = 0;
  const screenWidth = Dimensions.get("window").width;
  const availableSpace = screenWidth - 40 - (numColumns - 1) * gap;
  const itemSize = availableSpace / numColumns;

  return (
    <View>
      <View style={styles.titleContainer}>
        <Text style={[styles.title, { color: color }]}>Discover</Text>
        <TouchableOpacity>
          <MaterialIcons name="filter-list" size={20} color={color} />
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
        style={{ paddingHorizontal: 20, width: "100%" }}
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
    paddingHorizontal: 23,
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
  },
});

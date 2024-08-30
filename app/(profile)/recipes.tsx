import { Dimensions, FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useThemeColor } from "@/hooks/useThemeColor";
import Recipe from "../../components/Recipe";

const RECIPES = [
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
  {
    id: 6,
    recipe: "Samgyeupsal Pork BBQ",
    source: "https://picsum.photos/500",
    owner: "aceeyou",
    cookTime: 1.5,
  },
  {
    id: 7,
    recipe: "Samgyeupsal Pork BBQ",
    source: "https://picsum.photos/500",
    owner: "aceeyou",
    cookTime: 1.5,
  },
  {
    id: 8,
    recipe: "Samgyeupsal Pork BBQ",
    source: "https://picsum.photos/500",
    owner: "aceeyou",
    cookTime: 1.5,
  },
  {
    id: 9,
    recipe: "Samgyeupsal Pork BBQ",
    source: "https://picsum.photos/500",
    owner: "aceeyou",
    cookTime: 1.5,
  },
  {
    id: 10,
    recipe: "Samgyeupsal Pork BBQ",
    source: "https://picsum.photos/500",
    owner: "aceeyou",
    cookTime: 1.5,
  },
  {
    id: 11,
    recipe: "Samgyeupsal Pork BBQ",
    source: "https://picsum.photos/500",
    owner: "aceeyou",
    cookTime: 1.5,
  },
  {
    id: 12,
    recipe: "Samgyeupsal Pork BBQ",
    source: "https://picsum.photos/500",
    owner: "aceeyou",
    cookTime: 1.5,
  },
];

export default function Recipes() {
  const color = useThemeColor({ light: "#070713", dark: "#fff" }, "text");

  const recipes = [...RECIPES];
  const numColumns = 2;
  const gap = 0;
  const screenWidth = Dimensions.get("window").width;
  const availableSpace = screenWidth - 40 - (numColumns - 1) * gap;
  const itemSize = availableSpace / numColumns;

  return (
    <View>
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

const styles = StyleSheet.create({});

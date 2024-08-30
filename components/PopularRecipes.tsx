import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  SectionList,
  useColorScheme,
} from "react-native";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { Colors } from "@/constants/Colors";
import { Sizes } from "@/constants/Sizes";
import Recipe from "./Recipe";

const DATA = [
  {
    title: "recipes",
    data: [
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
    ],
  },
];

const numColumns = 2;
const gap = 8;

export default function PopularRecipes() {
  const screenWidth = Dimensions.get("window").width;
  const theme =
    useColorScheme() === "light" ? { ...Colors.light } : { ...Colors.dark };

  const availableSpace = screenWidth - 40 - (numColumns - 1) * gap;
  const itemSize = availableSpace / numColumns;
  return (
    <View style={{ width: screenWidth, marginBottom: 25 }}>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 10,
          paddingHorizontal: Sizes.marginHorizontal,
        }}
      >
        <Text
          style={{
            color: theme.text,
            fontSize: 16,
            fontFamily: "OutfitSemiBold",
          }}
        >
          Popular
        </Text>
        <TouchableOpacity>
          <MaterialIcons name="filter-list" size={20} color={theme.text} />
        </TouchableOpacity>
      </View>
      <SectionList
        sections={DATA}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => <Recipe recipe={item} itemSize={itemSize} />}
        renderSectionHeader={() => <View />}
        renderSectionFooter={() => <View style={{ width: 100 }} />}
        keyExtractor={(item) => item.recipe}
        style={{ paddingHorizontal: Sizes.marginHorizontal }}
      />
    </View>
  );
}

const styles = StyleSheet.create({});

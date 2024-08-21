import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  SectionList,
} from "react-native";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { useThemeColor } from "@/hooks/useThemeColor";
import { LinearGradient } from "expo-linear-gradient";
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

const Item = ({ recipe, itemSize }: any) => (
  <TouchableOpacity style={[styles.recipeContainer, { width: itemSize }]}>
    <LinearGradient
      // Background Linear Gradient
      colors={["transparent", "transparent", "rgba(0,0,0,0.8)"]}
      style={styles.overlay}
    />
    <Image source={{ uri: recipe.source }} style={styles.image} />
    <View style={styles.recipeInfoContainer}>
      <Text style={styles.recipeName}>{recipe.recipe}</Text>
      <Text style={styles.recipeOwner}>@{recipe.owner}</Text>
    </View>
    <View style={styles.recipeCookTime}>
      <MaterialIcons name="av-timer" size={16} color={"white"} />
      <Text style={{ color: "white", fontSize: 18, fontWeight: "700" }}>
        {recipe.cookTime}hrs
      </Text>
    </View>
  </TouchableOpacity>
);

const numColumns = 2;
const gap = 8;

export default function PopularRecipes() {
  const screenWidth = Dimensions.get("window").width;
  const color = useThemeColor({ light: "#070713", dark: "#fff" }, "text");

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
          paddingHorizontal: 23,
        }}
      >
        <Text style={{ color: color, fontSize: 16, fontWeight: 600 }}>
          Popular
        </Text>
        <TouchableOpacity>
          <MaterialIcons name="filter-list" size={20} color={color} />
        </TouchableOpacity>
      </View>
      <SectionList
        sections={DATA}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => <Recipe recipe={item} itemSize={itemSize} />}
        renderSectionHeader={() => <View />}
        // renderSectionFooter={() => <View style={{ width: 100 }} />}
        keyExtractor={(item) => item.recipe}
        style={{ paddingHorizontal: 20 }}
      />
      {/* <FlatList
        data={popularRecipes}
        numColumns={2}
        contentContainerStyle={{ gap }}
        columnWrapperStyle={{ gap }}
        renderItem={({ item }) => <Item recipe={item} itemSize={itemSize} />}
        key={numColumns}
        style={{ paddingHorizontal: 20 }}
      /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  image: { width: "100%", height: 215 },
  recipeContainer: {
    marginRight: 8,
    position: "relative",
    borderRadius: 5,
    overflow: "hidden",
  },
  overlay: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 1,
  },
  recipeInfoContainer: {
    position: "absolute",
    bottom: 10,
    left: 10,
    right: 10,
    zIndex: 10,
  },
  recipeName: {
    color: "white",
    fontSize: 18,
    fontWeight: "600",
    fontFamily: "JetBrainsMono",
  },
  recipeOwner: {
    color: "white",
    fontSize: 14,
    opacity: 0.8,
  },
  recipeCookTime: {
    position: "absolute",
    top: 6,
    right: 8,
    color: "white",
    fontSize: 14,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    opacity: 0.8,
  },
});

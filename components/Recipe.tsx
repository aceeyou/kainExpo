import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialIcons } from "@expo/vector-icons";
import { Text } from "@rneui/themed";

export default function Recipe({ recipe, itemSize }: any) {
  return (
    <TouchableOpacity style={[styles.recipeContainer, { width: itemSize }]}>
      <LinearGradient
        // Background Linear Gradient
        colors={["transparent", "transparent", "rgba(0,0,0,0.8)"]}
        style={styles.overlay}
      />
      <Image source={{ uri: recipe.source }} style={styles.image} />
      <View style={styles.recipeInfoContainer}>
        <Text h1 h1Style={{ fontSize: 18 }} style={styles.recipeName}>
          {recipe.recipe}
        </Text>
        <Text h2 h2Style={{ fontSize: 14 }} style={styles.recipeOwner}>
          @{recipe.owner}
        </Text>
      </View>
      <View style={styles.recipeCookTime}>
        <MaterialIcons name="av-timer" size={16} color={"white"} />
        <Text style={{ color: "white", fontSize: 18, fontWeight: "700" }}>
          {recipe.cookTime}hrs
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  image: { width: "100%", height: 215 },
  recipeContainer: {
    marginRight: 8,
    position: "relative",
    borderRadius: 5,
    overflow: "hidden",
    // marginBottom: 8,
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

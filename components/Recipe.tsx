import {
  Image,
  Platform,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
} from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialIcons } from "@expo/vector-icons";
import { Colors } from "@/constants/Colors";

export default function Recipe({ recipe, itemSize }: any) {
  return (
    // Change to touchable without feedback maybe to get rid of the opacity of the button when clicked
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
        <Text style={styles.recipeCookTimeText}>{recipe.cookTime}h</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  image: { width: "100%", height: Platform.OS === "android" ? 250 : 215 },
  recipeContainer: {
    marginRight: 8,
    position: "relative",
    borderRadius: 5,
    overflow: "hidden",
    minHeight: Platform.OS === "android" ? 250 : 215,
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
    color: Colors.cold_white,
    fontSize: 18,
    fontFamily: "JetBrainsMonoSemiBold",
  },
  recipeOwner: {
    color: Colors.cold_white,
    fontSize: 14,
    fontFamily: "Outfit",
    opacity: 0.8,
  },
  recipeCookTime: {
    position: "absolute",
    top: 6,
    right: 8,
    color: Colors.cold_white,
    fontSize: 14,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    opacity: 0.8,
  },
  recipeCookTimeText: {
    color: Colors.cold_white,
    fontSize: 14,
    fontFamily: "OutfitSemiBold",
  },
});

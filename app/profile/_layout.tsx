import { StyleSheet } from "react-native";
import React from "react";
import { Stack } from "expo-router";

export default function Profile() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" options={{ headerTitle: "Profile" }} />
      <Stack.Screen name="Posts" options={{ headerTitle: "Posts" }} />
      <Stack.Screen name="Minced" options={{ headerTitle: "Minced" }} />
    </Stack>
  );
}
const styles = StyleSheet.create({});

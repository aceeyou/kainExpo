import React from "react";
import { Stack } from "expo-router";

export default function Profile() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" options={{ headerTitle: "Profile" }} />
      <Stack.Screen name="recipes" options={{ headerTitle: "Posts" }} />
      <Stack.Screen name="minced" options={{ headerTitle: "Minced" }} />
    </Stack>
  );
}

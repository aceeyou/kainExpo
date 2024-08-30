import React from "react";
import { Stack } from "expo-router";

export default function Profile() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" options={{ headerTitle: "Auth" }} />
      <Stack.Screen name="register" options={{ headerTitle: "Register" }} />
      <Stack.Screen name="forgot" />
    </Stack>
  );
}

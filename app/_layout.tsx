import React, { useEffect } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Stack } from "expo-router";
import { useFonts } from "expo-font";
import { KronaOne_400Regular as KronaOne } from "@expo-google-fonts/krona-one";
import {
  JetBrainsMono_400Regular as JetBrainsMono,
  JetBrainsMono_600SemiBold as JetBrainsMonoSemiBold,
} from "@expo-google-fonts/jetbrains-mono";
import {
  Outfit_400Regular as Outfit,
  Outfit_600SemiBold as OutfitSemiBold,
  Outfit_700Bold as OutfitBold,
} from "@expo-google-fonts/outfit";
import * as SplashScreen from "expo-splash-screen";
import "react-native-reanimated";

import BackButton from "@/components/BackButton";
import HeaderHome from "@/components/header/HeaderHome";
import HeaderProfile from "@/components/header/HeaderProfile";
import Logo from "@/components/Logo";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "react-native";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const theme =
    useColorScheme() === "light" ? { ...Colors.light } : { ...Colors.dark };
  const [loaded, error] = useFonts({
    KronaOne,
    JetBrainsMono,
    JetBrainsMonoSemiBold,
    Outfit,
    OutfitSemiBold,
    OutfitBold,
    // Roboto,
    // RobotoMedium,
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return (
    <SafeAreaProvider>
      <Stack
        screenOptions={{
          // headerShown: false,
          headerBlurEffect: "regular",
          headerTransparent: false,
          headerStyle: {
            backgroundColor: theme.appBG,
            // backgroundColor: "#f5f5f5dd",
          },
          headerShadowVisible: false,
        }}
      >
        <Stack.Screen
          name="index"
          options={{
            headerTitle: "",
            headerLeft: () => <Logo size={25} />,
            headerRight: () => <HeaderHome />,
          }}
        />
        <Stack.Screen
          name="(profile)"
          options={{
            headerTitle: "",
            headerBackVisible: false,
            headerLeft: () => <BackButton color="black" />,
            headerRight: () => <HeaderProfile />,
          }}
        />
        <Stack.Screen
          name="(auth)"
          options={{ headerTitle: "Login", headerShown: false }}
        />
        <Stack.Screen
          name="recipe/[id]"
          options={{ headerTitle: "Recipe", headerShown: false }}
        />
      </Stack>
    </SafeAreaProvider>
  );
}

import { SafeAreaProvider } from "react-native-safe-area-context";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import "react-native-reanimated";

import { useColorScheme } from "@/hooks/useColorScheme";
import BackButton from "@/components/BackButton";
import HeaderHome from "@/components/header/HeaderHome";
import HeaderProfile from "@/components/header/HeaderProfile";
import Logo from "@/components/Logo";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <SafeAreaProvider>
      <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
        <Stack
          screenOptions={{
            // headerShown: false,
            headerBlurEffect: "regular",
            headerTransparent: false,
            headerStyle: {
              backgroundColor: colorScheme === "dark" ? "#070713" : "#fff",
            },
            headerShadowVisible: false,
          }}
        >
          <Stack.Screen
            name="index"
            options={{
              headerTitle: "",
              headerLeft: () => <Logo />,
              headerRight: () => <HeaderHome />,
            }}
          />
          <Stack.Screen
            name="profile"
            options={{
              headerTitle: "",
              headerBackVisible: false,
              headerLeft: () => <BackButton color="black" />,
              headerRight: () => <HeaderProfile />,
            }}
          />
          <Stack.Screen name="header" options={{ headerTitle: "Header" }} />
          <Stack.Screen name="+not-found" />
        </Stack>
      </ThemeProvider>
    </SafeAreaProvider>
  );
}

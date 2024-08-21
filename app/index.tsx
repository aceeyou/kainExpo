import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { FlatList, SafeAreaView, ScrollView, Text, View } from "react-native";
import { useHeaderHeight } from "@react-navigation/elements";
import { Link } from "expo-router";
import { useFonts } from "expo-font";
import { useEffect } from "react";
import * as SplashScreen from "expo-splash-screen";
import Greetings from "@/components/Greetings";
import SearchBarForm from "@/components/SearchBarForm";
import Filter from "@/components/Filter";
import PopularRecipes from "@/components/PopularRecipes";
import { useThemeColor } from "@/hooks/useThemeColor";
import DiscoverRecipes from "@/components/DiscoverRecipes";
import Header from "@/components/header/Header";

const DATA = [{}];
const RECIPES = [
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

function App() {
  const headerHeight = useHeaderHeight();
  const color = useThemeColor({ light: "#070713", dark: "#fff" }, "text");
  const bgColor = useThemeColor({ light: "#fff", dark: "#070713" }, "text");
  const [loaded, error] = useFonts({
    KronaOne: require("../assets/fonts/KronaOne.ttf"),
    Roboto: require("../assets/fonts/RobotoFlex.ttf"),
    Outfit: require("../assets/fonts/Outfit.ttf"),
    JetBrainsMono: require("../assets/fonts/JetBrainsMono.ttf"),
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
    <SafeAreaView
      style={{ backgroundColor: bgColor }}
      // contentInsetAdjustmentBehavior="automatic"
    >
      <FlatList
        showsVerticalScrollIndicator={false}
        keyboardDismissMode="interactive"
        ListHeaderComponent={<Greetings />}
        data={DATA}
        renderItem={() => (
          <>
            <SearchBarForm />
            <Filter />
            <PopularRecipes />
            <DiscoverRecipes recipes={RECIPES[0].data} />
          </>
        )}
      />
    </SafeAreaView>
  );
}

export default App;

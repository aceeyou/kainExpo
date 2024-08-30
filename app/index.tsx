import { FlatList, SafeAreaView, useColorScheme } from "react-native";
import React from "react";
import Greetings from "@/components/Greetings";
import SearchBarForm from "@/components/SearchBarForm";
import Filter from "@/components/Filter";
import PopularRecipes from "@/components/PopularRecipes";
import { useThemeColor } from "@/hooks/useThemeColor";
import DiscoverRecipes from "@/components/DiscoverRecipes";
import { Colors } from "@/constants/Colors";

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
  const theme =
    useColorScheme() === "light" ? { ...Colors.light } : { ...Colors.dark };

  return (
    <SafeAreaView style={{ backgroundColor: theme.appBG }}>
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

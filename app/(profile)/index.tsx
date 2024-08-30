import {
  Dimensions,
  FlatList,
  StyleSheet,
  useColorScheme,
  View,
} from "react-native";
import React, { useState } from "react";
import UserInfoCard from "@/components/profile/UserInfoCard";
import ProfileTabs from "@/components/tabs/ProfileTabs";
import Recipe from "@/components/Recipe";
import { Colors } from "@/constants/Colors";

const RECIPES = [
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
  {
    id: 6,
    recipe: "Samgyeupsal Pork BBQ",
    source: "https://picsum.photos/500",
    owner: "aceeyou",
    cookTime: 1.5,
  },
  {
    id: 7,
    recipe: "Samgyeupsal Pork BBQ",
    source: "https://picsum.photos/500",
    owner: "aceeyou",
    cookTime: 1.5,
  },
  {
    id: 8,
    recipe: "Samgyeupsal Pork BBQ",
    source: "https://picsum.photos/500",
    owner: "aceeyou",
    cookTime: 1.5,
  },
  {
    id: 9,
    recipe: "Samgyeupsal Pork BBQ",
    source: "https://picsum.photos/500",
    owner: "aceeyou",
    cookTime: 1.5,
  },
  {
    id: 10,
    recipe: "Samgyeupsal Pork BBQ",
    source: "https://picsum.photos/500",
    owner: "aceeyou",
    cookTime: 1.5,
  },
  {
    id: 11,
    recipe: "Samgyeupsal Pork BBQ",
    source: "https://picsum.photos/500",
    owner: "aceeyou",
    cookTime: 1.5,
  },
  {
    id: 12,
    recipe: "Samgyeupsal Pork BBQ",
    source: "https://picsum.photos/500",
    owner: "aceeyou",
    cookTime: 1.5,
  },
];

const MINCED = [
  {
    id: 1,
    recipe: "Adobo Video",
    source: "https://picsum.photos/500",
    owner: "aceeyou",
    cookTime: 1.5,
  },
  {
    id: 2,
    recipe: "Ice Cream",
    source: "https://picsum.photos/500",
    owner: "aceeyou",
    cookTime: 1.5,
  },
  {
    id: 4,
    recipe: "Samgyeupsal Pork BBQ",
    source: "https://picsum.photos/500",
    owner: "aceeyou",
    cookTime: 1.5,
  },
  {
    id: 6,
    recipe: "Samgyeupsal Pork BBQ",
    source: "https://picsum.photos/500",
    owner: "aceeyou",
    cookTime: 1.5,
  },
  {
    id: 8,
    recipe: "Samgyeupsal Pork BBQ",
    source: "https://picsum.photos/500",
    owner: "aceeyou",
    cookTime: 1.5,
  },
  {
    id: 9,
    recipe: "Samgyeupsal Pork BBQ",
    source: "https://picsum.photos/500",
    owner: "aceeyou",
    cookTime: 1.5,
  },
  {
    id: 11,
    recipe: "Samgyeupsal Pork BBQ",
    source: "https://picsum.photos/500",
    owner: "aceeyou",
    cookTime: 1.5,
  },
  {
    id: 12,
    recipe: "Samgyeupsal Pork BBQ",
    source: "https://picsum.photos/500",
    owner: "aceeyou",
    cookTime: 1.5,
  },
];

export enum CustomTab {
  Tab1,
  Tab2,
}

type PropTypess = {
  selectedTab: number;
  setSelectedTab: (index: number) => void;
};

function ListHeader({ selectedTab, setSelectedTab }: PropTypess) {
  return (
    <View>
      <UserInfoCard />
      <ProfileTabs selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
    </View>
  );
}

export default function index() {
  const theme =
    useColorScheme() === "light" ? { ...Colors.light } : { ...Colors.dark };
  const [selectedTab, setSelectedTab] = useState<CustomTab>(CustomTab.Tab1);

  const recipes = selectedTab === 0 ? [...RECIPES] : [...MINCED];
  const numColumns = 2;
  const gap = 0;
  const screenWidth = Dimensions.get("window").width;
  const availableSpace = screenWidth - 40 - (numColumns - 1) * gap;
  const itemSize = availableSpace / numColumns;

  // const handleGetSelectedTab = (index: number) => {
  //   setActiveTab(index);
  // };

  return (
    <View style={{ backgroundColor: theme.appBG }}>
      <FlatList
        data={recipes}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ gap }}
        columnWrapperStyle={{ gap, marginBottom: 8 }}
        ListHeaderComponent={
          <ListHeader
            selectedTab={selectedTab}
            setSelectedTab={setSelectedTab}
          />
        }
        renderItem={({ item }) => <Recipe recipe={item} itemSize={itemSize} />}
        ListFooterComponent={<View style={{ height: itemSize }} />}
        key={numColumns}
        style={{ paddingHorizontal: 16, width: "100%", height: "auto" }}
      />
    </View>
  );
}

const styles = StyleSheet.create({});

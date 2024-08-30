import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { Link } from "expo-router";
import { Colors } from "@/constants/Colors";

const filterList = [
  "All",
  "Pork",
  "Veggies",
  "Chicken",
  "Burger",
  "Potato",
  "Ice cream",
  "Cold",
];

const Item = ({ children, handleFilter, activeFilter }: any) => {
  return (
    <Link href="/" asChild>
      <TouchableOpacity
        onPress={() => handleFilter(children)}
        style={{
          paddingVertical: 4,
          paddingHorizontal: 12,
          backgroundColor:
            activeFilter === children ? Colors.orange : Colors.cold_white,
          marginRight: 6,
          borderWidth: 0,
          borderRadius: 3,
        }}
      >
        <Text
          style={{
            fontFamily: activeFilter === children ? "OutfitSemiBold" : "Outfit",
            fontSize: 14,
            color:
              activeFilter === children ? Colors.white : Colors.textInactive,
            lineHeight: 20,
          }}
        >
          {children}
        </Text>
      </TouchableOpacity>
    </Link>
  );
};

export default function Filter() {
  const [activeFilter, setActiveFilter] = useState("All");
  const handleChangeFilter = (filter: string) => {
    setActiveFilter(filter);
  };
  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      data={filterList}
      renderItem={({ item }) => (
        <Item handleFilter={handleChangeFilter} activeFilter={activeFilter}>
          {item}
        </Item>
      )}
      ListFooterComponent={<View style={{ width: 100 }} />}
      keyExtractor={(item) => item}
      style={{ paddingLeft: 25, paddingTop: 20, paddingBottom: 25 }}
    />
  );
}

const styles = StyleSheet.create({});

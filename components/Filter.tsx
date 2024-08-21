import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { COLORS } from "../values/Colors";
import { Link } from "expo-router";

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
    <Link href="/profile" asChild>
      <TouchableOpacity
        onPress={() => handleFilter(children)}
        style={{
          paddingVertical: 6,
          paddingHorizontal: 12,
          backgroundColor:
            activeFilter === children ? COLORS.primarylogo : "#fdfdfd",
          marginRight: 6,
          borderWidth: 0,
          borderRadius: 3,
        }}
      >
        <Text
          style={{
            fontSize: 16,
            color: activeFilter === children ? "white" : "#000",
            fontWeight: activeFilter === children ? "600" : "400",
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
      keyExtractor={(item) => item}
      style={{ paddingLeft: 25, paddingTop: 20, paddingBottom: 25 }}
    />
  );
}

const styles = StyleSheet.create({});

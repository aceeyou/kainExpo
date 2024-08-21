import { StyleSheet } from "react-native";
import React from "react";
import { FontAwesome6 } from "@expo/vector-icons";
import { Button } from "@rneui/themed";
import { router } from "expo-router";

type ButtonProp = {
  color: string | "white" | "black";
};

export default function BackButton({ color }: ButtonProp) {
  return (
    <Button
      onPress={() => router.back()}
      radius={"sm"}
      type="solid"
      buttonStyle={{ backgroundColor: "#eeeeeeaa" }}
    >
      <FontAwesome6 name="arrow-left" size={16} color={color} />
    </Button>
  );
}

const styles = StyleSheet.create({});

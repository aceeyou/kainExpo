import { StyleSheet, View } from "react-native";
import React, { useState } from "react";
import UserInfoCard from "@/components/profile/UserInfoCard";
import { useThemeColor } from "@/hooks/useThemeColor";

export default function index() {
  const [index, setIndex] = useState(0);
  const color = useThemeColor({ light: "#070713", dark: "#fff" }, "text");

  return (
    <View>
      <UserInfoCard />
      {/* 

        TODO

        [] Tab navigation with animation
        [] Tab Views
         
      */}
    </View>
  );
}

const styles = StyleSheet.create({});

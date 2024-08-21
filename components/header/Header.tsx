import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { FontAwesome6, MaterialCommunityIcons } from "@expo/vector-icons";
import { Avatar } from "@rneui/base";
import { ThemedText } from "../ThemedText";
import { useThemeColor } from "@/hooks/useThemeColor";
import { COLORS } from "../../values/Colors";
import { Link } from "expo-router";
import HeaderLink from "../headerLink/HeaderLink";

type headerProps = {
  style: {
    string: any;
  };
  title: string;
  leftButton: any;
};

type headerLinkProps = {
  children: any;
  style?: any | null;
};

const Header = () => {
  const { width } = Dimensions.get("screen");
  const color = useThemeColor({ light: "#070713", dark: "#fff" }, "text");
  const header = useThemeColor({ light: "#fff", dark: "#070713" }, "text");
  return (
    <View
      style={[
        styles.header,
        { width: width - 35, backgroundColor: header, zIndex: 9 },
      ]}
    >
      <Text
        style={{
          color: COLORS.primarylogo,
          padding: 0,
          fontFamily: "KronaOne",
          fontSize: 25,
        }}
      >
        kain
      </Text>
      <View style={styles.iconContainer}>
        <HeaderLink to="/profile">
          <FontAwesome6 name="bag-shopping" size={18} color={color} />
        </HeaderLink>
        <HeaderLink to="/">
          <MaterialCommunityIcons name="heart" size={22} color={color} />
        </HeaderLink>
        <HeaderLink to="/profile" style={{ marginRight: 0 }}>
          <Avatar
            rounded
            size={35}
            source={{ uri: "https://picsum.photos/200" }}
          />
        </HeaderLink>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 5,
    backgroundColor: "transparent",
  },
  iconContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
});

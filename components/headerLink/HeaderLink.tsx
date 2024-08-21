import { TouchableOpacity } from "react-native";
import React from "react";
import { Link } from "expo-router";

type headerLinkProps = {
  children: any;
  style?: any | null;
  to: string;
};

export default function HeaderLink({
  children,
  style = {},
  to,
}: headerLinkProps) {
  return (
    <Link href={to} style={[{ marginRight: 15, zIndex: 4 }, style]}>
      {children}
    </Link>
  );
}

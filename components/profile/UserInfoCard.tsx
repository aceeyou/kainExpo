import { StyleSheet, TouchableHighlight, View } from "react-native";
import React from "react";
import { useThemeColor } from "@/hooks/useThemeColor";
import { Avatar, Button, Text } from "@rneui/themed";
import { COLORS } from "@/values/Colors";

export default function UserInfoCard() {
  const color = useThemeColor({ light: "#070713", dark: "#fff" }, "text");

  return (
    <View style={styles.cardContainer}>
      <View style={styles.userInfoTop}>
        <Avatar
          rounded
          size={80}
          source={{ uri: "https://picsum.photos/200" }}
        />
        <View style={styles.userInfoTopRight}>
          <Text
            h1
            h1Style={{
              fontSize: 20,
              fontWeight: "700",
              fontFamily: "RobotoFlex",
            }}
            style={[{ color: color }]}
          >
            Ace Logronio
          </Text>
          <View style={styles.userhandleEditContainer}>
            <View style={styles.userhandle}>
              <Text style={[{ color: COLORS.primarybg, fontSize: 12 }]}>
                @aceeyou
              </Text>
            </View>
            <View style={styles.userEditButton}>
              <Button
                type="solid"
                radius={"md"}
                buttonStyle={{
                  backgroundColor: "#ddd",
                  paddingVertical: 4,
                }}
              >
                <Text
                  style={[
                    {
                      color: COLORS.primarybg,
                      fontSize: 12,
                      fontWeight: "500",
                    },
                  ]}
                >
                  Edit Profile
                </Text>
              </Button>
            </View>
          </View>
          <View>
            <Text style={[{ color: color, fontSize: 12 }]}>
              32 recipes • 143 followers
            </Text>
          </View>
        </View>
      </View>
      <View>
        <Text style={[styles.userbio, { color: color }]}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio id
          fugit nostrum repudiandae qui culpa?
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    marginHorizontal: 23,
  },
  userInfoTop: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 18,
  },
  userInfoTopRight: {
    marginLeft: 18,
    flex: 1,
  },
  userhandleEditContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignSelf: "stretch",
    alignItems: "center",
    width: "auto",
    padding: 0,
    paddingVertical: 1,
  },
  userhandle: {
    marginRight: "auto",
    backgroundColor: "#FEBC2E",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 20,
  },
  userEditButton: {
    // width: 80,
    paddingVertical: 4,
    marginLeft: "auto",
  },
  userbio: {
    paddingBottom: 20,
    fontFamily: "Roboto",
    fontSize: 16,
    lineHeight: 20,
  },
});

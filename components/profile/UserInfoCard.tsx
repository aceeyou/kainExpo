import React from "react";
import { StyleSheet, useColorScheme, View } from "react-native";
import { Avatar, Button, Text } from "@rneui/themed";
import { Colors } from "@/constants/Colors";

export default function UserInfoCard() {
  const theme =
    useColorScheme() === "light" ? { ...Colors.light } : { ...Colors.dark };

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
              fontFamily: "OutfitSemiBold",
            }}
            style={[{ color: theme.text }]}
          >
            Ace Logronio
          </Text>
          <View style={styles.userhandleEditContainer}>
            <View style={styles.userhandle}>
              <Text
                style={[
                  {
                    color: Colors.primaryText,
                    fontSize: 12,
                    fontFamily: "Outfit",
                  },
                ]}
              >
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
                      color: Colors.primaryText,
                      fontSize: 12,
                      fontFamily: "Outfit",
                    },
                  ]}
                >
                  Edit Profile
                </Text>
              </Button>
            </View>
          </View>
          <View>
            <Text
              style={[
                { color: theme.text, fontSize: 12, fontFamily: "Outfit" },
              ]}
            >
              32 recipes • 143 followers
            </Text>
          </View>
        </View>
      </View>
      <View>
        <Text style={[styles.userbio, { color: theme.text }]}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio id
          fugit nostrum repudiandae qui culpa?
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    // marginHorizontal: 23,
  },
  userInfoTop: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 18,
    marginBottom: 25,
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
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 20,
    backgroundColor: Colors.yellow,
  },
  userEditButton: {
    paddingVertical: 4,
    marginLeft: "auto",
  },
  userbio: {
    paddingBottom: 40,
    fontFamily: "Outfit",
    fontSize: 16,
    lineHeight: 20,
  },
});

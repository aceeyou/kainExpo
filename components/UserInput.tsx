import {
  Platform,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { Colors } from "@/constants/Colors";
import { Sizes } from "@/constants/Sizes";
import { MaterialCommunityIcons } from "@expo/vector-icons";

type UserInputType = {
  control: any;
  name: string;
  error: any;
  errorText: string;
};

export default function UserInput({
  control,
  name,
  error,
  errorText,
}: UserInputType) {
  const [invisiblePW, setInvisiblePW] = useState(true);
  return (
    <>
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) =>
          name === "password" || name === "confirmPW" ? (
            <View
              style={{
                position: "relative",
              }}
            >
              <TextInput
                style={styles.input}
                placeholder={
                  name === "confirmPW"
                    ? "Confirm Password"
                    : name.charAt(0).toLocaleUpperCase() + name.slice(1)
                }
                placeholderTextColor={Colors.placeholder}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                secureTextEntry={invisiblePW}
                selectionColor={Colors.primarylogo}
              />
              <View
                style={{
                  position: "absolute",
                  top: Platform.OS === "android" ? 32 : 21,
                  right: 18,
                }}
              >
                <Pressable
                  style={{ zIndex: 9, padding: 2 }}
                  onPress={() => setInvisiblePW((cur) => !cur)}
                >
                  {invisiblePW ? (
                    <MaterialCommunityIcons
                      name="eye-off-outline"
                      color={Colors.placeholder}
                      size={Platform.OS === "android" ? 25 : 20}
                    />
                  ) : (
                    <MaterialCommunityIcons
                      name="eye-outline"
                      color={Colors.textInactive}
                      size={Platform.OS === "android" ? 25 : 20}
                    />
                  )}
                </Pressable>
              </View>
            </View>
          ) : (
            <TextInput
              style={styles.input}
              placeholder={
                name === "confirmPW"
                  ? "Confirm Password"
                  : name.charAt(0).toLocaleUpperCase() + name.slice(1)
              }
              placeholderTextColor={Colors.placeholder}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              selectionColor={Colors.primarylogo}
            />
          )
        }
        name={name}
      />
      {error && <Text style={styles.errorText}>{errorText}</Text>}
    </>
  );
}

const styles = StyleSheet.create({
  input: {
    paddingVertical: 12,
    paddingHorizontal: 18,
    marginTop: 12,
    backgroundColor: Colors.cold_white,
    borderRadius: Sizes.inputRadius,
    fontSize: 16,
    fontFamily: "Outfit",
    elevation: 1,
  },
  errorText: {
    color: Colors.textError,
    marginTop: 3,
    alignSelf: "flex-end",
  },
});

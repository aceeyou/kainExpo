import {
  KeyboardAvoidingView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TouchableOpacity,
  Platform,
  ScrollView,
  SafeAreaView,
} from "react-native";
import React, { useState } from "react";
import { Colors } from "@/constants/Colors";
import Logo from "@/components/Logo";
import { Sizes } from "@/constants/Sizes";
import { SubmitHandler, useForm, Controller } from "react-hook-form";
import UserInput from "@/components/UserInput";
import { Link } from "expo-router";

type Inputs = {
  name: string;
  email: string;
  password: string;
  confirmPW: string;
};

export default function Register() {
  const theme =
    useColorScheme() === "light" ? { ...Colors.light } : { ...Colors.dark };
  const [errorMsg, setErrorMsg] = useState("Error message");
  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{
        paddingTop: StatusBar.currentHeight + 120,
        flex: 1,
        backgroundColor: theme.appBG,
      }}
    >
      <ScrollView keyboardDismissMode="interactive">
        <View
          style={{
            alignSelf: "center",
            paddingBottom: 60,
          }}
        >
          <Logo size={60} />
        </View>

        {/* FORM */}
        <View style={styles.formContainer}>
          <Text style={[styles.formTitle, { color: theme.text }]}>
            Create Account
          </Text>
          <Text style={[styles.formDescription, { color: theme.text }]}>
            The kain app is designed for you to store privately or share
            delicious recipes to other users on the kain app. Create an account
            now and start collecting recipes!
          </Text>

          {/* Form Inputs */}
          <View>
            <UserInput
              control={control}
              name="name"
              error={errors.name}
              errorText="Name"
            />
            <UserInput
              control={control}
              name="email"
              error={errors.email}
              errorText="Email"
            />
            <UserInput
              control={control}
              name="password"
              error={errors.password}
              errorText="Password"
            />
            <UserInput
              control={control}
              name="confirmPW"
              error={errors.confirmPW}
              errorText="Confirm Password"
            />
            <TouchableOpacity
              style={styles.submitButton}
              onPress={handleSubmit(onSubmit)}
            >
              <Text style={styles.submitButtonText}>Create Account</Text>
            </TouchableOpacity>
            <View style={styles.loginButtonLink}>
              <Link href="/(auth)/">
                <Text style={[{ color: Colors.secondaryText }]}>
                  Log in instead
                </Text>
              </Link>
            </View>
          </View>
          <Text style={{ color: theme.text }}>{watch("name")}</Text>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  formContainer: {
    marginHorizontal: Sizes.inputHorizontalMargin,
  },
  formTitle: {
    fontFamily: "OutfitBold",
    fontSize: 23,
  },
  formDescription: {
    fontSize: 14,
    lineHeight: 16,
    marginTop: 3,
    marginBottom: 10,
  },
  submitButton: {
    marginTop: 25,
    backgroundColor: Colors.orange,
    paddingVertical: 12,
    alignItems: "center",
    borderRadius: Sizes.inputRadius,
  },
  submitButtonText: {
    fontSize: 20,
    fontFamily: "OutfitSemiBold",
    lineHeight: 22,
    color: Colors.cold_white,
  },
  loginButtonLink: {
    alignSelf: "center",
    marginTop: 20,
  },
});

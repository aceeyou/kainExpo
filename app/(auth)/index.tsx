import {
  Button,
  Image,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import Logo from "@/components/Logo";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { Link } from "expo-router";
import { COLORS } from "@/values/Colors";
import { MEASURES } from "@/values/Measure";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useThemeColor } from "@/hooks/useThemeColor";
import { Sizes } from "@/constants/Sizes";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "react-native";

type Inputs = {
  email: string;
  password: string;
};

export default function index() {
  const theme =
    useColorScheme() === "light" ? { ...Colors.light } : { ...Colors.dark };

  const [invisiblePW, setInvisiblePW] = useState(true);
  const [emailFormErrorText, setEmailFormErrorText] = useState(
    "Email is not in the database. Try again"
  );
  const [pwFormErrorText, setPWFormErrorText] = useState(
    "Email is not in the database. Try again"
  );
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);
  return (
    <KeyboardAvoidingView
      style={{
        paddingTop: StatusBar.currentHeight + 120,
        backgroundColor: theme.appBG,
        flex: 1,
      }}
    >
      <View
        style={{
          alignSelf: "center",
          paddingBottom: 50,
        }}
      >
        <Logo size={60} />
      </View>

      {/* LOGIN FORM */}
      <View>
        <View>
          {/* <Text>Email</Text> */}
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                style={styles.input}
                placeholder="Email"
                placeholderTextColor={Colors.placeholder}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                selectionColor={Colors.orange}
              />
            )}
            name="email"
          />
          {errors.email && (
            <Text style={styles.errorText}>{emailFormErrorText}</Text>
          )}
          {/* <Text>Password</Text> */}
          <Controller
            control={control}
            rules={{
              required: true,
              minLength: 8,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <View
                style={{
                  position: "relative",
                }}
              >
                <TextInput
                  style={styles.input}
                  placeholder="Password"
                  placeholderTextColor={Colors.placeholder}
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  secureTextEntry={invisiblePW}
                  selectionColor={Colors.orange}
                />
                <View
                  style={{
                    position: "absolute",
                    top: Platform.OS === "android" ? 32 : 28,
                    right: 50,
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
            )}
            name="password"
          />
          {errors.password && (
            <Text style={styles.errorText}>{pwFormErrorText}</Text>
          )}
          <View>
            <View style={[styles.formLinks, styles.formLinksForgot]}>
              <Link href="/(auth)/forgot">
                <Text
                  style={[styles.formButtonsText, styles.formLinkForgotText]}
                >
                  Forgot password?
                </Text>
              </Link>
            </View>
            <Pressable
              onPress={handleSubmit(onSubmit)}
              style={styles.submitButton}
            >
              <Text style={[styles.formButtonsText, styles.submitButtonText]}>
                Login
              </Text>
            </Pressable>
            <View style={[styles.formLinks, styles.formLinksRegister]}>
              <Link href="/(auth)/register">
                <Text
                  style={[
                    styles.formButtonsText,
                    styles.formLinkRegisterText,
                    { color: theme.text },
                  ]}
                >
                  Create Account
                </Text>
              </Link>
            </View>
          </View>
          <View style={styles.imageContainer}>
            <Image source={require("@/assets/images/login-illus.png")} />
          </View>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  errorText: {
    color: Colors.textError,
    marginTop: 5,
    marginHorizontal: Sizes.inputHorizontalMargin,
  },
  formLinks: {
    marginHorizontal: Sizes.inputHorizontalMargin,
  },
  formLinksForgot: {
    alignItems: "flex-end",
    marginTop: 5,
    marginBottom: 20,
  },
  formLinksRegister: {
    alignItems: "center",
    marginTop: 20,
  },
  formLinkForgotText: {
    fontFamily: "Outfit",
    color: Colors.secondaryText,
    lineHeight: 20,
  },
  formLinkRegisterText: {
    fontFamily: "Outfit",
    fontSize: 16,
  },
  input: {
    paddingVertical: 12,
    paddingHorizontal: 18,
    marginHorizontal: Sizes.inputHorizontalMargin,
    marginTop: 20,
    backgroundColor: Colors.cold_white,
    borderRadius: Sizes.inputRadius,
    fontSize: 16,
    fontFamily: "Outfit",
    elevation: 1,
  },
  formButtonsText: {
    color: "white",
    marginHorizontal: Sizes.inputHorizontalMargin,
  },
  submitButton: {
    backgroundColor: Colors.orange,
    marginHorizontal: Sizes.inputHorizontalMargin,
    paddingVertical: 12,
    alignItems: "center",
    borderRadius: Sizes.inputRadius,
  },
  submitButtonText: {
    fontSize: 20,
    fontFamily: "OutfitSemiBold",
    lineHeight: 22,
  },
  imageContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: Platform.OS === "ios" ? 40 : 80,
  },
});

// import { useColorScheme } from "react-native";
// const isLightMode = useColorScheme() === "light";

const lightModeStyles = {
  icon: "#070713",
  text: "#070713",
  description: "#413C58",
  appBG: "#f5f5f5",
  inputBG: "#fff",
  formSectionBG: "#FDFDFD",
  formSectionInputBG: "#EBEFF2",
  accordionArrowBG: "#E0E2E3",
  separator: "#E0E0E0",
};

const darkModeStyles = {
  icon: "#f5f5f5",
  text: "#f5f5f5",
  description: "#EBEFF2",
  appBG: "#070713",
  inputBG: "#151526",
  formSectionBG: "#11103A",
  formSectionInputBG: "#070713",
  accordionArrowBG: "#3B3651",
  separator: "#333745",
};

export const Colors = {
  primarylogo: "#FF4A1C",
  primaryText: "#070713",
  secondaryText: "#758BFD",
  textError: "#FF4A1C",
  recipeStepNumBG: "#413C58",
  placeholder: "#bdbdbd",
  textInactive: "#A6A9B3",
  addMinusBtnBG: "#682827",
  backButtonBG: "#dfdfdf85",
  red: "#E04255",
  yellow: "#FEBC2E",
  orange: "#FF4A1C",
  white: "#f5f5f5",
  cold_white: "#fff",
  light: { ...lightModeStyles },
  dark: { ...darkModeStyles },
};

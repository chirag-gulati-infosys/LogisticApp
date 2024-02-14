import { StyleSheet } from "react-native";
import fonts from "./fonts";

// Default native base theme custom styling does not work for android hence creating a custom stylesheet.
const androidCustomFonts = StyleSheet.create({
  100: {
    fontFamily: fonts.families.light,
  },
  200: {
    fontFamily: fonts.families.light,
  },
  300: {
    fontFamily: fonts.families.light,
  },
  400: {
    fontFamily: fonts.families.regular,
  },
  500: {
    fontFamily: fonts.families.medium,
  },
  600: {
    fontFamily: fonts.families.bold,
  },
  700: {
    fontFamily: fonts.families.bold,
  },
  800: {
    fontFamily: fonts.families.bold,
  },
  900: {
    fontFamily: fonts.families.bold,
  },
  950: {
    fontFamily: fonts.families.semibold,
  },
});

export default androidCustomFonts;

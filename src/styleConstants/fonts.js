import { Platform } from "react-native";
import { DH, DW } from "../utils/dynamicHeightWidth";

const fonts = {};

// Font families
fonts.families = {
  light: "Poppins-Light",
  light_italic: "Poppins-LightItalic",
  regular: "Poppins-Regular",
  italic: "Poppins-Italic",
  medium: "Poppins-Medium",
  medium_italic: "Poppins-MediumItalic",
  bold_italic: "Poppins-BoldItalic",
  bold: "Poppins-Bold",
  semibold: "Poppins-SemiBold",
};

// Font sizes is only body text and not for title
fonts.sizes = {
  verylarge: DW(24),
  large: DW(20),
  normal: DW(16),
  medium: DW(15),
  regular: DW(14),
  small: DW(13),
  verySmall: DW(12),
  extraLarge: DW(38),
};

export default fonts;

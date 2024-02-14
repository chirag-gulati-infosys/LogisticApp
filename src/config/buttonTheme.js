import androidCustomFonts from "../styleConstants/androidCustomFonts";
import { isAndroid } from "../utils/utils";

export const button_theme = {
  baseStyle: {
    rounded: "3xl",
  },
  defaultProps: {
    colorScheme: "brand.400",
    _text: {
      fontSize: "md",
      fontFamily: "body",
      fontStyle: "normal",
    },
  },

  variants: {
    drivePrimary: () => {
      return {
        bgColor: "button_theme.300",
        _text: {
          color: "text.1200",
          fontWeight: isAndroid() ? androidCustomFonts[600] : 600,
        },
        _pressed: {
          borderColor: "button_theme.1200",
          bg: "button_theme.1200",
        },
      };
    },
    driveSecondary: () => {
      return {
        bgColor: "view_theme.300",
        _text: {
          color: "brand.50",
          fontWeight: "600",
        },
        _pressed: {
          bg: "rgba(0,0,0, 0.8)",
        },
      };
    },
    driveWhite: () => {
      return {
        borderColor: "brand.100",
        borderWidth: "1",
        _text: {
          color: "brand.100",
          fontWeight: isAndroid() ? androidCustomFonts[600] : 600,
        },
      };
    },
    driveBlue: () => {
      return {
        bgColor: "brand.1000",
        _text: {
          color: "black",
          fontWeight: isAndroid() ? androidCustomFonts[600] : 600,
        },
        _pressed: {
          borderColor: "button_theme.1200",
          bg: "button_theme.1200",
        },
      };
    },
    driveDisabled: () => {
      return {
        bgColor: "trueGray.300",
        _text: {
          color: "text.900",
          fontWeight: isAndroid() ? androidCustomFonts[600] : 600,
        },
      };
    },
    driveOutline: ({ colorScheme }) => {
      let color;
      let borderColor;

      switch (colorScheme) {
        case "blue":
          color = "brand.1000";
          borderColor = "brand.100";
          break;

        case "gray":
          color = "brand.100";
          borderColor = "brand.100";
          break;
        case "black":
          color = "brand.100";
          borderColor = "view_theme.300";

        default:
          color = "button_theme.900";
          borderColor = "button_theme.900";
          break;
      }

      return {
        borderColor: borderColor,
        borderWidth: "1",
        // _text: {
        //   color: color,
        //   fontWeight: "bold",
        // },
      };
    },
    driveLink: () => {
      return {
        rounded: "none",
        _text: {
          textDecorationLine: "underline",
          color: "text.1200",
        },
      };
    },
    driveUnstyled: () => {
      return {
        bgColor: "brand.50",
        _text: {
          color: "view_theme.300",
        },
      };
    },
  },
};

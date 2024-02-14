import { extendTheme } from "native-base";
import { Platform } from "react-native";
import { color } from "react-native-reanimated";
import colors from "../styleConstants/colors.js";
import fonts from "../styleConstants/fonts.js";
import { button_theme as Button } from "./buttonTheme.js";
import androidCustomFonts from "../styleConstants/androidCustomFonts";

const theme = extendTheme({
  fontSizes: {
    "1xs": fonts.sizes.verySmall,
    "1sm": fonts.sizes.small,
    "1md": fonts.sizes.medium,
    "4xl1": fonts.sizes.extraLarge,
  },
  colors: {
    button_theme: {
      50: colors.btn_dark_grey,
      100: colors.btn_dark_blue,
      200: colors.blue_gradient,
      300: colors.primary_green,
      400: colors.btn_medium_blue,
      500: colors.credited_bg,
      600: colors.expired_bg,
      700: colors.light_pink,
      800: colors.true_grey,
      900: colors.background_black,
      1000: colors.button_grey,
      1100: colors.roundTrip_buttonbg,
      1200: colors.button_pressed,
    },
    view_theme: {
      50: colors.default_view_background,
      100: colors.radius_grey,
      200: colors.warm_grey,
      300: colors.background_black,
      400: colors.view_background_blue,
      500: colors.view_background_gold,
      600: colors.view_background_silver,
      700: colors.view_background_bronze,
      800: colors.light_gray,
      900: colors.view_background_alert,
      1000: colors.bronze_light,
      1100: colors.silver_light,
      1200: colors.gold_light,
      1300: colors.platinum_light,
      1400: colors.light_gold,
      1500: colors.light_silver,
      1600: colors.light_platinum,
    },
    brand: {
      50: colors.secondary,
      100: colors.btn_border_gray,
      200: colors.primary_gray,
      250: colors.secondary_red,
      300: colors.screen_background_grey,
      400: colors.primary_red,
      500: colors.txt_gray_light,
      800: colors.divider_grey,
      900: colors.txt_gray_dark,
      1000: colors.primary_green,
      1100: colors.reward_bg_grey,
      1200: colors.progress_green,
      1300: colors.platinum_color,
    },
    radio: {
      50: colors.background_black,
      100: colors.background_black,
      200: colors.light_medium_gray,
      300: colors.btn_border_gray,
    },
    text: {
      100: colors.placeholder_color,
      200: colors.txt_gray_heading,
      300: colors.warning_orange,
      400: colors.success_green,
      500: colors.txt_white,
      600: colors.txt_Error,
      700: colors.accepted_green,
      800: colors.load_requirement_bgcolor,
      900: colors.disabled_gray,
      1000: colors.credited_green,
      1100: colors.expired_orange,
      1200: colors.background_black,
      1300: colors.placeholder_grey,
    },
    text_theme: {
      50: colors.btn_dark_grey,
      100: colors.light_blue,
      300: colors.txt_disabled_grey,
      400: colors.txt_dropdown_grey,
      500: colors.load_requirement_text,
      600: colors.drop_red,
      700: colors.bidblack,
      800: colors.text_dark_grey,
      900: colors.platinum,
      1000: colors.platinum_secondary,
      1100: colors.gold_secondary,
      1200: colors.gold,
      1300: colors.silver,
      1400: colors.silver_secondary,
      1500: colors.bronze,
      1600: colors.bronze_secondary,
    },
    screen_bg: {
      50: colors.listbg,
      100: colors.counterofferbg,
      200: colors.bidapprovebg,
      300: colors.reward_bg_grey,
      400: colors.truegray,
      500: colors.findloads_bg,
      600: colors.bgcolor_gray,
      700: colors.txt_gray,
      800: colors.bidunderreview_bg,
      900: colors.bidexpired_bg,
      1000: colors.reject_bg,
      1100: colors.certificateBanner_blue,
    },
  },
  fontConfig: {
    Poppins: {
      100: {
        normal: fonts.families.light,
        italic: fonts.families.light_italic,
      },
      200: {
        normal: fonts.families.light,
        italic: fonts.families.light_italic,
      },
      300: {
        normal: fonts.families.light,
        italic: fonts.families.light_italic,
      },
      400: {
        normal: fonts.families.regular,
        italic: fonts.families.italic,
      },
      500: {
        normal: fonts.families.medium,
      },
      600: {
        normal: fonts.families.medium,
        italic: fonts.families.medium_italic,
      },
      700: {
        normal: fonts.families.bold,
      },
      800: {
        normal: fonts.families.bold,
        italic: fonts.families.bold_italic,
      },
      900: {
        normal: fonts.families.bold,
        italic: fonts.families.bold_italic,
      },
    },
  },
  fonts: {
    body: "Poppins",
  },
  components: {
    Pressable: {
      variants: {
        drivePrimary: () => {
          return {
            bgColor: "brand.400",
            _text: { color: "black" },
          };
        },
        driveSecondary: () => {
          return {
            bgColor: "view_theme.300",
          };
        },
        driveBlue: () => {
          return {
            bgColor: "brand.400",
          };
        },
        driveBlack: () => {
          return {
            bgColor: "view_theme.300",
          };
        },
        driveWhite: () => {
          return {
            rounded: "md",
            bgColor: "brand.50",
          };
        },
      },
    },
    Button,
    Input: {
      baseStyle: {
        _disabled: {
          opacity: "40",
        },
        _invalid: {
          borderColor: "danger.600",
        },
      },
      defaultProps: {
        _light: {
          borderColor: "brand.100",
          placeholderTextColor: "muted.400",
          bgColor: "brand.50",
          color: "muted.800",
        },
      },
    },

    Radio: {
      baseStyle: {
        borderWidth: "2",

        _light: {
          _text: {
            color: "text_theme.700",
            fontSize: "md",
            fontWeight: "semibold",
            fontFamily: "body",
            fontStyle: "normal",
            marginLeft: "3",
          },
          borderColor: "radio.300",

          _checked: {
            borderColor: "radio.50",
            _icon: {
              color: "radio.50",
            },
            _text: {
              color: "text_theme.700",
              fontSize: "md",
              fontWeight: "semibold",
              fontFamily: "body",
              fontStyle: "normal",
            },

            _pressed: {
              borderColor: "radio.50",
              _icon: {
                color: "radio.50",
              },
            },
          },
        },
        defaultProps: {
          defaultIsChecked: false,
          size: "md",
        },
      },
    },
    Text: {
      defaultProps: {
        color: "view_theme.300",
      },
      baseStyle: {
        fontSize: "1md",
        fontWeight: "normal",
        fontFamily: "Poppins-Regular",
        fontStyle: "normal",
      },
      variants: {
        bold1md: () => {
          return {
            ...(Platform.OS == "ios"
              ? {
                  fontWeight: "600",
                }
              : androidCustomFonts[600]),
            fontSize: "1md",
          };
        },
        boldmd: () => {
          return {
            ...(Platform.OS == "ios"
              ? {
                  fontWeight: "600",
                }
              : androidCustomFonts[600]),
            fontSize: "md",
          };
        },
        boldmd500: () => {
          return {
            ...(Platform.OS == "ios"
              ? {
                  fontWeight: "600",
                }
              : androidCustomFonts[950]),
            fontSize: "md",
          };
        },
        bold_md: () => {
          return {
            ...(Platform.OS == "ios"
              ? {
                  fontWeight: "600",
                }
              : androidCustomFonts[950]),
            fontSize: "md",
          };
        },
        boldsm: () => {
          return {
            ...(Platform.OS == "ios"
              ? {
                  fontWeight: "semibold",
                }
              : androidCustomFonts[950]),
            fontSize: "sm",
          };
        },
        boldxl: () => {
          return {
            ...(Platform.OS == "ios"
              ? {
                  fontWeight: "600",
                }
              : androidCustomFonts[600]),
            fontSize: "xl",
          };
        },
        boldlg: () => {
          return {
            ...(Platform.OS == "ios"
              ? {
                  fontWeight: "600",
                }
              : androidCustomFonts[600]),
            fontSize: "lg",
          };
        },
        boldlg500: () => {
          return {
            ...(Platform.OS == "ios"
              ? {
                  fontWeight: "500",
                }
              : androidCustomFonts[500]),
            fontSize: "lg",
          };
        },
        extraboldlg: () => {
          return {
            ...(Platform.OS == "ios"
              ? {
                  fontWeight: "700",
                }
              : androidCustomFonts[700]),
            fontSize: "18px",
          };
        },
        boldxlg: () => {
          return {
            ...(Platform.OS == "ios"
              ? {
                  fontWeight: "600",
                }
              : androidCustomFonts[600]),
            fontSize: "24px",
          };
        },
        semiboldlg: () => {
          return {
            ...(Platform.OS == "ios"
              ? {
                  fontWeight: "600",
                }
              : androidCustomFonts[950]),
            fontSize: "lg",
          };
        },
        semiboldxlg: () => {
          return {
            ...(Platform.OS == "ios"
              ? {
                  fontWeight: "600",
                }
              : androidCustomFonts[950]),
            fontSize: "24px",
          };
        },
        semiboldxl: () => {
          return {
            ...(Platform.OS == "ios"
              ? {
                  fontWeight: "600",
                }
              : androidCustomFonts[950]),
            fontSize: "20px",
          };
        },
        regularmd: () => {
          return {
            ...(Platform.OS == "ios"
              ? {
                  fontWeight: "400",
                }
              : androidCustomFonts[400]),
            fontSize: "md",
          };
        },
        semiboldsm500: () => {
          return {
            ...(Platform.OS == "ios"
              ? {
                  fontWeight: "500",
                }
              : androidCustomFonts[500]),
            fontSize: "sm",
          };
        },
        regularsm: () => {
          return {
            ...(Platform.OS == "ios"
              ? {
                  fontWeight: "400",
                }
              : androidCustomFonts[400]),
            fontSize: "sm",
          };
        },
        semibold_md: () => {
          return {
            ...(Platform.OS == "ios"
              ? {
                  fontWeight: "500",
                }
              : androidCustomFonts[500]),
            fontSize: "md",
          };
        },
        semibold500: () => {
          return {
            ...(Platform.OS == "ios"
              ? {
                  fontWeight: "500",
                }
              : androidCustomFonts[950]),
            fontSize: "md",
          };
        },
        boldxs: () => {
          return {
            ...(Platform.OS == "ios"
              ? {
                  fontWeight: "600",
                }
              : androidCustomFonts[600]),
            fontSize: "xs",
          };
        },
        boldxs700: () => {
          return {
            ...(Platform.OS == "ios"
              ? {
                  fontWeight: "700",
                }
              : androidCustomFonts[700]),
            fontSize: "xs",
          };
        },
        extraboldxs: () => {
          return {
            ...(Platform.OS == "ios"
              ? {
                  fontWeight: "700",
                }
              : androidCustomFonts[600]),
            fontSize: "xs",
          };
        },
        regular2xs: () => {
          return {
            ...(Platform.OS == "ios"
              ? {
                  fontWeight: "400",
                }
              : androidCustomFonts[400]),
            fontSize: "2xs",
          };
        },
        medium2xs: () => {
          return {
            ...(Platform.OS == "ios"
              ? {
                  fontWeight: "500",
                }
              : androidCustomFonts[500]),
            fontSize: "2xs",
          };
        },
        bold2xs: () => {
          return {
            ...(Platform.OS == "ios"
              ? {
                  fontWeight: "600",
                }
              : androidCustomFonts[950]),
            fontSize: "2xs",
          };
        },
        semibold2xs: () => {
          return {
            ...(Platform.OS == "ios"
              ? {
                  fontWeight: "600",
                }
              : androidCustomFonts[950]),
            fontSize: "2xs",
          };
        },
       
        bold2xl: () => {
          return {
            ...(Platform.OS == "ios"
              ? {
                  fontWeight: "600",
                }
              : androidCustomFonts[600]),
            fontSize: "2xl",
          };
        },
        boldsmwithoutplatformspecific: () => {
          return {
            ...(Platform.OS == "ios"
              ? {
                  fontWeight: "600",
                }
              : androidCustomFonts[600]),
            fontSize: "sm",
          };
        },
        extraboldsm: () => {
          return {
            ...(Platform.OS == "ios"
              ? {
                  fontWeight: "700",
                }
              : androidCustomFonts[700]),
            fontSize: "sm",
          };
        },
        semiboldsm: () => {
          return {
            ...(Platform.OS == "ios"
              ? {
                  fontWeight: "500",
                }
              : androidCustomFonts[500]),
            fontSize: "sm",
          };
        },
        semiboldsm950: () => {
          return {
            ...(Platform.OS == "ios"
              ? {
                  fontWeight: "500",
                }
              : androidCustomFonts[950]),
            fontSize: "sm",
          };
        },
        semiboldmd: () => {
          return {
            ...(Platform.OS == "ios"
              ? {
                  fontWeight: "400",
                }
              : androidCustomFonts[400]),
            fontSize: "md",
          };
        },
        regularxs: () => {
          return {
            ...(Platform.OS == "ios"
              ? {
                  fontWeight: "400",
                }
              : androidCustomFonts[400]),
            fontSize: "xs",
          };
        },
        semiboldxs: () => {
          return {
            ...(Platform.OS == "ios"
              ? {
                  fontWeight: "500",
                }
              : androidCustomFonts[500]),
            fontSize: "xs",
          };
        },
        semiboldxs950: () => {
          return {
            ...(Platform.OS == "ios"
              ? {
                  fontWeight: "600",
                }
              : androidCustomFonts[950]),
            fontSize: "xs",
          };
        },
        smallxs: () => {
          return {
            ...(Platform.OS == "ios"
              ? {
                  fontWeight: "400",
                }
              : androidCustomFonts[400]),
            fontSize: "10px",
          };
        },
        largemd: () => {
          return {
            ...(Platform.OS == "ios"
              ? {
                  fontWeight: "400",
                }
              : androidCustomFonts[400]),
            fontSize: "18px",
          };
        },
        boldverylg: () => {
          return {
            ...(Platform.OS == "ios"
              ? {
                  fontWeight: "600",
                }
              : androidCustomFonts[950]),
            fontSize: "40px",
          };
        },
        bolgdoublelg: () => {
          return {
            ...(Platform.OS == "ios"
              ? {
                  fontWeight: "600",
                }
              : androidCustomFonts[950]),
            fontSize: "2xl",
          };
        },
        extralg: () => {
          return {
            ...(Platform.OS == "ios"
              ? {
                  fontWeight: "600",
                }
              : androidCustomFonts[600]),
            fontSize: "80px",
          };
        },
        largemedium: () => {
          return {
            ...(Platform.OS == "ios"
              ? {
                  fontWeight: "600",
                }
              : androidCustomFonts[600]),
            fontSize: "28px",
          };
        },
        semiboldlargemedium: () => {
          return {
            ...(Platform.OS == "ios"
              ? {
                  fontWeight: "600",
                }
              : androidCustomFonts[950]),
            fontSize: "28px",
          };
        },
        large4xl: () => {
          return {
            ...(Platform.OS == "ios"
              ? {
                  fontWeight: "400",
                }
              : androidCustomFonts[400]),
            fontSize: "32px",
          };
        },
        large5xl: () => {
          return {
            ...(Platform.OS == "ios"
              ? {
                  fontWeight: "400",
                }
              : androidCustomFonts[400]),
            fontSize: "36px",
          };
        },
        regularlg: () => {
          return {
            ...(Platform.OS == "ios"
              ? {
                  fontWeight: "500",
                }
              : androidCustomFonts[500]),
            fontSize: "lg",
          };
        },
        boldsm600: () => {
          return {
            ...(Platform.OS == "ios"
              ? {
                  fontWeight: "600",
                }
              : androidCustomFonts[600]),
            fontSize: "sm",
          };
        },
        semiboldmd600: () => {
          return {
            ...(Platform.OS == "ios"
              ? {
                  fontWeight: "semibold",
                }
              : androidCustomFonts[950]),
            fontSize: "md",
          };
        },
        semiboldsm600: () => {
          return {
            ...(Platform.OS == "ios"
              ? {
                  fontWeight: "semibold",
                }
              : androidCustomFonts[950]),
            fontSize: "sm",
          };
        },
        semiboldxs600: () => {
          return {
            ...(Platform.OS == "ios"
              ? {
                  fontWeight: "500",
                }
              : androidCustomFonts[950]),
            fontSize: "xs",
          };
        },
        semiboldmedium: () => {
          return {
            ...(Platform.OS == "ios"
              ? {
                  fontWeight: "600",
                }
              : androidCustomFonts[950]),
            fontSize: "md",
          };
        },
        semibold30px: () => {
          return {
            ...(Platform.OS == "ios"
              ? {
                  fontWeight: "600",
                }
              : androidCustomFonts[950]),
            fontSize: "30px",
          };
        },
        semiboldxl: () => {
          return {
            ...(Platform.OS == "ios"
              ? {
                  fontWeight: "600",
                }
              : androidCustomFonts[950]),
            fontSize: "xl",
          };
        },
        semiboldmd600: () => {
          return {
            ...(Platform.OS == "ios"
              ? {
                  fontWeight: "semibold",
                }
              : androidCustomFonts[950]),
            fontSize: "md",
          };
        },
        semiboldsm600: () => {
          return {
            ...(Platform.OS == "ios"
              ? {
                  fontWeight: "semibold",
                }
              : androidCustomFonts[950]),
            fontSize: "sm",
          };
        },
        semiboldxs600: () => {
          return {
            ...(Platform.OS == "ios"
              ? {
                  fontWeight: "500",
                }
              : androidCustomFonts[950]),
            fontSize: "xs",
          };
        },
      },
    },
    Heading: {
      defaultProps: {
        color: "brand.200",
      },
      baseStyle: {},
    },
    Divider: {
      defaultProps: {
        orientation: "horizontal",
        thickness: "2",
      },
      baseStyle: {
        _light: {
          bg: "brand.300",
        },
      },
    },
    Modal: {
      defaultProps: {
        size: "full",
      },
      baseStyle: {},
    },
    ModalContent: {
      defaultProps: {},
      baseStyle: {
        rounded: "lg",
      },
    },
    ModalHeader: {
      defaultProps: {},

      baseStyle: {
        _text: {
          fontSize: "md",
          fontWeight: "bold",
          fontFamily: "body",
        },
        _light: {
          _text: {
            color: "brand.200",
          },
        },
      },
    },
    ModalCloseButton: {
      defaultProps: {},
      baseStyle: {
        _light: {
          _icon: {
            color: "brand.200",
          },
        },
      },
    },
  },
});

export default theme;

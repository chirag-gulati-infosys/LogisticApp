import colors from './colors';
import fonts from './fonts';

const textStyles = {};
const titleFonts = {};
textStyles.defaultStyles = {};

titleFonts.sizes = {
  verylarge: 36,
  large: 32,
  xLarge: 26,
  medium: 21,
  normal: 18.5,
  small: 15,
  vsmall:14,
  verySmall: 11,
  icon: 24,

};

textStyles.colors = {
  primary: colors.primaryText,
  secondary: colors.secondaryText,
  white: colors.white,
  danger: colors.danger,
};

textStyles.defaultStyles.types = {
  primaryVerylarge: {
    fontFamily: fonts.families.primary,
    fontSize: titleFonts.sizes.verylarge,
    color: colors.primaryText,
  },
  primaryLarge: {
    fontFamily: fonts.families.primary,
    fontSize: titleFonts.sizes.large,
    color: colors.primaryText,
  },
  primaryMedium: {
    fontFamily: fonts.families.primary,
    fontSize: titleFonts.sizes.medium,
    color: colors.primaryText,
  },
  primaryMediumBold: {
    fontFamily: fonts.families.bold,
    fontSize: titleFonts.sizes.medium,
    color: colors.primaryText,
  },
  primary: {
    fontFamily: fonts.families.primary,
    fontSize: titleFonts.sizes.normal,
    color: colors.primaryText,
  },
  primaryBold: {
    fontFamily: fonts.families.bold,
    fontSize: titleFonts.sizes.normal,
    color: colors.primaryText,
  },
  primarySmall: {
    fontFamily: fonts.families.primary,
    fontSize: titleFonts.sizes.small,
    color: colors.primaryText,
  },
  primaryvSmall: {
    fontFamily: fonts.families.primary,
    fontSize: titleFonts.sizes.verySmall,
    color: colors.primaryText,
  },
  secondary: {
    fontFamily: fonts.families.secondary,
    fontSize: titleFonts.sizes.normal,
    color: colors.primaryText,
  },
  secondarySmall: {
    fontFamily: fonts.families.secondary,
    fontSize: titleFonts.sizes.small,
    color: colors.primaryText,
  },
  secondaryMedium: {
    fontFamily: fonts.families.secondary,
    fontSize: titleFonts.sizes.medium,
    color: colors.primaryText,
  },
  secondaryVerySmall: {
    fontFamily: fonts.families.secondary,
    fontSize: titleFonts.sizes.verySmall,
    color: colors.primaryText,
  },
  secondaryBold: {
    fontFamily: fonts.families.secondaryBold,
    fontSize: titleFonts.sizes.medium,
    color: colors.primaryText,
  },
  tertiary: {
    fontFamily: fonts.families.tertiary,
    fontSize: titleFonts.sizes.normal,
    color: colors.primaryText,
  },
  tertiaryMedium: {
    fontFamily: fonts.families.tertiary,
    fontSize: titleFonts.sizes.medium,
    color: colors.primaryText,
  },
  tertiaryXLarge: {
    fontFamily: fonts.families.tertiary,
    fontSize: titleFonts.sizes.xLarge,
    color: colors.primaryText,
  },
  tertiarySmall: {
    fontFamily: fonts.families.secondary,
    fontSize: titleFonts.sizes.small,
    color: colors.primaryText,
  },
  bold: {
    fontFamily: fonts.families.secondary,
    fontSize: titleFonts.sizes.normal,
    color: colors.primaryText,
  },
  boldSmall: {
    fontFamily: fonts.families.bold,
    fontSize: titleFonts.sizes.small,
    color: colors.primaryText,
  },
};
export default textStyles;

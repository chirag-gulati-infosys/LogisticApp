import {Platform} from 'react-native';
import colors from './colors';
import fonts from './fonts';

const title = {};
const titleFonts = {};

titleFonts.sizes = {
  verylarge: 36,
  large: 32,
  medium: 25,
  regular: 17,
  small: 15,
  verySmall: 11,
  icon: 24,
};

// Title types
title.types = {
  h1: {
    fontFamily: fonts.families.secondary,
    fontSize: titleFonts.sizes.verylarge,
    color: colors.lightPrimary,
  },
  h2: {
    fontFamily: fonts.families.primary,
    fontSize: Platform.OS === 'ios' ? 29 : 25,
    color: colors.secondaryText,
  },
  h3: {
    fontFamily: fonts.families.tertiary,
    fontSize: titleFonts.sizes.medium,
    color: colors.lightPrimary,
  },
  h4: {
    fontFamily: fonts.families.primary,
    fontSize: titleFonts.sizes.large,
    color: colors.primaryText,
  },
  h5: {
    fontFamily: fonts.families.tertiary,
    fontSize: titleFonts.sizes.medium,
    color: colors.primaryText,
  },
  h6: {
    fontFamily: fonts.families.primary,
    fontSize: titleFonts.sizes.medium,
    color: colors.secondaryBorder,
  },
  h7: {
    fontFamily: fonts.families.tertiary,
    fontSize: 18,
    color: colors.lightPrimary,
  },
};
export default title;

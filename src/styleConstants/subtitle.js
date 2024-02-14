import colors from './colors';
import fonts from './fonts';

const subtitle = {};
const subtitleFonts = {};

subtitleFonts.sizes = {
  verylarge: 36,
  large: 32,
  medium: 25,
  regular: 21,
  small: 15,
  verySmall: 11,
};

subtitle.types = {
  h1: {
    fontFamily: fonts.families.primary,
    fontSize: subtitleFonts.sizes.verylarge,
    color: colors.primaryText,
  },
  h2: {
    fontFamily: fonts.families.primary,
    fontSize: subtitleFonts.sizes.large,
    color: colors.secondaryText,
  },
  h3: {
    fontFamily: fonts.families.primary,
    fontSize: subtitleFonts.sizes.medium,
    color: colors.lightPrimary,
  },
  h4: {
    fontFamily: fonts.families.primary,
    fontSize: subtitleFonts.sizes.regular,
    color: colors.primaryText,
  },
  h5: {
    fontFamily: fonts.families.primary,
    fontSize: subtitleFonts.sizes.small,
    color: colors.primaryText,
  },
  h6: {
    fontFamily: fonts.families.primary,
    fontSize: subtitleFonts.sizes.verySmall,
    color: colors.primaryText,
  },
}
export default subtitle;

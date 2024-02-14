import colors from './colors';
import fonts from './fonts';

const commonStyles = {};

commonStyles.imageStyles = {
  image: {
    width: '100%',
  },
};

commonStyles.appStyles = {
  container: {
    flex: 1,
    backgroundColor: colors.gray,
    alignItems: 'center',
  },
  safeAreaView: {
    flex: 1,
    backgroundColor: colors.white,
  },
  container1: {
    flex: 1,
    backgroundColor: colors.white,
    paddingLeft: 5,
    paddingRight: 5,
    marginTop: 10,
  },
  container2: {
    flex: 1,
    backgroundColor: colors.gray,
    paddingLeft: '3%',
    paddingRight: '3%',
  },
  container3: {
    flex: 1,
  },
  container4: {
    flex: 1,
    backgroundColor: colors.white,
    marginLeft: 10,
    marginRight: 10,
  },
  container5: {
    backgroundColor: colors.gray,
    paddingLeft: 10,
    paddingRight: 10,
  },
  image: {
    width: '100%',
    height: undefined,
    aspectRatio: 1,
  },
  mt1: {
    marginTop: 8,
  },
  mb1: {
    marginBottom: 8,
  },
  ml1: {
    marginLeft: 8,
  },
  mr1: {
    marginRight: 8,
  },
  mt2: {
    marginTop: 16,
  },
  mt3: {
    marginTop: 20,
  },
  mt4: {
    marginTop: 24,
  },
  mb2: {
    marginBottom: 16,
  },
  mb3: {
    marginBottom: 24,
  },
  ml3: {
    marginLeft: 16,
  },
  mr4: {
    marginRight: 16,
  },
  pb1: {
    paddingBottom: 8,
  },
  pb2: {
    paddingBottom: 16,
  },
  pb3: {
    paddingBottom: 24,
  },
  pt1: {
    paddingTop: 8,
  },
  pt2: {
    paddingTop: 16,
  },
  pt3: {
    paddingTop: 24,
  },
  pl1: {
    paddingLeft: 19,
  },
  mh1: { marginHorizontal: 16 },
  mv1: { marginVertical: 16 },
  mb0: { marginBottom: 0 },
  headerStyle: {
    shadowColor: 'transparent',
  },
  headerTitleStyle: {
    fontSize: fonts.sizes.normal,
    fontWeight: '700',
  },
  stretch: {
    alignSelf: 'stretch',
  },
  center: {
    alignSelf: 'center',
  },
  flexEnd: { alignSelf: 'flex-end' },
  flexStart: { alignSelf: 'flex-start' },
};

commonStyles.containerStyles = {
  headerLeftContainerStyle: commonStyles.appStyles.pl1,
  container: {
    flex: 1,
    backgroundColor: colors.gray,
    alignItems: 'center',
  },
  container1: {
    flex: 1,
    backgroundColor: colors.gray,
    paddingLeft: 10,
    paddingRight: 10,
    alignItems: 'center',
  },
  container2: {
    flex: 1,
    backgroundColor: colors.gray,
  },
  container3: {
    flex: 1,
    backgroundColor: colors.white,
  },
  plpContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: colors.white,
    paddingLeft: 24,
  },
  image: {
    width: '100%',
    height: undefined,
    aspectRatio: 1,
  },
};

export default commonStyles;

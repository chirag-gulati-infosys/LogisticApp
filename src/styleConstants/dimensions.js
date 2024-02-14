import {Dimensions} from 'react-native';
import {DH,DW} from '../utils/dynamicHeightWidth'

const dimensions = {};
const {width, height} = Dimensions.get('window');

dimensions.window = {
  width,
  height,
};

dimensions.padding = {
  small: DW(15),
  verySmall: DW(12),
};

dimensions.margin = {
  horizontalMargin: DW(30),
  medium: DW(25),
  regular: DW(20),
  small: DW(15),
  verySmall: DW(12),
 
 
};

export default dimensions;

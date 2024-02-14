import {Dimensions} from  'react-native';


export const standardDeviceSize = {
  width:375,
  height:667
};

export const actualDeviceSize = {
  width:Dimensions.get("window").width,
 height:Dimensions.get("window").height,

};

export const DH = (actualHeight) =>{
  const heightRatio = (actualHeight + 0) / standardDeviceSize.height;
  const windowHeight= actualDeviceSize.height;
  const reqHeight= heightRatio * windowHeight;
  return reqHeight;
}

export const DW = (actualWidth) =>{
  const widthRatio = (actualWidth + 0) / standardDeviceSize.width;
  const windowWidth = actualDeviceSize.width;
  const reqWidth = widthRatio * windowWidth;

  return reqWidth;
  
}
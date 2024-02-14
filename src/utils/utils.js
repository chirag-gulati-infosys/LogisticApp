import { Platform } from "react-native";

export const isAndroid = () => {
    return Platform.OS === "android";
  };

export function isEmpty(val) {
    return (
      val === null ||
      val === undefined ||
      val === "" ||
      (Array.isArray(val) && val.length === 0) ||
      (Object.keys(val).length === 0 && val.constructor === Object)
    );
  }

  export const showEquipmentsText = (equipments, addSpace = false) => {
    var text = "";
    if (equipments.length == 1 && typeof equipments[0] === "object") {
      return equipments[0].description;
    }
    else if (equipments.length == 1 && typeof equipments[0] === "string") {
      return equipments[0];
    }
    
    else if (equipments.length == 0) {
      return labels.EQUIPMENTCATEGORY;
    }
  
    if((!isEmpty(equipments) && typeof equipments[0] === "object")) {
      equipments.map((equipment) => {
        text = text + equipment.description + ",";
        if (addSpace) {
          text = text + " ";
        }
      });
    }
    else {
      equipments.map((equipment) => {
        text = text + equipment + ",";
        if (addSpace) {
          text = text + " ";
        }
      });
    }
    
    return removeLastComma(text);
  };

  export const showEquipmentsTypeText = (equipmentType, addSpace = false) => {
    var text = "";
    if (equipmentType.length == 1) {
      return equipmentType[0].description;
    } else if (equipmentType.length == 0) {
      return labels.EQUIPMENTTYPE;
    }
  
    equipmentType.map((equipment) => {
      text = text + equipment.description + ",";
      if (addSpace) {
        text = text + " ";
      }
    });
    return removeLastComma(text);
  };

  export function removeLastComma(strng) {
    var n = strng.lastIndexOf(",");
    var a = strng.substring(0, n);
    return a;
  }
  
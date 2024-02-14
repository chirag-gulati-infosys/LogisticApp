import React from "react";
import { Factory } from "native-base";

const NativeWrapperIcon = ({ icon, ...rest }) => {
  const FactoryIcon = Factory(icon);
  return <FactoryIcon {...rest} />;
};

export default NativeWrapperIcon;

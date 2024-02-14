import React from "react";
import { Box } from "native-base";

const BorderContainer = ({ children, ...rest }) => {
  return (
    <Box
      borderBottomColor={"brand.800"}
      borderBottomWidth={0.4}
      pb={5}
      bg="white"
      {...rest}
    >
      {children}
    </Box>
  );
};

export default BorderContainer;

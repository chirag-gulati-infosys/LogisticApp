import React, { memo } from "react";
import { Box, Text, IconButton } from "native-base";
import * as images from "../assets/ImageProperties";
import NativeWrapperIcon from "./NativeWrapperIcon";

const CustomHeaderComponent = ({
  headerLeft,
  headerTitle,
  headerRight,
  isColumn = false,
  imgText = false,
  topHeading = "",
  backgroundColor = "brand.50",
  imgTextComp,
  isMarketplace = false,
  enableSafeArea = null,
  isBackNavEnabled = true,
  dedicatedLane = false,
}) => {

  const defaultHeaderLeft = () => {
    if (isBackNavEnabled) {
      return (
        <IconButton
          ml={1}
          alignSelf={"flex-start"}
          icon={<NativeWrapperIcon icon={images.Images.Icon_Back} />}
        />
      );
    } else {
      return null;
    }
  };
  return (
    <Box
      flexDirection={"row"}
      px={"1"}
      py={"2.5"}
      bgColor={backgroundColor}
      alignItems={"center"}
      width={"100%"}
      safeAreaTop={enableSafeArea}
    >
      <Box
        w={dedicatedLane ? "10%" : isMarketplace ? "12%" : "15%"}
      >
        {defaultHeaderLeft()}
      </Box>

      <Box
        w={"68%"}
        alignSelf={"center"}
      >
        {isColumn == true ? (
          <Box alignItems={"center"}>
            <Text
              noOfLines={1}
              variant={"regularxs"}
              color={"brand.500"}
              textAlign={"center"}
              alignSelf={"center"}
            >
              {topHeading}
            </Text>
            <Text
              noOfLines={1}
              variant="bold_md"
            >
              {headerTitle}
            </Text>
          </Box>
        ) : imgText ? (
          <Box>{imgTextComp}</Box>
        ) : (
          <Text
            noOfLines={1}
            alignSelf={"center"}
            variant={"bold_md"}
          >
            {headerTitle}
          </Text>
        )}
      </Box>

      <Box w={"20%"} alignItems={"center"} height={36}>
        
          {headerRight}
      </Box>
    </Box>
  );
};

function areEqual(prevProps, nextProps) {
  let arePropsEqual = true;
  Object.entries(nextProps).forEach(([key, val]) => {
    if (typeof val !== "function" && prevProps[key] !== val) {
      arePropsEqual = false;
    }
  });
  /*
  return true if passing nextProps to render would return
  the same result as passing prevProps to render,
  otherwise return false
  */
  return arePropsEqual;
}

export default memo(CustomHeaderComponent, areEqual);

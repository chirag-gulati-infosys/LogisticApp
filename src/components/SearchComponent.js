import React, { memo, useEffect } from "react";
import { Box, Divider, Text, Pressable } from "native-base";
import { Platform, TouchableOpacity } from "react-native";
import { useState } from "react";
import labels from "../localization/localization";
import { Images } from "../assets/ImageProperties";

const SearchComponent = ({
  parentCallback,
  onSearchClick,
  origin,
  destination,
  pickUpDate,
  equipments,
  toggle,
  isQuickSearchVisible,
  dropdownVisible = true,
  isDedicatedLane = false
}) => {
  const [openView, setOpenView] = useState(false);

  useEffect(() => {
    setOpenView(toggle);
  }, [toggle]);

  const showIconFunc = () => {
    setOpenView(!openView);
    parentCallback(!openView);
  };

  return (
    <Box h="58" w="100%">
      <Box
        px={3}
        h="58"
        w="100%"
        bgColor={"brand.50"}
        flexDirection="row"
        alignItems="center"
      >
        <Pressable
          onPress={onSearchClick}
          h="100%"
          flexDirection={"row"}
          flex={1}
          alignItems={"center"}
        >
          <TouchableOpacity onPress={onSearchClick}>
            <Images.Search />
          </TouchableOpacity>
          <Box
            flexDirection={"column"}
            alignItems={"center"}
            ml="3"
            flex={1}
          >
            <Box
              h="40%"
              w="100%"
              flexDirection={"row"}
              alignItems={"center"}
            >
              <Box maxWidth={"45%"}>
              <Text
                noOfLines={1}
                  width={"100%"}
                textBreakStrategy="balanced"
                variant={"boldmd"}
              >
                {origin}
              </Text>
              </Box>
              <Images.Icon_right_arrow
                width="10%"
              />
              <Box maxWidth={"45%"}>
              <Text
                noOfLines={1}
                  width={"100%"}
                variant={"boldmd"}
              >
                {destination}
              </Text>
              </Box>
            </Box>
            <Box
              h="40%"
              w="100%"
              alignItems={"center"}
              flexDirection={"row"}
            >
              <Text
                maxWidth={isDedicatedLane ? "50%" : "40%"}
                noOfLines={1}
                variant="regularsm"
                mr="2"
              >
                {pickUpDate}
              </Text>
              <Images.Icon_grey_bullet
                height="5"
                width="5"
              />
              {equipments == labels.EQUIPMENT ? (
                <Text maxWidth="50%" variant="regularsm" ml="2" noOfLines={1}>
                  {labels.ALL_EQUIPMENTS}
                </Text>
              ) : (
                <Box  maxWidth="50%">
                <Text
                  width={"100%"}
                  variant="regularsm"
                  ml="2"
                  noOfLines={1}
                >
                  {equipments}
                </Text>
                </Box>
              )}
            </Box>
          </Box>
        </Pressable>
        {(dropdownVisible && isQuickSearchVisible) &&
          (openView ? (
            <Images.Icon_dropup
              height="34"
              width="34"
              onPress={showIconFunc}
            />
          ) : (
            <Images.Icon_dropdown
              height="34"
              width="34"
              onPress={showIconFunc}
            />
          ))}
      </Box>
      <Divider/>
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

export default memo(SearchComponent, areEqual);

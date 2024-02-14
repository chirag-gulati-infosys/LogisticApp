
import { Box, Text, Pressable } from "native-base";
import { Animated, View } from "react-native";
import React from "react";
import colors from "../../styleConstants/colors";
import labels from "../../localization/localization";

const Toptabs = ({ animHeaderValue, selectedTab, changeSelectedTab }) => {

  return (
    <View
      style={{
        height: 60,
        // backgroundColor: "purple.500",
      }}
    >
      <Box
        backgroundColor={colors.bgcolor_gray}
        height={49}
        flexDirection={"row"}
        justifyContent={"center"}
        marginX={3}
        marginY={2}
        borderRadius={30}
      >
        <Pressable
          justifyContent={"center"}
          alignItems={"center"}
          marginY={1.5}
          marginLeft={2}
          minW={50}
          h="38"
          width={"48%"}
          borderRadius={20}
          shadow={selectedTab === 1 ? 1 : -1}
          onPress={() => changeSelectedTab(1)}
          backgroundColor={
            selectedTab === 1 ? colors.txt_white : colors.bgcolor_gray
          }
        >
          <Text
            noOfLines={1}
            color={"brand.200"}
            px="6%"
            variant={"semiboldsm600"}
          >
            {labels.ALL_LOADS}
          </Text>
        </Pressable>

        <Pressable
          justifyContent={"center"}
          alignItems={"center"}
          marginY={1.5}
          h="38"
          width={"48%"}
          minW={50}
          marginRight={2}
          borderRadius={20}
          onPress={() => changeSelectedTab(2)}
          shadow={selectedTab === 2 ? 1 : -1}
          backgroundColor={
            selectedTab === 2 ? colors.txt_white : colors.bgcolor_gray
          }
        >
          <Text
            noOfLines={1}
            color={"brand.200"}
            px="6%"
            variant={"semiboldsm600"}
          >
            {labels.DEDICATED_LANES}
          </Text>
        </Pressable>
      </Box>
    </View>
  );
};

export default Toptabs;

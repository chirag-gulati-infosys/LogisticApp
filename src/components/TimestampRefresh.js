import React, { memo, useEffect, useState } from "react";
import { Center, Text, Flex, Pressable } from "native-base";
import { Icon_refresh_blue } from "../../app/config/ImageProperties";
import { Utils, testIDperPlatform } from "@utils/utils";

const TimestampRefresh = ({ handleRefresh, updatedTimestamp }) => {
  const [timestamp, setTimestamp] = useState(updatedTimestamp);

  useEffect(() => {
    //setTimestamp(updatedTimestamp);
  }, [updatedTimestamp]);

  return (
    <Center>
      <Pressable
        onPress={() => handleRefresh(false)}
      >
        <Flex
          direction="row"
          my="2"
          px="2"
          bg="brand.50"
          alignItems="center"
          rounded="full"
          shadow="1"
        >
          {/* <Icon_refresh_blue
            height="16"
            width="16"
            {...testIDperPlatform("imageRefreshIcon")}
          /> */}

          <Text
            mx="5px"
            fontWeight={"400"}
            fontSize={"xs"}
            py="5px"
            textAlign="center"
            
          >
            {`Updated:`}
          </Text>
          <Text
            fontSize={"xs"}
            fontWeight={400}
            textAlign="center"

          >
            {timestamp}
          </Text>
        </Flex>
      </Pressable>
    </Center>
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

export default memo(TimestampRefresh, areEqual);

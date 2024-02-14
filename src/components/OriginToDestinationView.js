import React from "react";
import { Box } from "native-base";
import Dash from "react-native-dash";
import { isEmpty } from "../utils/utils";
import { Images } from "../assets/ImageProperties";

const OriginToDestinationView = ({
  origin,
  stops,
  destination,
  topMargin = 0,
  showDottedLine,
  isSold= false
}) => {
  return (
    <Box
      flexDirection={"column"}
      px={"15px"}
      opacity={isSold ? 0.5 : 1}
    >
      <Box
        flexDirection={"row"}
        mt={topMargin}
      >
        <Box
          alignItems={"center"}
          flexDirection={"column"}
          h={"100%"}
          pr={"15px"}
          pt={"2px"}
          mt={0.5}
        >
          <Images.Icon_pickup/>

          <Box
            width={"2px"}
            flex={1}
            mb={-1.5}
            mt={0}
            bgColor="view_theme.300"
            flexDirection={"column"}
          />
        </Box>
        {origin}
      </Box>
      {!isEmpty(stops) ? (
        <Box
          flexDirection={"row"}
        >
          <Box
            alignItems={"center"}
            flexDirection={"column"}
            h={"100%"}
            pr={"15px"}
            pt={"0px"}
          >
            <Images.Rec_black
              alignSelf={"center"}
            />
            <Box
              width={"2px"}
              flex={1}
              mb={-1}
              mt={-1}
              bgColor="view_theme.300"
              flexDirection={"column"}
            />
          </Box>
          {stops}
        </Box>
      ) : null}
      <Box
        flexDirection={"row"}
      >
        <Box
          alignItems={"center"}
          flexDirection={"column"}
          h={"100%"}
          pr={"15px"}
          pt={"5px"}
        >
          <Images.Icon_delivery
            h="4"
            w="4"
          />
          {showDottedLine && (
            <Box
              flexDirection={"column"}
              flex={1}
            >
              <Dash
                dashLength={10}
                dashGap={4}
                dashColor="#858585"
                style={{ width: 1, height: 80, flexDirection: "column" }}
              />
            </Box>
          )}
        </Box>
        {destination}
      </Box>
    </Box>
  );
};

export default OriginToDestinationView;

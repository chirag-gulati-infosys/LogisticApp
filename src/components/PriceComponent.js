import React from "react";
import { Box, Text } from "native-base";
import { labels as commonConstants } from "@common/constants";
import NativeWrapperIcon from "./NativeWrapperIcon";
import labels from "../localization/localization";
import { isEmpty } from "../utils/utils";
import { Images } from "../assets/ImageProperties";

const PriceComponent = ({
  isHotDeal,
  isHighValueLoad = false,
  hotDealStyle = {},
  isHighRisk = false,
  marginY = 0,
  isSold = false
}) => {
  let updatedRatePerMile;


  return (
    <Box
      bgColor="brand.50"
      // rounded={20}
      marginY={marginY}
      opacity={isSold ? 0.5 : 1}
    >
      <Box
        alignItems={"center"}
        flexDirection={"row"}
        px={"12px"}
        // rounded={20}
        py={isHighValueLoad === true || isHighRisk === true ? "5px" : "6px"}
        bgColor="brand.50"
      >
        {isHotDeal ? (
          <NativeWrapperIcon
            {...hotDealStyle}
            icon={Images.Icon_hot_deals}
          
          />
        ) : null}
      </Box>
    </Box>
  );
};

export default PriceComponent;

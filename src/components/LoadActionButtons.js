import React from "react";
import { Box, Button, Text } from "native-base";
import { isAndroid } from "../utils/utils";
import labels from "../localization/localization";

const LoadActionButtons = ({
  load,
  page,
  subpage,
  isRecommendedLoad,
  isActiveCarrier = true,
  load_1,
  load_2,
}) => {


  const ButtonCmp = (
    label,
    clickHandler,
    isOnlyAction,
    variant,
    topMargin = 2
  ) => {
    return (
      <Button
        flex={1}
        mt={topMargin}
        marginRight={isOnlyAction ? "0px" : "20px"}
        variant={variant}
        py="2"
        borderColor={"brand.300"}
        _text={{
          color: variant == "driveBlue" ? "black" : "white",
          variant: "boldsm",
          fontSize: "sm",
          fontWeight: "600",
        }}
        fontWeight={"600"}
      >
        <Text
          variant="boldsm"
          color={variant == "driveBlue" ? "black" : "white"}
        >
          {label}
        </Text>
      </Button>
    );
  };

  const fetchLoadButton = () => {
    // If carrier is inactive, do not display the Book Now and Place Bid buttons.
    if (isActiveCarrier === false) {
      return null;
    }

    // If load is a HVA load and the carrier is either not HVA certified or has not yet delivered its first load, display Book Now/Place Bid unavailable message.
      return (
        <Box
          px={"20px"}
          rounded={"6"}
          bgColor="brand.50"
          flexDirection={"row"}
          pb="15px"
        >
          {ButtonCmp(
            labels.place_bid,
            null,
            false,
            "driveSecondary",
            1
          )}
          {ButtonCmp(labels.book_now, null, true, "driveBlue", 1)}
        </Box>
      );
    
  };

  return fetchLoadButton();
};

export default LoadActionButtons;

import React, { memo, useCallback } from "react";
import { Box, Row, Text } from "native-base";
import labels from "../localization/localization";
import theme from "../config/Theme";
import { isEmpty } from "../utils/utils";


const OrderNumber = memo(
  ({
    displayNumber,
    isRecommended,
    bidstatusDesc,
    bidstatus = "",
    isRoundTrip,
    isSold = false,
    ...rest
  }) => {
    let status = "";
    const bidStatusBgColor = useCallback(() => {
      switch (bidstatus) {
        case labels.BID_EXPIRED: {
          status = "BID EXPIRED";
          return "screen_bg.900";
        }

        case labels.BID_APPROVED:
          status = "BID APPROVED";
          return "screen_bg.200";

        case labels.OPEN_CO:
          status = "OPEN COUNTEROFFER";
          return "screen_bg.100";

        case labels.ACCEPTED_CO:
          status = "COUNTEROFFER ACCEPTED";
          return "screen_bg.200";

        case labels.REJECTED_CO:
          status = "COUNTEROFFER REJECTED";
          return "screen_bg.900";

        case labels.BID_REVIEW:
          status = "BID UNDER REVIEW";
          return "screen_bg.800";

        case labels.BID_DECLINED:
          status = "BID DECLINED";
          return "screen_bg.900";

        case labels.EXPIRED_CO:
          status = "COUNTEROFFER EXPIRED";
          return "screen_bg.900";

        default:
          return "amber.100";
      }
    });

    return (
      <Row py={4} px={5} {...rest}>
        <Text
          noOfLines={1}
          mr={isRecommended || isRoundTrip ? "1" : "2"}
          variant="boldsm"
          color={!isEmpty(bidstatus) ? "brand.200" : "view_theme.300"}
          alignSelf="center"
          opacity={isSold ? 0.5 : 1}
        >
          {displayNumber}
        </Text>


        {!isEmpty(bidstatus) && (
          <Box
            bgColor={bidStatusBgColor()}
            alignContent="center"
            justifyContent={"center"}
            opacity={isSold ? 0.5 : 1}
          >
            <Text
              alignSelf={"center"}
              color={"view_theme.300"}
              pl={2}
              pr={2}
              variant="bold2xs"
            >
              {status}
            </Text>
          </Box>
        )}
       {isSold && <Box 
        h={6}
        borderWidth={1} 
        borderRadius={1}
        borderColor={theme.colors.brand[100]} 
        marginLeft={"1"} 
        alignSelf={"center"}
        justifyContent={"center"}>
        <Text
        paddingX={"4"}
        alignSelf={"center"}
          variant="semibold2xs"
          opacity={1}
          color={theme.colors.text_theme[600]}>{labels.SOLD}</Text>
        </Box>}
      </Row>
    );
  }
);

export default OrderNumber;

import { Box, Divider, Text, View } from "native-base";
import React from "react";
import labels from "../../localization/localization";
import BorderContainer from "../../components/BorderContainer";
import TimestampRefresh from "../../components/TimestampRefresh";
import moment from "moment";
import RecommendedLoadList from "../../components/RecommendedLoadList";
import colors from "../../styleConstants/colors";

const dummyData = require('../../assets/data/findloads.json');

const RecommendLoads = () => {

    const date = new Date(2023, 11, 10, 10, 56, 0)
    const RecommendedLoadsText = () => {
        return (
          // <BorderContainer>
          <Box bg={"white"}>
            <Text
              px={25}
              mt={3}
              variant={"semiboldlg"}
            >
              {labels.RECOMMENDED_LOADS}
            </Text>
            <Divider mt={3} orientation="horizontal" />
          </Box>
          // </BorderContainer>
        );
      };

      const ListCountItem = () => {
        return (
          <BorderContainer pb={3}>
            <Text
              px={25}
              mt={3}
              color={"view_theme.300"}
              variant="boldsm"
            >
              {`${
                dummyData?.totalItemCount > 20
                  ? 20
                  : dummyData?.totalItemCount
              } ${
                dummyData?.totalItemCount == 1
                  ? `Load`
                  : `Loads`
              }`}
            </Text>
          </BorderContainer>
        );
      };

    return(
        <Box style={{ flex: 1 }}>
          <RecommendedLoadsText />
          <ListCountItem />
          <Box bgColor="gray.100" style={{ flex: 1 }}>
            <TimestampRefresh
              updatedTimestamp={moment(date).format("MMM DD • h:mm A")}
            />
            <Box style={{ flex: 1 }}>
              <RecommendedLoadList
                loadList={dummyData}
                // selectedCarrier={claimsState?.selectedCarrier}
                // carrierName={claimsState?.carrierName}
                // userPreference={userProfileState?.userProfile?.userPreference}
                isActiveCarrier={true}
                tintColor={colors.primary_green}
              />
            </Box>
          </Box>
        </Box>
    )
}

export default RecommendLoads
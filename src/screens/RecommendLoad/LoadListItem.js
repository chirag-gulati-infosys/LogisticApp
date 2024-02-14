import React, { memo, useEffect, useState } from "react";
import { Box, Text, Pressable, Divider } from "native-base";
import * as NavigationService from "../../navigation/NavigationService";
import labels from "../../localization/localization";
import OrderNumber from "../../components/OrderNumber";
import { isEmpty } from "../../utils/utils";
import OriginToDestinationView from "../../components/OriginToDestinationView";
import LoadDescriptionView from "./LoadDescriptionView";
import PriceComponent from "../../components/PriceComponent";
import LoadActionButtons from "../../components/LoadActionButtons";

// Renders load origin details
const Location = memo(
  ({
    city,
    state,
    zipCode,
    windowStart,
    windowEnd,
    timeZoneCode,
    timeWindow,
    appointmentText,
    ...rest
  }) => {
    return (
      <Box
        flexDirection={"column"}
        {...rest}
      >
        <Text
          noOfLines={1}
          variant={"boldsm"}
          color="view_theme.300"
        >
          {`${city}, ${state} ${zipCode}`}
        </Text>
        <Box
          flexDirection={"row"}
          flex={1}
          pr={2.5}
        >
          {windowStart && (
            <Text
              variant={"regularsm"}
            >
              {timeWindow}
            </Text>
          )}
          {appointmentText && (
            <Text
              ml={1}
              //  noOfLines={1}
              variant={"semiboldsm600"}
              color="text_theme.600"
            >
              {appointmentText}
            </Text>
          )}
        </Box>
      </Box>
    );
  }
);

// Renders stop count
const Stops = memo(({ numberOfStops, intermediateStopCount }) => {
  return numberOfStops > 0 ? (
    <Box
      //mb={-1}
      flexDirection={"column"}
      pb={"10px"}
    >
      <Text
        noOfLines={1}
        variant={"boldsm"}
      >
        {`${intermediateStopCount} ${labels.STOP}`}
      </Text>
    </Box>
  ) : null;
});

const LoadListItem = memo(
  ({
    data,
    isRecommndedPage,
    isActiveCarrier,
    pageName,
    subPageName,
    item_list_name,
    style,
  }) => {
    const dummyData = require('../../assets/data/findloads.json');
    let rtObjVal;

      rtObjVal = dummyData?.items?.filter(
        (x) => data.tripId === x.tripId
      );

      const loadDescription = () => {
        let deadhead = "";
        deadhead = `${data.deadheadMiles} ${labels.Mile_Abb}`;
  
        const equipment = !isEmpty(data.equipmentType)
          ? data.equipmentType
          : data.equipmentCategoryDescription;
  
        return [
          `${data.distance} ${labels.Mile_Abb} ${labels.dot_unicode} ${labels.deadhead} : ${deadhead}  `,
          `${data.dropAndHookValue} ${labels.dot_unicode} ${equipment}`,
          `${data.weight} ${data.weightMeasurementUnitTypeName} ${
            labels.dot_unicode
          } ${data.grpcommodity ? data.grpcommodity : ``}`,
        ];
      };

    return (
      <Pressable
        rounded={10}
        onPress={null}
        {...style}
      >
        <Box
          shadow={2}
          rounded={"6"}
          flexDirection={"column"}
          bgColor="white"
          mb={15}
        >
          <OrderNumber
            displayNumber={data.displayNumber}
            isRecommended={data?.isRecommended}
            isSold={false}
            isRoundTrip={
              !data.isBidOnly &&
              !isEmpty(rtObjVal) &&
              rtObjVal[0]?.showRoundTripUI
            }
          />
          <OriginToDestinationView
            origin={
              <Location
                city={data.pickupCity}
                state={data.pickupState}
                zipCode={data.pickupZipCode}
                windowStart={data.pickupWindowStart}
                windowEnd={data.pickupWindowEnd}
                serviceType={data.stops[0].type}
                timeWindow={data.originTimeWindow}
                appointmentText={data.appointmentOriginText}
                timeZoneCode={data.pickUpTimeZoneCode}
                pb={"10px"}
              />
            }
            stops={
              data.isMultiStopLoad ? (
                <Stops
                  numberOfStops={data.numberOfStops}
                  intermediateStopCount={data.intermediateStopCount}
                />
              ) : null
            }
            destination={
              <Location
                city={data.deliveryCity}
                state={data.deliveryState}
                timeWindow={data.destinationTimeWindow}
                zipCode={data.deliveryZipCode}
                windowStart={data.deliveryWindowStart}
                windowEnd={data.deliveryWindowEnd}
                appointmentText={data.appointmentDestinationText}
                timeZoneCode={data.deliveryTimeZoneCode}
              />
            }
            isSold={false}
          />
          <LoadDescriptionView
            loadDescription={loadDescription()}
            isDropAndHook={data.isDropAndHookVisible}
            isSold={false}
          />

          <Divider width={"100%"} height={0.5} />
          <PriceComponent
            priceTransactionAmount={data.priceTransactionAmount}
            ratePerMile={data.ratePerMile}
            dmpRate={data.dmpRate}
            isHighValueLoad={data.isHighValueLoad}
            priceSourceCode={data.priceSourceCode}
            isBidOnly={data.isBidOnly}
            distance={data.distance}
            isHotDeal={data.isHotDeal}
            hotDealStyle={{ ml: 2 }}
            isHighRisk={data?.isHighRisk}
            isSold={false}
          />

          {/* Confirm Requirements Part */}
          {/* {data.isValidationRequired && !data.isValidationComplete && (
            <ConfirmLoadRequirements bg={"brand.50"} pl={4} />
          )} */}

            <LoadActionButtons
              load={data}
              isActiveCarrier={isActiveCarrier}
              page={pageName}
              subpage={subPageName}
              isRecommendedLoad={isRecommndedPage}
            />
        </Box>
        
      </Pressable>
    );
  }
);

export default LoadListItem;

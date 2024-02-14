import React, { memo } from "react";
import { FlashList } from "@shopify/flash-list";
import LoadListItem from "../screens/RecommendLoad/LoadListItem";
import labels from "../localization/localization";

const RecommendedLoadList = (props) => {
  console.log(props?.loadList)
  return (
    <FlashList
      contentContainerStyle={{
        padding: 15,
      }}
      data={props.loadList?.items}
      estimatedItemSize={350}
      renderItem={({ item, index }) => {
        return (
          <LoadListItem
            data={item}
            isRecommndedPage={true}
            pageName="Recommended"
            subPageName="List"
            eventName="Click"
            isActiveCarrier={props.isActiveCarrier}
            item_list_name={labels.RECOMMENDED_LOADS_LIST}
            showRoundTripUI={
              props.loadList?.items?.filter((x) => item.tripId === x.tripId)[0]
                .showRoundTripUI
            }
          />
        );
      }}
    />
  );
};


export default memo(RecommendedLoadList);

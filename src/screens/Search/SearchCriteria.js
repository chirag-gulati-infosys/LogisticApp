import React, { useState, useCallback, useEffect, memo, useRef } from "react";
import {
  Box,
  Button,
  Divider,
  IconButton,
  Input,
  Pressable,
  Row,
  ScrollView,
  Text,
  Image,
} from "native-base";
import * as NavigationService from "../../navigation/NavigationService";
import * as images from "../../assets/ImageProperties";

import { Dimensions, Platform, View } from "react-native";

import NativeWrapperIcon from "../../components/NativeWrapperIcon";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import DeviceInfo from "react-native-device-info";
import labels from "../../localization/localization";
import CustomHeaderComponent from "../../components/CustomHeaderComponent";
import FlatButton from "../../components/FlatButton";
import DateRangePicker from "../../components/DateRangePicker";
import { isEmpty, showEquipmentsText, showEquipmentsTypeText } from "../../utils/utils";

let radiusSource = "";
const iconDefault = { alignSelf: "center", height: "20", width: "20" };
const VIEW_LOADS_CLICKED = "VIEW_LOADS_CLICKED";

const windowWidth = Dimensions.get("window").width;

let isTablet = DeviceInfo.isTablet();

const ShowSavedButton = memo(
  ({
    disabledButton,
    isSaveSearchEnabled,
    canUpdateSaveSearch,
    isSaved,
    labels,
    navigateToSaveScreen,
    setShowSaveSearchUpdateModal,
    ...rest
  }) => {

    return (
      <Button
        {...rest}
        variant={"driveSecondary"}
        height={"10"}
        backgroundColor={"black"}
      >
        <Text variant="boldsm" color={"white"}>
          {labels.SAVE_SEARCH}
        </Text>
      </Button>
    );
  }
);

const SearchCriteria = (props) => {
  // const equipmentDefault = [{ code: "0", description: labels.EQUIPMENTCATEGORY }];
  const equipmentDefault = [{ code: "0", description: labels.ALL_EQUIPMENT }];

  const equipmentTypeDefault = [
    { code: "0", description: labels.EQUIPMENTTYPE },
  ];
  const defaultLatLong = {
    latitude: "0.0",
    longitude: "0.0",
  };
 
  const [pickupDateRange, setPickupDateRange] = useState({
    startPickup: null,
    endPickup: null,
  });
  const [deliveryDateRange, setDeliveryDateRange] = useState({
    startDelivery: null,
    endDelivery: null,
  });
  const [currentLatitude, setCurrentLatitude] = useState(null);
  const [currentLongitude, setCurrentLongitude] = useState(null);
  const [destination, setDestination] = useState(labels.DESTINATION);
  const [equipment, setEquipment] = useState(equipmentDefault);
  const [equipmentType, setEquipmentType] = useState(equipmentTypeDefault);
  const [hotDeals, setHotDeals] = useState(false);
  const [isSaved, setSaved] = useState(false);
  const [maxWeight, setMaxWeight] = useState("");
  const [openEquipmentModal, setOpenEquipmentModal] = useState(false);
  const [openEquipmentTypeModal, setOpenEquipmentTypeModal] = useState(false);
  const [openRadiusModal, setOpenRadiusModal] = useState(false);
  const [origin, setOrigin] = useState(labels.ORIGIN);
  const [prefered, setPrefered] = useState({});
  const [radiusSourceValue, setRadiusSourceValue] = useState(labels.ONE_FIFTY);
  const [radiusSrc, setRadiusSrc] = useState(labels.ONE_FIFTY);
  const [showNoLoadPopup, setShowNoLoadPopup] = useState(false);
  const [viewLoadTriggerSrc, setViewLoadTriggerSrc] = useState(null);
  const [radiusDestinationValue, setRadiusDestinationValue] = useState(
    labels.ONE_FIFTY
  );
  const [originLatLong, setOriginLatLong] = useState({ ...defaultLatLong });
  const [destinationLatLong, setDestinationLatLong] = useState({
    ...defaultLatLong,
  });
  const [enableClearButton, setEnableClearButton] = useState(false);
  const pickerCalendarRef = useRef();
  const deliverCalendarRef = useRef();

  const [disableEquipTypeClick, setDisableEquipTypeClick] = useState(true);

  /**
   * To Enable/Disable the save search button.
   */
  const [isSaveSearchEnabled, setIsSaveSearchEnabled] = useState(false);
  /**
   * To run the view load after deleting the saved search.
   */
  const [canCallViewLoad, setCanCallViewLoad] = useState(false);
  /**
   * To Enable/Disable the save search button on update.
   */
  const [canUpdateSaveSearch, setCanUpdateSaveSearch] = useState(false);

  const [showSaveSearchDeleteModal, setShowSaveSearchDeleteModal] =
    useState(false);

  const [showSaveSearchUpdateModal, setShowSaveSearchUpdateModal] =
    useState(false);

  const [showEquipType, setShowEquipType] = useState(true);

  const [loadNumber, setLoadNumber] = useState("");

  const isDestination = (destination) => destination == labels.DESTINATION;
  const isOrigin = (origin) => origin == labels.ORIGIN;
  const isANYWHERE = (loaction) => loaction == labels.ANYWHERE;

  const swapLocationAndRadius = () => {
    if (isOrigin(origin) && isDestination(destination)) {
    } else {
      if (isDestination(destination)) {
        setOrigin(labels.ORIGIN);
        setOriginLatLong({ ...defaultLatLong });
      } else {
        setOrigin(destination);
        setOriginLatLong(destinationLatLong);
      }

      if (isOrigin(origin)) {
        setDestination(labels.DESTINATION);
        setDestinationLatLong({ ...defaultLatLong });
      } else {
        setDestination(origin);
        setDestinationLatLong(originLatLong);
      }

      setRadiusSourceValue(radiusDestinationValue);
      setRadiusDestinationValue(radiusSourceValue);
    }
  };

  const onPickUpDateChange = ({ endDate, startDate }) => {
    // State used to prepopulate the pickup date picker with selected search criteria.
    setPickupDateRange({
      startPickup: startDate,
      endPickup: endDate,
    });
    setEnableClearButton(true);
  };

  const onDeliveryDateChange = ({ endDate, startDate }) => {
    // State used to prepopulate the delivery date picker with selected search criteria.
    setDeliveryDateRange({
      startDelivery: startDate,
      endDelivery: endDate,
    });
    setEnableClearButton(true);
  };

  const handleHotDetals = () => {
    const hotDealsToBeSet = !hotDeals;
    setHotDeals(hotDealsToBeSet);
    setEnableClearButton(true);
  };

  const showToggleButton = () => {
    const hotDealsDefault = { alignSelf: "center", height: "31", width: "51" };
    return hotDeals ? (
      <images.Images.Icon_toggle_on
        {...hotDealsDefault}
        onPress={handleHotDetals}
      />
    ) : (
      <images.Images.Icon_toggle_off
        {...hotDealsDefault}
        onPress={handleHotDetals}
      />
    );
  };

  const headerLeftCmp = () => {
    return (
      <Pressable
        justifyContent="center"
        flexDirection={"row"}
        alignItems={"center"}
      >
        <IconButton
          ml={-2}
          icon={<NativeWrapperIcon icon={images.Images.Icon_Back} />}
        />
      </Pressable>
    );
  };

  const handleOriginMiles = () => {
    setRadiusSrc("Source");

    if (isOrigin(origin) || isANYWHERE(origin) || origin?.length === 2) {
      setRadiusSourceValue("150");
    } else {
      radiusSource = "source";
      setOpenRadiusModal(true);
      setEnableClearButton(true);
    }
  };

  const handleDestinationMiles = () => {
    setRadiusSrc("Destination");
    if (
      isDestination(destination) ||
      isANYWHERE(destination) ||
      destination.length === 2
    ) {
      setRadiusDestinationValue("150");
    } else {
      radiusSource = "destination";
      setOpenRadiusModal(true);
      setEnableClearButton(true);
    }
  };
  const closeNoLoadPopup = () => {
    setShowNoLoadPopup(false);
  };
  const closeSaveSearchDeleteModal = () => {
    setShowSaveSearchDeleteModal(false);
  };
  const closeSaveSearchUpdateModal = () => {
    setShowSaveSearchUpdateModal(false);
  };

  const onLoadNumberChange = (text) => {
    if (isSpecialCharacter(text) || text == "") {
      setLoadNumber(text);
      setEnableClearButton(true);
    }
  };

  const mainView = () => {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: "column",
        }}
      >
        <View
          style={{
            flex: 7,
            marginTop: 8,
            paddingHorizontal: 16,
            paddingBottom: 4,
          }}
        >
          <KeyboardAwareScrollView
            backgroundColor={"screen_bg.300"}
          >
            <Box
              w="100%"
              h="100%"
              flexDirection={"column"}
              justifyContent={"space-evenly"}
            >
              <Box>
                <Row
                  justifyContent={"space-between"}
                >
                  <FlatButton
                    label={origin}
                    h="42px"
                    borderColor={"view_theme.50"}
                    borderWidth={"1px"}
                    _text={{ variant: "semiboldmd" }}
                    
                    width="72%"
                    leftIcon={
                      <Box mt="2">
                        <images.Images.Icon_pickup
                          {...iconDefault}
                          height={"15px"}
                          width={"15px"}
                        />
                      </Box>
                    }
                    style={[Platform.select({ ios: { zIndex: 1 } })]}
                  />
                  <FlatButton
                    w="25%"
                    mt={2}
                    pt="1"
                    height="42px"
                    rounded="sm"
                    bgColor={"brand.50"}
                    borderColor={"view_theme.50"}
                    borderWidth={"1px"}
                    onPress={handleOriginMiles}
                  >
                    <Box
                      w="100%"
                      h="100%"
                      flexDirection={"column"}
                      justifyContent={"center"}
                      alignItems={"center"}
                    >
                      <Text
                        color={
                          isOrigin(origin) ||
                            isANYWHERE(origin) ||
                            origin?.length === 2
                            ? "text_theme.300"
                            : "view_theme.300"
                        }
                        variant={"regularsm"}
                      >
                        {radiusSourceValue + " " + labels.MILES}
                      </Text>
                    </Box>
                  </FlatButton>
                </Row>

                <Row
                  justifyContent={"space-between"}
                  mt={2}
                >
                  <FlatButton
                    label={destination}
                    h="42px"
                    _text={{ variant: "semiboldmd" }}
                    borderColor={"view_theme.50"}
                    borderWidth={"1px"}
                    width="72%"
                    leftIcon={
                      <Box mt="2">
                        <images.Images.Icon_delivery
                          {...iconDefault}
                          height={"15px"}
                          width={"15px"}
                        />
                      </Box>
                    }
                    style={[Platform.select({ ios: { zIndex: 1 } })]}
                  />
                  <FlatButton
                    w="25%"
                    height="42px"
                    mt="2"
                    pt="1"
                    rounded="sm"
                    bgColor={"brand.50"}
                    borderColor={"view_theme.50"}
                    borderWidth={"1px"}
                    onPress={handleDestinationMiles}
                  >
                    <Box
                      w="100%"
                      h="100%"
                      flexDirection={"column"}
                      justifyContent={"center"}
                      alignItems={"center"}
                    >
                      <Text
                        color={
                          isDestination(destination) ||
                            isANYWHERE(destination) ||
                            destination?.length === 2
                            ? "text_theme.300"
                            : "view_theme.300"
                        }
                        variant={"regularsm"}
                      >
                        {radiusDestinationValue + " " + labels.MILES}
                      </Text>
                    </Box>
                  </FlatButton>
                </Row>
                <Divider
                  orientation="vertical"
                  left={"6"}
                  top="8"
                  position={"absolute"}
                  h="44px"
                  thickness={"2"}
                  _light={{ bg: "view_theme.300" }}
                ></Divider>

                <Box
                  w="30"
                  h="30"
                  right={
                    isTablet
                      ? (windowWidth - 50) / 4
                      : Platform.OS === "ios"
                        ? 79
                        : (windowWidth - 70) / 4
                  }
                  top={"10"}
                  rounded="2"
                  position={"absolute"}
                >
                  <Pressable
                    w="30"
                    h="30"
                    bgColor={"brand.50"}
                    rounded="md"
                    onPress={swapLocationAndRadius}
                  >
                    <images.Images.Icon_swap
                      alignSelf="center"
                    />
                  </Pressable>
                </Box>
              </Box>
              <Box
                borderColor={"view_theme.50"}
                borderWidth={"1px"}
                mt={"5"}
                borderRadius={"5px"}
              >
                <DateRangePicker
                  onChange={onPickUpDateChange}
                  leftIcon={<images.Images.Icon_date_range_origin {...iconDefault} />}
                  placeholder={labels.PICK_UP}
                  ref={pickerCalendarRef}
                  fromPage="SearchCriteria"
                  selectedStartDate={
                    !isEmpty(pickupDateRange.startPickup)
                      ? pickupDateRange.startPickup
                      : null
                  }
                  selectedEndDate={
                    !isEmpty(pickupDateRange.endPickup)
                      ? pickupDateRange.endPickup
                      : null
                  }
                ></DateRangePicker>
              </Box>
              <Box
                borderColor={"view_theme.50"}
                borderWidth={"1px"}
                mt={3}
                borderRadius={"5px"}
              >
                <DateRangePicker
                  onChange={onDeliveryDateChange}
                  leftIcon={
                    <images.Images.Icon_date_range_destination
                      {...iconDefault}
                    />
                  }
                  placeholder={labels.DELIVERY}
                  ref={deliverCalendarRef}
                  fromPage="SearchCriteria"
                  selectedStartDate={
                    !isEmpty(deliveryDateRange.startDelivery)
                      ? deliveryDateRange.startDelivery
                      : null
                  }
                  selectedEndDate={
                    !isEmpty(deliveryDateRange.endDelivery)
                      ? deliveryDateRange.endDelivery
                      : null
                  }
                ></DateRangePicker>
              </Box>
              <FlatButton
                h={10}
                mt={3}
                borderColor={"view_theme.50"}
                borderWidth={"1px"}
                leftIcon={
                  <images.Images.Icon_weight
                    {...iconDefault}
                  />
                }
                rightComponent={
                  <Text
                    alignSelf="center"
                    variant={"boldsm"}
                    pr={"1"}
                  >
                    {labels.LBS}
                  </Text>
                }
              >
                <Input
                  w="100%"
                  value={maxWeight}
                  keyboardType="number-pad"
                  returnKeyType="done"
                  noOfLines={1}
                  ml="1"
                  fontWeight="400"
                  size={"lg"}
                  placeholder={labels.MAX_WEIGHT}
                  variant="unstyled"
                  onChangeText={(text) => {
                    setMaxWeight(text);
                  }}
                  pb={"1"}
                  _light={{ placeholderTextColor: "text_theme.700" }}
                />
              </FlatButton>
              <FlatButton
                h={10}
                mt={3}
                borderColor={"view_theme.50"}
                borderWidth={"1px"}
                label={showEquipmentsText(equipment, true)}
                leftIcon={
                  <images.Images.Truck_icon
                    {...iconDefault}
                  />
                }
                onPress={() => {
                  setOpenEquipmentModal(true);
                }}
              />
              {showEquipType && (
                <FlatButton
                  h={10}
                  mt={3}
                  borderColor={"view_theme.50"}
                  borderWidth={"1px"}
                  disabled={disableEquipTypeClick}
                  leftIcon={
                    equipment[0]?.code == 0 ? (
                      isEmpty(prefered) ? (
                        <images.Images.EquipmentType
                          {...iconDefault}
                        />
                      ) : (
                        <images.Images.EquipmentType_Black
                          {...iconDefault}
                        />
                      )
                    ) : (
                      <images.Images.EquipmentType_Black
                        {...iconDefault}
                      />
                    )
                  }
                  onPress={() => {
                    setOpenEquipmentTypeModal(true);
                  }}
                >
                  <Text
                    alignSelf={"center"}
                    ml={3.5}
                    color={
                      equipment[0]?.code == 0
                          ? "brand.500"
                          : "radio.50"
                    }
                    numberOfLines={1}
                    variant={"regularmd"}
                  >
                    {showEquipmentsTypeText(equipmentType, true)}
                  </Text>
                </FlatButton>
              )}

              {showEquipType && equipment[0].code == 0 ? (
                isEmpty(prefered) ? (
                  <Text variant={"regularxs"} color={"brand.500"}>
                    {labels.EQUIPMENTCONDITION}
                  </Text>
                ) : null
              ) : null}
              
                <FlatButton
                  h={10}
                  mt={3}
                  borderColor={"view_theme.50"}
                  borderWidth={"1px"}
                  label={labels.HOT_DEALS}
                  leftIcon={
                    <images.Images.Icon_hot_deals
                      {...iconDefault}
                    />
                  }
                  rightComponent={showToggleButton()}
                />
              
              
              <FlatButton
                h={10}
                mt={3}
                borderColor={"view_theme.50"}
                borderWidth={"1px"}
                leftIcon={
                  <images.Images.LoadSearch
                    {...iconDefault}
                  />
                }
              >
                <Input
                  w="90%"
                  value={loadNumber}
                  keyboardType="number-pad"
                  returnKeyType="done"
                  noOfLines={1}
                  ml="1"
                  fontWeight="400"
                  size={"lg"}
                  placeholder={labels.LOAD_NUMBER}
                  variant="unstyled"
                  onChangeText={(text) => {
                    onLoadNumberChange(text);
                  }}
                  pb={"1"}
                  _light={{ placeholderTextColor: "text_theme.700" }}
                />
              </FlatButton>
              
            </Box>
          </KeyboardAwareScrollView>
        </View>
        <View style={{ flex: 1 }}>
          <Box
            w="100%"
            backgroundColor={"brand.50"}
            alignSelf="flex-end"
            alignItems={"center"}
          >
            <Box
              w="90%"
              h="100%"
              flexDirection={"row"}
              justifyContent={"space-around"}
              alignItems={"center"}
            >
              
                <ShowSavedButton
                  flex={1}
                  mr={3}
                  isSaved={isSaved}
                  labels={labels}
                  disabledButton={!isSaveSearchEnabled}
                  isSaveSearchEnabled={isSaveSearchEnabled}
                  canUpdateSaveSearch={canUpdateSaveSearch}
                  setShowSaveSearchUpdateModal={setShowSaveSearchUpdateModal}
                />
              
              <Button
                flex={1}
                h={"10"}
                isDisabled={false}
                variant="drivePrimary"
                onPress={() => onViewLoads(VIEW_LOADS_CLICKED)}
              >
                <Text variant="boldsm">{labels.VIEW_LOADS}</Text>
              </Button>
            </Box>
          </Box>
        </View>
      </View>
    );
  };

  return (
    
      <Box h="100%" w="100%">
        <CustomHeaderComponent
          headerLeft={headerLeftCmp()}
          headerTitle={labels.SEARCH_CRITERIA}
          enableSafeArea={
            true
          }
          headerRight={
            isSaved ? (
              <IconButton
                icon={<images.Images.Icon_Delete color={"black"} />}
              />
            ) : (
              <Button
                _text={{
                  color: enableClearButton ? "radio.100" : "text_theme.300",
                }}
                disabled={!enableClearButton}
                padding={0}
                height={"100%"}
                w={70}
                marginRight={3}
              >
                {labels.CLEAR}
              </Button>
            )
          }
        />
       {mainView()} 
        {/* {openRadiusModal && (
          <RadiusMilesModal
            title={labels.RADIUS_MILES}
            open={openRadiusModal}
            source={radiusSource}
            radius={
              radiusSource == "Source"
                ? radiusSourceValue
                : radiusDestinationValue
            }
            originRadius={radiusSourceValue}
            destRadius={radiusDestinationValue}
            radiusSrc={radiusSrc}
            openCloseCallback={setOpenRadiusModal}
            valueCallback={radiusModalRadiusValueCallback}
            radii={RadiusData.radius}
          />
        )}
        {openEquipmentModal && (
          <EquipmentSelection
            open={openEquipmentModal}
            callback={euipmentCallback}
            closeModal={equipmentModalClose}
            equipments={
              equipment.length > 0
                ? equipment[0].description != labels.ALL_EQUIPMENT
                  ? equipment
                  : []
                : []
            }
            prefer={prefered}
          />
        )}
        {openEquipmentTypeModal && (
          <EquipmentTypeSelection
            open={openEquipmentTypeModal}
            callback={equipmentTypecallback}
            closeModal={equipmentTypeModalClose}
            equipments={
              equipmentType.length > 0
                ? equipmentType[0].description != labels.EQUIPMENTTYPE
                  ? equipmentType
                  : []
                : []
            }
          />
        )} */}
      </Box>
  
  );
};

export default SearchCriteria;

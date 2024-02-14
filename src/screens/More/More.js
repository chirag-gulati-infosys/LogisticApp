import React, { useEffect, useRef, useState } from "react";
import {
  Alert,
  Platform,
  SafeAreaView,
  AppState,
  Linking,
  BackHandler,
} from "react-native";
import {
  Box,
  Button,
  ChevronRightIcon,
  Divider,
  Image,
  Link,
  Pressable,
  Row,
  ScrollView,
  Skeleton,
  Spinner,
  Text,
} from "native-base";
import * as images from "../../assets/ImageProperties";
import labels from "../../localization/localization";
import { isEmpty } from "../../utils/utils";

const RXOMarketPlaceCard = () => {

  return (
    <Pressable
    >
      <Box
        flexDirection={"row"}
        justifyContent={"space-between"}
        p="15px"
        alignItems={"center"}
        bgColor="brand.50"
        borderRadius={"5"}
        mt={"16px"}
        borderColor={"view_theme.200"}
        borderWidth={"2px"}
        borderLeftWidth={"2px"}
        borderRightWidth={"2px"}
      >
        <Box flexDirection={"row"}>
          <Image
            source={images.Images.rxo_marketplace}
            alt={"Marketplace Image"}
            alignSelf={"center"}
            h={10}
            w={10}
          />
          <Box pl="4" maxWidth={"82%"}>
            <Text
              variant={"bold_md"}
            >
              {labels.RXO_EXTRA_MARKETPLACE}
            </Text>
            <Text
              variant={"regularsm"}
            >
              {labels.RXO_MARKET_DESC}
            </Text>
          </Box>
        </Box>
        <ChevronRightIcon
          color={"black"}
        />
      </Box>
    </Pressable>
  );
};

const CertificationCard = () => {
  return (
    <Pressable
    >
      <Box
        flexDirection={"row"}
        justifyContent={"space-between"}
        p="15px"
        alignItems={"center"}
        bgColor="brand.50"
        borderRadius={"5"}
        mt={"16px"}
        borderColor={"view_theme.200"}
        borderWidth={"2px"}
        borderLeftWidth={"2px"}
        borderRightWidth={"2px"}
      >
        <Box flexDirection={"row"}>
          <Image
            source={images.Images.certificate}
            alt={"Certificate Image"}
            alignSelf={"center"}
          />
          <Box pl="4" maxWidth={"84%"}>
            <Text
              variant={"bold_md"}
            >
              {labels.CERTIFICATION}
            </Text>
            <Text
              variant={"regularsm"}
            >
              {labels.CERTIFICATE_DES}
            </Text>
          </Box>
        </Box>
        <ChevronRightIcon
          color={"black"}
        />
      </Box>
    </Pressable>
  );
};

const More = (props) => {
  const [touchId, setTouchId] = useState(false);
  const [voiceCommand, setVoiceCommand] = useState(false);
  const [showLocationModal, setLocationShowModal] = useState(false);
  
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [carrier, setCarrier] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [carrierScore, setCarrierScore] = useState("");
  const [carrierStatus, setCarrierStatus] = useState("");
  const [rewardsColor, setRewardsColor] = useState("#d4af37");
  const [isEnrolled, setIsEnrolled] = useState("");
  const [starCount, setStarCount] = useState("0");
  const [refresh, setRefresh] = useState(false);
  const [showLogoutPopup, setShowLogoutPopup] = useState(false);
  const [isLoading, setIsLoading] = useState(false);


  const handleLogoutPopup = () => {
    // if (netInfo.isConnected) {
      handleLogout();
  };

  const handleLogoutCallback = (id) => {
    if (id == true) {
      handleLogout();
    }
    setShowLogoutPopup(false);
  };

  const handleLogout = () => {
   
  };

  const handleLocationCallback = () => {
    setLocationShowModal(false);
  };


  const menuItem = (
    imgSrc,
    label,
    count = "",
    index = 0,
    callback = () => {}
  ) => {
    return (
      <Box key={index}>
        <Pressable onPress={callback}>
          <Box
            flexDirection={"row"}
            justifyContent={"space-between"}
            p="20px"
          >
            
            {label === labels.POSTED_TRUCKS ? (
              <images.Images.Posted_Truck
                height="22px"
                width="22px"
              />
            ) : (
              <Image
                height="20px"
                width="20px"
                alignSelf={"center"}
                source={imgSrc}
                alt="image"
                resizeMode="contain"
              />
            )}
            <Box
              flexDirection={"row"}
              justifyContent="flex-start"
              w="80%"
            >
              <Text variant={"semiboldmd"}>
                {label}
              </Text>
              {!isEmpty(count) ? (
                <Box
                  height="24px"
                  width="36px"
                  marginLeft="4"
                  borderRadius="15"
                  bgColor="brand.400"
                  justifyContent="center"
                  alignItems="center"
                  alignSelf={"center"}
                >
                  <Text
                    color="brand.50"
                    fontSize={"md"}
                    fontWeight="700"
                  >
                    {count}
                  </Text>
                </Box>
              ) : null}
            </Box>
            <Image
              tintColor={"black"}
              alignSelf={"center"}
              source={images.Images.rightarrow}
              alt="image"
              h={3}
              resizeMode="contain"
            />
          </Box>
        </Pressable>
        <Divider h="2px" />
      </Box>
    );
  };

  const menuItemAsPerUserRole = () => {
    let menuItems = [];

      menuItems.push(
        menuItem(
          images.Images.search,
          labels.SAVED_SEARCHES,
          "",
          menuItems.length + 1,
          null
        )
      );
      menuItems.push(
        menuItem(
          "",
          labels.POSTED_TRUCKS,
          "",
          menuItems.length + 1,
          null
        )
      );

      menuItems.push(
        menuItem(
          images.Images.question,
          labels.CONTACT_SUPPORT,
          "",
          menuItems.length + 1,
          null
        )
      );
      menuItems.push(
        menuItem(
          images.Images.phone_black,
          labels.HELP,
          "",
          menuItems.length + 1,
          null
        )
      );
    
    return menuItems;
  };


  const CarrierRewards = () => {
    return (
      <Pressable
        justifyContent="center"
        borderColor={"brand.300"}
        mt={"4"}
        h={"104"}
        borderRadius={"5"}
        bgColor={rewardsColor}
        padding="4"
      >
        <Text
          alignContent="flex-start"
          color={"brand.50"}
          variant={"semiboldlg"}
        >
          {labels.XPO_CARRIER_REWARDS_CAPPS + "\u2122"}
        </Text>
        <Box flexDirection={"row"}>
          <Box>
            <Text
              color={"brand.50"}
              variant={"regularsm"}
            >
              {labels.SCORE}
            </Text>
            <Text
              color={"brand.50"}
              variant={"bold_md"}
            >
              {100}
            </Text>
          </Box>
          <Box ml="38">
            <Box flexDirection={"row"}>
              <Text
                color={"brand.50"}
                variant={"regularsm"}
              >
                {labels.STATUS}
              </Text>
              <Image
                ml={Platform.OS === "android" ? "72%" : "74%"}
                source={images.Images.direction}
                alt="image"
              />
            </Box>
            <Box flexDirection={"row"}>
              <Text
                color={"brand.50"}
                variant={"bold_md"}
              >
                {"Active"}
              </Text>
            </Box>
          </Box>
        </Box>
      </Pressable>
    );
  };

  const ProfileSection = () => {
    return (
      <Box
        bgColor={"screen_bg.600"}
        p={"4"}
      >
        
          <CarrierRewards />
        
          <CertificationCard />

          <RXOMarketPlaceCard/>
        
      </Box>
    );
  };

  return (
    <SafeAreaView flex={1} style={{ backgroundColor: "#FFFFFF" }}>
      {/* <NavigationEvents onWillFocus={handleWillFocus} /> */}
      <Box
        alignItems="stretch"
        w="100%"
        h="100%"
        flexDirection="column"
        bgColor={"brand.50"}
      >

        <ScrollView height="100%">
            <ProfileSection />
           
          {menuItemAsPerUserRole()}
          
            <Box
              alignItems={"center"}
              px="16px"
              mt={10}
            >
              <Button
                variant={"driveSecondary"}
                borderWidth={2}
                py={0}
                h="44"
                w="100%"
                _text={{
                  variant: "boldsm",
                  fontSize: "sm",
                }}
                onPress={handleLogoutPopup}
              >
                <Text color={"white"} variant={"boldsm"} fontSize="18px">
                  {labels.LOGOUT}
                </Text>
              </Button>
            </Box>
        </ScrollView>
      </Box>
    </SafeAreaView>
  );
};

export default More;
